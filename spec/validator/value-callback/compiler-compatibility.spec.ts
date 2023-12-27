import {TypeParameters} from '@axiona/type/validator/type.js';
import {ValueCallbackParameters} from '../../../dist/validator/value-callback.js';
import {ValueParameters} from '../../../dist/validator/validatable/record/value.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatablesInterface from '../../../dist/validatable/validatables/validatables.js';
import {ValidatablesParameters} from '../../../dist/validatable/validatables.js';
import ValidatorValidatable from '../../../dist/validator/validatable/record/infer.js';
import {ValuePartialParameters} from '../../../dist/validator/validatable/record/value-partial.js';
import Message from '@axiona/message/message.js';
import Infer from '../../../dist/validator/validatable/record/infer.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



const validator = {
    name : TypeParameters('string'),
    address : TypeParameters('string'),
};

type Messages = {
    name : string,
    address : string,
};

describe('implicit complete', function() {

    const property = ValueCallbackParameters<any, string, Messages, typeof validator, Infer<typeof validator>>(validator, ValueParameters, And, result => MessageMap(result));

    const validatable = property('data');

    it('implicit complete', function() {

        let key : Validatable = validatable.validatables.name;
        key = validatable.validatables.address;

        const validatables : ValidatablesInterface = validatable;

        const record : Record<PropertyKey, Validatable> = validatable.validatables;

        // @ts-expect-error
        const and : ValidatablesParameters = validatable.validatables;

        if(validatable.valid) {

            const unknown : unknown = validatable.value;
            const string : string = validatable.value;

        } else {

            const unknown : unknown = validatable.value;
            const string : string = validatable.value;
        }
    });
});

it('explicit complete', function() {

    const property = ValueCallbackParameters<string>(validator,
        (value, validators) => ValueParameters(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    const validatable = property('data');

    if(validatable.valid) {

        const unknown : unknown = validatable.value;
        const string : string = validatable.value;

    } else {

        const unknown : unknown = validatable.value;
        const string : string = validatable.value;
    }

});

it('implicit partial', function() {

    const property = ValueCallbackParameters(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
        (v)=>And(<Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    const validatable = property('data');

    if(validatable.valid) {

        const unknown : unknown = validatable.value;
        const string : string = validatable.value;

    } else {

        const unknown : unknown = validatable.value;
        const string : string = validatable.value;
    }
});

it('explicit complete', function() {

    const property = ValueCallbackParameters<unknown, string>(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
        (v)=>And(<Record<PropertyKey, Validatable>>v),
        (v) => MessageMap(<Record<PropertyKey, Message>>v)
    );

    const validatable = property('data');

    if(validatable.valid) {

        const unknown : unknown = validatable.value;
        const string : string = validatable.value;

    } else {

        const unknown : unknown = validatable.value;
        const string : string = validatable.value;
    }

});

