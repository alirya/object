import Type from '@alirya/type/validator/type-parameters';
import {ValueAllParameters} from '../../../../dist/validator/value-all';
import {ValueCallbackParameters} from '../../../../dist/validator/value-callback';
import {MapAllParameters} from '../../../../dist/validator/map-all';
import {MapCallbackParameters} from '../../../../dist/validator/map-callback';
import And from '../../../../dist/validatable/and';
import Invalid from '../../../../dist/message/message/record/invalid';
import MessageMap from '../../../../dist/message/message/record/map';
import ValidatorValidatable from '../../../../dist/validator/validatable/record/infer';
import {MapPartialParameters} from '../../../../dist/validator/validatable/record/map-partial';
import {ValuePartialParameters} from '../../../../dist/validator/validatable/record/value-partial';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => {spyOn(console, 'log').and.callThrough();});


it('value all', function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: ValueAllParameters({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property = ValueAllParameters(validator, (v)=>And(v), Invalid);
});


it('value partial', function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info:  ValueAllParameters({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property =  ValueAllParameters(validator, (v)=>And(v), Invalid);
});


it('value callback', function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
        user : Type('string'),
        info : ValueCallbackParameters({
                age : Type('string'),
                hobby : Type('string'),
                no : Type('string'),
            }, (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
            And,
            Invalid
        )
    };

    let property = ValueCallbackParameters(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValuePartialParameters(value, validators),
        And,
        Invalid
    );
});


it('value all', function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: MapAllParameters({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property = MapAllParameters(validator, (v)=>And(v), Invalid);
});


it('value partial', function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: MapAllParameters({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Invalid)
    };
    let property = MapAllParameters(validator, (v)=>And(v), Invalid);
});


it('value callback', function() {

    let c =  MapCallbackParameters({
            age : Type('number'),
            hobby : Type('string'),
            no : Type('number')
        },
        (value, validators) => <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
        And, MessageMap);

    let validator = {
        name : Type('string'),
        age : Type('number'),
        address : Type('string'),
        info : MapCallbackParameters({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number')
            },
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
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
        (value, validators) => <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
        And,
        MessageMap
    );
});
