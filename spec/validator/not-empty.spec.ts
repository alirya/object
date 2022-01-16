import NotEmpty from '../../dist/validator/not-empty-parameters';
import EmptyMessage from '../../dist/assert/string/empty-parameters';
import Name from '../../dist/string/name';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<object, [boolean, string]>();
map.set({}, [true, 'empty object']);
map.set({a:1}, [false, 'not empty object']);
map.set([], [false, 'array']);


for(let [value, [valid, message]] of map) {

    describe('not empty', () => {

        it(message, ()=>{

            let validator = NotEmpty(EmptyMessage);
            let validatable = validator(value);
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
