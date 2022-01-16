import MapCallback from '../../../dist/validatable/map-callback-parameters';
import ValidateMap from '../../../dist/validator/validatable/record/map-parameters';
import And from '../../../dist/validatable/and';
import MessageMap from '../../../dist/message/message/record/map';
import Type from '@alirya/type/validator/type-parameters';

let validator = {
    name : Type('string'),
    address : Type('string'),
};


it('same value', function() {

    let value = {
        name : 'name',
        address : 'address',
    };

    let validatable = new MapCallback(value, validator, ValidateMap, And, MessageMap);

    expect(value).toEqual(validatable.value);

});

it('extra', function() {

    let value = {
        name : 'name',
        address : 'address',
        extra : 'value',
    };

    let validatable = new MapCallback(value, validator, ValidateMap, And, MessageMap);

    expect(value).not.toEqual(validatable.value);

    expect({
        name : 'name',
        address : 'address'
    }).toEqual(validatable.value);

});

it('missing', function() {

    let value = {
        name : 'name',
    };

    // @ts-expecerror
    let validatable = new MapCallback(value, validator, ValidateMap.Parameter, And, MessageMap);

    // @ts-expecerror
    expect(value).not.toEqual(validatable.value);

    // @ts-expecerror
    expect({name : 'name', address : 'address'}).not.toEqual(validatable.value);

    // @ts-expecerror
    expect({name : 'name', address : undefined}).toEqual(validatable.value);

});
