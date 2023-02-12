import {NotEmptyParameters} from '../../dist/validator/not-empty.js';
import {EmptyParameters} from '../../dist/assert/string/empty.js';
import Name from '../../dist/string/name.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

const map = new Map<object, [boolean, string]>();
map.set({}, [true, 'empty object']);
map.set({a:1}, [false, 'not empty object']);
map.set([], [false, 'array']);


for(const [value, [valid, message]] of map) {

    describe('not empty', () => {

        it(message, ()=>{

            const validator = NotEmptyParameters(EmptyParameters);
            const validatable = validator(value);
            expect(validatable.valid).toBe(!valid);
            expect(validatable.value).toBe(value);

            if(validatable.valid) {
                expect(validatable.message).toBe(`"${Name(value)}" is empty object.`);
            } else {
                expect(validatable.message).toBe(`"${Name(value)}" must empty object.`);
            }
        });
    });

}
