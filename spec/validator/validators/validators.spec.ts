import Validators from '../../../dist/validator/validators/validators';
import Validator from '@alirya/validator/validator';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatibility', ()=>{

    let strict : Validators<Record<PropertyKey, Validator>> = {
        validators : {}
    };

    let optinal : Partial<Record<PropertyKey, Validator>> = {};

    optinal = strict.validators;

    // @ts-expect-error
    strict.validators = optinal.validators;

});
