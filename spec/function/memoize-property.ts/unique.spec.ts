import MemoizeProperty from '../../../dist/function/memoize-property.js';
import {UniqueParameters} from '@axiona/array/unique.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

class Test {

    get random() : string {
        return Math.random().toString();
    }

    @MemoizeProperty()
    get data () : string {
        return this.random;
    }
}

const tests : Test[] = [
    new Test(),
    new Test(),
    new Test(),
    new Test(),
    new Test(),
];

for(let i = 0; i<=5; i++) {

    it(`check value for difference new instance (${i})`, ()=>{

        const filtered = UniqueParameters(tests, ((value1, value2) => value1.data === value2.data));
        expect(filtered.length).toBe(tests.length);

    });
}
