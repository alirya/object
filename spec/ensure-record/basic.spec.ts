import {EnsureRecordParameters} from '../../dist/ensure-record.js';
import Boolean from '@axiona/boolean/boolean.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('basic', function () {


    const data : {
        data1 : string|number|boolean,
        data2 : string|boolean,
    } = {
        data1 : true,
        data2 : true,
    };

    const result = EnsureRecordParameters(data, Boolean, (value)=>new TypeError(typeof value));

    expect(result.data1).toEqual(true);
    expect(result.data2).toEqual(true);

});
