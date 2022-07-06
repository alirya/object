import {DifferenceParameters} from '../../dist/difference.js';
import {TypeEqualParameters} from '@alirya/type/boolean/type-equal.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', () => {

    const target = {
        number : 1,
        string : 'a',
        boolean : true,
    };

    const compare = {
        number : 2,
        object : {}
    };

    const result = DifferenceParameters(target, compare, TypeEqualParameters);

    {
        let number : undefined|number = result.number;
        let string : undefined|string = result.string;
        let boolean : undefined|boolean = result.boolean;
    }

    {
        // @ts-ignore
        let number : number = result.number;
        // @ts-ignore
        let string : string = result.string;
        // @ts-ignore
        let boolean : boolean = result.boolean;
    }

    // @ts-ignore
    let object : object = result.object;

    // @ts-ignore
    let undef : object = result.f;

});
