import {ValueParameters} from '../../../dist/property/boolean/value';
import Type from '../../../dist/boolean/object';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function () {


    it('valid', ()=>{

        let data = {
            data : {}
        };

        let result = ValueParameters(data, 'data', Type);
        expect(result).toBeTrue();
    });

    it('invalid', ()=>{

        let data = {
            data : 1
        };

        let result = ValueParameters(data, 'data', Type);
        expect(result).toBeFalse();
    });

});


