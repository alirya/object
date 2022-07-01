import {ObjectParameters} from '../../../dist/assert/string/object';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(ObjectParameters(Infinity, true)).toBe('type is object.');
        expect(ObjectParameters(Infinity, false)).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectParameters(-Infinity, true)).toBe('type is object.');
        expect(ObjectParameters(-Infinity, false)).toBe('type must object, actual number.');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(ObjectParameters( 1, true )).toBe('type is object.');
        expect(ObjectParameters( 1, false )).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectParameters( -1, true)).toBe('type is object.');
        expect(ObjectParameters( -1, false)).toBe('type must object, actual number.');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(ObjectParameters(1.1, true)).toBe('type is object.');
        expect(ObjectParameters(1.1, false)).toBe('type must object, actual number.');
    });

    it(`float`, () => {
        expect(ObjectParameters( -1.1, true)).toBe('type is object.');
        expect(ObjectParameters( -1.1, false)).toBe('type must object, actual number.');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(ObjectParameters(NaN, true)).toBe('type is object.');
        expect(ObjectParameters(NaN, false)).toBe('type must object, actual number.');
    });

});
