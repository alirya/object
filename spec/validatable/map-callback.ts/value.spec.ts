import {MapCallbackParameters} from '../../../dist/validatable/map-callback.js';
import {MapParameters} from '../../../dist/validator/validatable/record/map.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';

let validator = {
    name : TypeParameters('string'),
    address : TypeParameters('string'),
};


it('same value', function() {

    let value = {
        name : 'name',
        address : 'address',
    };

    let validatable = new MapCallbackParameters(value, validator, MapParameters, And, MessageMap);

    expect(value).toEqual(validatable.value);

});

it('extra', function() {

    let value = {
        name : 'name',
        address : 'address',
        extra : 'value',
    };

    let validatable = new MapCallbackParameters(value, validator, MapParameters, And, MessageMap);

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


    let validatable = new MapCallbackParameters(
        // @ts-expect-error
        value,
        validator, MapParameters, And, MessageMap);


    expect(value).toEqual(
        // @ts-expect-error
        validatable.value
    );


    expect({name : 'name', address : 'address'}).not.toEqual(
        // @ts-expect-error
        validatable.value
    );

    expect({name : 'name', address : undefined}).not.toEqual(
        // @ts-expect-error
        validatable.value
    );

});
