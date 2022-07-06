import {TypeParameters} from '@alirya/type/validator/type.js';
import {ValueCallbackParameters} from '../../../dist/validator/value-callback.js';
import {ValueParameters} from '../../../dist/validator/validatable/record/value.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatablesInterface from '../../../dist/validatable/validatables/validatables.js';
import {ValidatablesParameters} from '../../../dist/validatable/validatables.js';
import ValidatorValidatable from '../../../dist/validator/validatable/record/infer.js';
import {ValuePartialParameters} from '../../../dist/validator/validatable/record/value-partial.js';
import Message from '@alirya/message/message.js';
import Infer from '../../../dist/validator/validatable/record/infer.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



let validator = {
    name : TypeParameters('string'),
    address : TypeParameters('string'),
};

type Messages = {
    name : string,
    address : string,
};

describe('implicit complete', function() {

    let property = ValueCallbackParameters<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValueParameters, And, result => MessageMap(result));

    let validatable = property('data');

    it('implicit complete', function() {

        let key : Validatable = validatable.validatables.name;
        key = validatable.validatables.address;

        let validatables : ValidatablesInterface = validatable;

        let record : Record<PropertyKey, Validatable> = validatable.validatables;

        // @ts-expect-error
        let and : ValidatablesParameters = validatable.validatables;

        if(validatable.valid) {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;

        } else {

            let unknown : unknown = validatable.value;
            let string : string = validatable.value;
        }
    });
});

it('explicit complete', function() {

    let property = ValueCallbackParameters<string>(validator,
        (value, validators) => ValueParameters(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    let validatable = property('data');

    if(validatable.valid) {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;
    }

});

it('implicit partial', function() {

    let property = ValueCallbackParameters(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
        (v)=>And(<Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    let validatable = property('data');

    if(validatable.valid) {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;
    }
});

it('explicit complete', function() {

    let property = ValueCallbackParameters<unknown, string>(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
        (v)=>And(<Record<PropertyKey, Validatable>>v),
        (v) => MessageMap(<Record<PropertyKey, Message>>v)
    );

    let validatable = property('data');

    if(validatable.valid) {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;
    }

});

