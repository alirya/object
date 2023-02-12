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
        const number : undefined|number = result.number;
        const string : undefined|string = result.string;
        const boolean : undefined|boolean = result.boolean;
    }

    {
        // @ts-ignore
        const number : number = result.number;
        // @ts-ignore
        const string : string = result.string;
        // @ts-ignore
        const boolean : boolean = result.boolean;
    }

    // @ts-ignore
    const object : object = result.object;

    // @ts-ignore
    const undef : object = result.f;

});
