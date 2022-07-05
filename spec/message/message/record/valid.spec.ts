import {TypeParameters} from '@alirya/type/validator/type';
import {ValueAllParameters} from '../../../../dist/validator/value-all';
import {ValueCallbackParameters} from '../../../../dist/validator/value-callback';
import {MapAllParameters} from '../../../../dist/validator/map-all';
import {MapCallbackParameters} from '../../../../dist/validator/map-callback';
import And from '../../../../dist/validatable/and';
import Valid from '../../../../dist/message/message/record/valid';
import MessageMap from '../../../../dist/message/message/record/map';
import ValidatorValidatable from '../../../../dist/validator/validatable/record/infer';
import {ValuePartialParameters} from '../../../../dist/validator/validatable/record/value-partial';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => {spyOn(console, 'log').and.callThrough();});


it('value all', function() {

    let validator = {
        name: TypeParameters('string'),
        address: TypeParameters('string'),
        user: TypeParameters('string'),
        info: ValueAllParameters({
            age: TypeParameters('string'),
            hobby: TypeParameters('string'),
            no: TypeParameters('string'),
        }, (v) => And(v), Valid)
    };
    let property = ValueAllParameters(validator, (v)=>And(v), Valid);
});


it('value partial', function() {

    let validator = {
        name: TypeParameters('string'),
        address: TypeParameters('string'),
        user: TypeParameters('string'),
        info: ValueAllParameters({
            age: TypeParameters('string'),
            hobby: TypeParameters('string'),
            no: TypeParameters('string'),
        }, (v) => And(v), Valid)
    };
    let property = ValueAllParameters(validator, (v)=>And(v), Valid);
});


it('value callback', function() {

    let validator = {
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

    let property = ValueCallbackParameters(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
        And,
        Valid
    );
});


it('value all', function() {

    let validator = {
        name: TypeParameters('string'),
        address: TypeParameters('string'),
        user: TypeParameters('string'),
        info: MapAllParameters({
            age: TypeParameters('string'),
            hobby: TypeParameters('string'),
            no: TypeParameters('string'),
        }, (v) => And(v), Valid)
    };
    let property = MapAllParameters(validator, (v)=>And(v), Valid);
});


it('value partial', function() {

    let validator = {
        name: TypeParameters('string'),
        address: TypeParameters('string'),
        user: TypeParameters('string'),
        info: MapAllParameters({
            age: TypeParameters('string'),
            hobby: TypeParameters('string'),
            no: TypeParameters('string'),
        }, (v) => And(v), Valid)
    };
    let property = MapAllParameters(validator, (v)=>And(v), Valid);
});


it('value callback', function() {

    let validator = {
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

    let value = {
        name : 'name',
        age : '15',
        address : 'address',
        info : {
            age : 5,
            hobby : 'string',
            no : 6,
        }
    };

    let property = MapCallbackParameters(validator,
        (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValuePartialParameters(value, validators),
        And,
        MessageMap
    );
});
