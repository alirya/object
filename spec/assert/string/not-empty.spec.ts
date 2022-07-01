import {NotEmptyParameters} from '../../../dist/assert/string/not-empty';


it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('valid',() =>{

    it(`empty`, () => {
        expect(NotEmptyParameters( {}, true)).toBe(`Object is not empty object.`);
    });
    it(`not empty`, () => {
        expect(NotEmptyParameters( {}, true)).toBe(`Object is not empty object.`);
    });
});

describe('invalid',() =>{

    it(`empty`, () => {
        expect(NotEmptyParameters( {}, false)).toBe(`Object must not empty object.`);
    });

    it(`not empty`, () => {
            expect(NotEmptyParameters( {}, false)).toBe(`Object must not empty object.`);
    });
});
