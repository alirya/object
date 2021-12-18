import ObjectMessage from "../../../dist/assert/string/object-parameters";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(ObjectMessage(Infinity, true)).toBe('type is object.');
        expect(ObjectMessage(Infinity, false)).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectMessage(-Infinity, true)).toBe('type is object.');
        expect(ObjectMessage(-Infinity, false)).toBe('type must object, actual number.');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(ObjectMessage( 1, true )).toBe('type is object.');
        expect(ObjectMessage( 1, false )).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectMessage( -1, true)).toBe('type is object.');
        expect(ObjectMessage( -1, false)).toBe('type must object, actual number.');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(ObjectMessage(1.1, true)).toBe('type is object.');
        expect(ObjectMessage(1.1, false)).toBe('type must object, actual number.');
    });

    it(`float`, () => {
        expect(ObjectMessage( -1.1, true)).toBe('type is object.');
        expect(ObjectMessage( -1.1, false)).toBe('type must object, actual number.');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(ObjectMessage(NaN, true)).toBe('type is object.');
        expect(ObjectMessage(NaN, false)).toBe('type must object, actual number.');
    });

});
