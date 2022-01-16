import Validatables from '../../../dist/validatable/validatables/validatables';
import Validatable from '@alirya/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', ()=>{

    let strict : Validatables<Record<PropertyKey, Validatable>> = {
        validatables : {}
    };

    let optinal : Validatables<Partial<Record<PropertyKey, Validatable>>> = {
        validatables : {}
    };

    optinal.validatables = strict.validatables;

    // @ts-expecerror
    strict.validatables = optinal.validatables;

});
