import {MapPartialParameters} from '../../../dist/validator/map-partial';
import And from '../../../dist/validatable/and';
import ValidatorInterface from '@alirya/validator/simple';
import MessageMap from '../../../dist/message/message/record/map';
import RemoveUndefined from '../../../dist/omit-undefined';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('explicit typed', function() {

    let validator = {
        name : TypeParameters('string'),
        address : TypeParameters('string'),
    };

    type TypeValidator = {
        name : ValidatorInterface<string, string, Instance<string, string>>,
        address :ValidatorInterface<string, string, Instance<string, string>>,
    };

    type Type = {
        name : string,
        address : string,
    };

    let value = {
        name : 'name',
        address : 'address',
    };


    it('implicit', function() {

        let property = MapPartialParameters(validator, And, MessageMap);

        let validatable = property(value);

        let unknown : unknown = validatable.value;

        let string : Type = validatable.value;

    });

    it('auto', function() {

        let property = MapPartialParameters<
            globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, Instance<string, string>>>
            >(validator,
            And,
            (v)=>MessageMap(RemoveUndefined(v))
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });

    it('direct', function() {

        let property = MapPartialParameters<TypeValidator>(validator, And, (v)=>MessageMap(RemoveUndefined(v)));

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });
});



