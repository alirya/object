import {SelectParameters} from '../../dist/select.js';
import {SelectParameter} from '../../dist/select.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('plain object', () => {

    let object = {
        data1 : 'data1',
        data2 : function () { return 1; },
        data3 : true,
    };

    it('test value', () => {

        expect(
            SelectParameters(object, 'data1','data2')
        ).toEqual(
            SelectParameter({object, keys:['data1', 'data2']})
        );

    });

});
