import Type from '@alirya/type/validator/type-parameters';
import ValueAll from '../../../../dist/validator/value-all-parameters';
import ValueCallback from '../../../../dist/validator/value-callback-parameters';
import MapAll from '../../../../dist/validator/map-all-parameters';
import MapCallback from '../../../../dist/validator/map-callback-parameters';
import Value from '../../../../dist/validator/value-all-parameters';
import Map from '../../../../dist/validator/map-all-parameters';
import And from '../../../../dist/validatable/and';
import Valid from '../../../../dist/message/message/record/valid';
import MessageMap from '../../../../dist/message/message/record/map';
import ValidatorValidatable from '../../../../dist/validator/validatable/record/infer';
import ValidateValuePartial from '../../../../dist/validator/validatable/record/value-partial-parameters';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => {spyOn(console, 'log').and.callThrough();});


it('value all', function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: ValueAll({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Valid)
    };
    let property = ValueAll(validator, (v)=>And(v), Valid);
});


it('value partial', function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: Value({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Valid)
    };
    let property = Value(validator, (v)=>And(v), Valid);
});


it('value callback', function() {

    let validator = {
        name : Type('string'),
        address : Type('string'),
        user : Type('string'),
        info : ValueCallback({
                age : Type('string'),
                hobby : Type('string'),
                no : Type('string'),
            }, (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
            And,
            Valid
        )
    };

    let property = ValueCallback(validator,
        (value, validators) => <ValidatorValidatable<typeof validator>>ValidateValuePartial(value, validators),
        And,
        Valid
    );
});


it('value all', function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: MapAll({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Valid)
    };
    let property = MapAll(validator, (v)=>And(v), Valid);
});


it('value partial', function() {

    let validator = {
        name: Type('string'),
        address: Type('string'),
        user: Type('string'),
        info: Map({
            age: Type('string'),
            hobby: Type('string'),
            no: Type('string'),
        }, (v) => And(v), Valid)
    };
    let property = Map(validator, (v)=>And(v), Valid);
});


it('value callback', function() {

    let validator = {
        name : Type('string'),
        age : Type('number'),
        address : Type('string'),
        info : MapCallback({
                age : Type('number'),
                hobby : Type('string'),
                no : Type('number')
            },
            (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValuePartial(value, validators),
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

    let property = MapCallback(validator,
        (value, validators) => <Record<PropertyKey, Instance<any, string>>>ValidateValuePartial(value, validators),
        And,
        MessageMap
    );
});
