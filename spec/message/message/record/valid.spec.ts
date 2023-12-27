import {TypeParameters} from '@axiona/type/validator/type.js';
import {ValueAllParameters} from '../../../../dist/validator/value-all.js';
import {ValueCallbackParameters} from '../../../../dist/validator/value-callback.js';
import {MapAllParameters} from '../../../../dist/validator/map-all.js';
import {MapCallbackParameters} from '../../../../dist/validator/map-callback.js';
import And from '../../../../dist/validatable/and.js';
import Valid from '../../../../dist/message/message/record/valid.js';
import MessageMap from '../../../../dist/message/message/record/map.js';
import ValidatorValidatable from '../../../../dist/validator/validatable/record/infer.js';
import {ValuePartialParameters} from '../../../../dist/validator/validatable/record/value-partial.js';
import Instance from '@axiona/validator/validatable/validatable.js';

it('force console log', () => {spyOn(console, 'log').and.callThrough();});


it('value all', function() {

    const validator = {
        name: TypeParameters('string'),
        address: TypeParameters('string'),
        user: TypeParameters('string'),
        info: ValueAllParameters({
            age: TypeParameters('string'),
            hobby: TypeParameters('string'),
            no: TypeParameters('string'),
        }, (v) => And(v), Valid)
    };
    const property = ValueAllParameters(validator, (v)=>And(v), Valid);
});


it('value partial', function() {

    const validator = {
        name: TypeParameters('string'),
        address: TypeParameters('string'),
        user: TypeParameters('string'),
        info: ValueAllParameters({
            age: TypeParameters('string'),
            hobby: TypeParameters('string'),
            no: TypeParameters('string'),
        }, (v) => And(v), Valid)
    };
    const property = ValueAllParameters(validator, (v)=>And(v), Valid);
});


it('value callback', function() {

    const validator = {
        name : TypeParameters('string'),
        address : TypeParameters('string'),
        user : TypeParameters('string'),
        info : ValueCallbackParameters({
                age : TypeParameters('string'),
                hobby : TypeParameters('string'),
                no : TypeParameters('string'),
            }, (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
            And,
            Valid
        )
    };

    const property = ValueCallbackParameters(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
        And,
        Valid
    );
});


it('value all', function() {

    const validator = {
        name: TypeParameters('string'),
        address: TypeParameters('string'),
        user: TypeParameters('string'),
        info: MapAllParameters({
            age: TypeParameters('string'),
            hobby: TypeParameters('string'),
            no: TypeParameters('string'),
        }, (v) => And(v), Valid)
    };
    const property = MapAllParameters(validator, (v)=>And(v), Valid);
});


it('value partial', function() {

    const validator = {
        name: TypeParameters('string'),
        address: TypeParameters('string'),
        user: TypeParameters('string'),
        info: MapAllParameters({
            age: TypeParameters('string'),
            hobby: TypeParameters('string'),
            no: TypeParameters('string'),
        }, (v) => And(v), Valid)
    };
    const property = MapAllParameters(validator, (v)=>And(v), Valid);
});


it('value callback', function() {

    const validator = {
        name : TypeParameters('string'),
        age : TypeParameters('number'),
        address : TypeParameters('string'),
        info : MapCallbackParameters({
                age : TypeParameters('number'),
                hobby : TypeParameters('string'),
                no : TypeParameters('number')
            },
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValuePartialParameters(value, validators),
            And, MessageMap)
    };

    const value = {
        name : 'name',
        age : '15',
        address : 'address',
        info : {
            age : 5,
            hobby : 'string',
            no : 6,
        }
    };

    const property = MapCallbackParameters(validator,
        (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValuePartialParameters(value, validators),
        And,
        MessageMap
    );
});
