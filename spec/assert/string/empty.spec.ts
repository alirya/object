import {EmptyParameters} from '../../../dist/assert/string/empty.js';
import Name from '../../../dist/string/name.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('empty',() =>{

    it(`plain empty object`, () => {
        expect(EmptyParameters( {}, true )).toBe(`"${Name({})}" is empty object.`);
    });
});

describe('not empty',() =>{

    it(`plain empty object`, () => {
        expect(EmptyParameters( {}, true )).toBe(`"${Name({})}" is empty object.`);
    });
});
