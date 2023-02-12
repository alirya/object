import {PropertiesLazyDynamicParameters} from '../../dist/properties-lazy-dynamic.js';


it('enable console log', () => spyOn(console, 'log').and.callThrough());

it('plain', () => {

    const source = {};

    const object = PropertiesLazyDynamicParameters(source, { get data () { return 'string.js'; } }, true, true);

    const string : string = object.data;

    // @ts-expect-error
    const nonExist  = object.c;

});


it('different type', () => {

    const source = {

        get data () : number { return  1;}
    };

    const object = PropertiesLazyDynamicParameters(source, { get data () { return 'string.js'; } }, true, true);

    // @ts-expect-error
    const number : number = object.data;

    const string : string = object.data;

});

describe('class', () => {

    interface Interface {
        readonly data : string;
    }

    it('implement', () => {

        class Implementer implements Interface {

            get data ()  {

                return '';

            }
        }

        const source : Interface = new Implementer();
        const type : Interface = PropertiesLazyDynamicParameters(source, { get data () { return 'string.js'; } }, true, true);
        const string : string = type.data;

    });

    it('class', () => {

        class Test  {

            get data ()  {

                return '';
            }
        }

        const source : Interface = new Test();
        const type : Interface = PropertiesLazyDynamicParameters(source, { get data () { return 'string.js'; } }, true, true);
        const string : string = type.data;

    });
});

describe('not exists', () => {

    it('var', () => {

        const source = {};


        const object = PropertiesLazyDynamicParameters(source, { get data () { return 'string.js'; } }, true, true);

        // @ts-expect-error
        const string : string = object.c;

    });

    it('multi', () => {

        const source = {

            get data ()  {
                return '';
            }
        };


        const object = PropertiesLazyDynamicParameters(source, { get value () { return 'string.js'; } }, true, true);

        // @ts-expect-error
        const string : string = object.c;

    });
});
