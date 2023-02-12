import {MapCallbackParameters} from '../../../dist/validatable/map-callback.js';
import {MapParameters} from '../../../dist/validator/validatable/record/map.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';

const validator = {
    name : TypeParameters('string'),
    address : TypeParameters('string'),
};


it('same value', function() {

    const value = {
        name : 'name',
        address : 'address',
    };

    const validatable = new MapCallbackParameters(value, validator, MapParameters, And, MessageMap);

    expect(value).toEqual(validatable.value);

});

it('extra', function() {

    const value = {
        name : 'name',
        address : 'address',
        extra : 'value',
    };

    const validatable = new MapCallbackParameters(value, validator, MapParameters, And, MessageMap);

    // expect(value).not.toEqual(validatable.value);
    expect(value).toEqual(validatable.value);

    expect({
        name : 'name',
        address : 'address',
        extra : 'value',
    }).toEqual(validatable.value);

    // expect({
    //     name : 'name',
    //     address : 'address'
    // }).toEqual(validatable.value);

});

it('missing', function() {

    const value = {
        name : 'name',
    };


    const validatable = new MapCallbackParameters(
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
