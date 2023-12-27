import Validators from '../../../dist/validator/validators/validators.js';
import Validator from '@axiona/validator/validator.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatibility', ()=>{

    const strict : Validators<Record<PropertyKey, Validator>> = {
        validators : {}
    };

    let optinal : Partial<Record<PropertyKey, Validator>> = {};

    optinal = strict.validators;

    // @ts-expect-error
    strict.validators = optinal.validators;

});
