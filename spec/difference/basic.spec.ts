import {DifferenceParameters} from '../../dist/difference.js';
import {TypeEqualParameters} from '@alirya/type/boolean/type-equal.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('basic', function () {

    const target = {
        number : 1,
        string : 'a',
        boolean : true,
    };

    const compare = {
        number : 2,
        object : {}
    };

    it('force console log', () => {

        expect(
            DifferenceParameters(target, compare, TypeEqualParameters)
        ).toEqual({
            string : 'a',
            boolean : true,
        });
    });

});
