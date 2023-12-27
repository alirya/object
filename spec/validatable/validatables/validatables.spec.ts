import Validatables from '../../../dist/validatable/validatables/validatables.js';
import Validatable from '@axiona/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatibility', ()=>{

    const strict : Validatables<Record<PropertyKey, Validatable>> = {
        validatables : {}
    };

    const optinal : Validatables<Partial<Record<PropertyKey, Validatable>>> = {
        validatables : {}
    };

    optinal.validatables = strict.validatables;

    // @ts-expect-error
    strict.validatables = optinal.validatables;

});
