import Exists from '../../property/boolean/exists';
import Readable from '../../property/boolean/readable-parameters';
import {List} from 'ts-toolbelt';
import {Required} from 'utility-types';
import Function from '@alirya/function/boolean/function';
import MultiHandlers from './multi-handlers';
import HasListAny from "./has-list-any";
import PrototypeOfListMerge from "./prototype-of-list-merge";
import GetOwnPropertyDescriptorListAll from "./get-own-property-descriptor-list-all";

/**
 * construct or bind {@link ProxyHandler} for property getter from
 * list of partial compatible object, making it fully compatible
 *
 * value is from the fist compatible object list
 */
export default class GetListFirst<
    Target extends object,
    Objects extends object[]
> extends MultiHandlers<Target, Objects> implements Required<ProxyHandler<Target>, 'get'>  {

    /**
     * mapping for getter handler
     */
    private handler : Partial<Record<keyof List.UnionOf<Objects>, List.UnionOf<Objects>>> = {};

    private hasHandler : HasListAny<Target, Objects>;
    private descriptors : GetOwnPropertyDescriptorListAll<Target, Objects>;

    constructor(handlers : Objects, withTarget : boolean = true) {

        super(handlers, withTarget);

        this.hasHandler = new HasListAny(handlers, withTarget);
        this.descriptors = new GetOwnPropertyDescriptorListAll(handlers, withTarget);
    }

    /**
     * reset cached mapping
     */
    reset() {

        this.handler = {};
    }

    /**
     * set handler to other {@link ProxyHandler<Argument>}
     * @param handler
     */
    bindTo<Argument extends Target>(handler : ProxyHandler<Argument>) : Required<ProxyHandler<Argument>, 'get'> {

        handler.get = (target: Target, property: PropertyKey, receiver: any) => this.get(target, property, receiver);

        this.hasHandler.bindTo(handler);
        this.descriptors.bindTo(handler);

        return handler as Required<ProxyHandler<Argument>, 'get'>;
    }

    /**
     * get the first compatible {@link handlers} property
     *
     * @param target
     * @param property
     * @param receiver
     */
    get(target: Target, property: PropertyKey, receiver: any): any {

        if(Exists(this.handler, property)) {

            return this.handler[<string|number>property][property];
        }

        for (const handler of this.getHandler(target)) {

            if(Readable(handler, property)) {

                if(Function(handler[property])) {

                    (this.handler as Partial<Record<keyof List.UnionOf<Objects>, List.UnionOf<Objects>>>)[<string|number>property] = {
                        [property] : (...argument : any[]) => handler[property](...argument)
                    };

                } else {

                    (this.handler as Partial<Record<keyof List.UnionOf<Objects>, List.UnionOf<Objects>>>)[property] = handler;
                }

                return handler[property];
            }
        }

        (this.handler as Partial<Record<keyof List.UnionOf<Objects>, List.UnionOf<Objects>>>)[property] = {[property]:undefined};

        return undefined;
    }

    has(target: Target, value: any): boolean {

        return this.hasHandler.has(target, value as string);
    }

    getOwnPropertyDescriptor(target: Target, property: PropertyKey) : PropertyDescriptor | undefined {

        return this.descriptors.getOwnPropertyDescriptor(target, property);
    }
}
