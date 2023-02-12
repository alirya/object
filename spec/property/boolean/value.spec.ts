import {ValueParameters} from '../../../dist/property/boolean/value.js';
import Type from '../../../dist/boolean/object.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function () {


    it('valid', ()=>{

        const data = {
            data : {}
        };

        const result = ValueParameters(data, 'data', Type);
        expect(result).toBeTrue();
    });

    it('invalid', ()=>{

        const data = {
            data : 1
        };

        const result = ValueParameters(data, 'data', Type);
        expect(result).toBeFalse();
    });

});


