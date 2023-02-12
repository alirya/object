import {MapPartialParameters} from '../../../../dist/validator/validatable/record/map-partial.js';
import {TypeParameters} from '@alirya/type/validator/type.js';

it('force console log', () => spyOn(console, 'log').and.callThrough());


describe('stop on invalid', function() {

    describe('all valid', function() {

        const validator = {
            validator1 : TypeParameters('number'),
            validator2 : TypeParameters('number'),
        };

        const value = {
            validator1 : 10,
            validator2 : 10,
        };

        const result = MapPartialParameters(value, validator);


            it('match validator1', ()=> {

                if(result.validator1) {

                    expect(result.validator1.valid).toBe(true);

                } else {

                    expect('result.validator1 must not undefined');
                }
            });

            it('match validator2', ()=> {

                if(result.validator2) {

                    expect(result.validator2.valid).toBe(true);

                } else {

                    expect('result.validator2 must not undefined');
                }
            });

    });

    describe('all invalid', function() {

        const validator = {
            validator1 : TypeParameters('number'),
            validator2 : TypeParameters('number'),
        };

        const value = {
            validator1 : '10',
            validator2 : 'str',
        };

        const result = MapPartialParameters(value, validator);

        it('match validator1', ()=> {

            if(result.validator1) {

                expect(result.validator1.valid).toBe(false);

            } else {

                expect('first invalid should be available');
            }

        });

        it('match validator2', ()=> expect(result.validator2).toBe(undefined));


    });

    describe('mixed', function() {

        const validator = {
            validator1 : TypeParameters('number'),
            validator2 : TypeParameters('number'),
            validator3 : TypeParameters('number'),
        };

        const value = {
            validator1 : 10,
            validator2 : 'str',
            validator3 : 'str 2',
        };

        const result = MapPartialParameters(value, validator);

        it('match validator1', ()=> {

            if(result.validator1) {

                expect(result.validator1.valid).toBe(true);

            } else {

                expect('result.validator1 must not undefined');
            }

        });

        it('match validator2', ()=> {

            if(result.validator2) {

                expect(result.validator2.valid).toBe(false);

            } else {

                expect('result.validator1 must undefined');
            }

        });

        it('match validator3', ()=> expect(result.validator3).toBe(undefined));

    });
});
