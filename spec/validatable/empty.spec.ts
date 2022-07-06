import {EmptyParameters} from '../../dist/validatable/empty.js';
import EmptyMessage from '../../dist/assert/string/empty.js';
import Name from '../../dist/string/name.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<object, [boolean, string]>();

map.set({}, [true, 'empty object']);
map.set({a:1}, [false, 'not empty object']);
map.set([], [false, 'array']);

for(let [value, [valid, message]] of map) {

    describe('empty', () => {

        it(message, ()=>{

            let validatable = new EmptyParameters(value, EmptyMessage.Parameters);
            expect(validatable.valid).toBe(valid, value);
            expect(validatable.value).toBe(value, value);

            if(validatable.valid) {

                expect(validatable.message).toBe(`"${Name(value)}" is empty object.`);

            } else {

                expect(validatable.message).toBe(`"${Name(value)}" must empty object.`);
            }
        });

    });

}



