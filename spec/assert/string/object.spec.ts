import ObjectMessage from "../../../dist/assert/string/object";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(ObjectMessage.Parameters(Infinity, true)).toBe('type is object.');
        expect(ObjectMessage.Parameters(Infinity, false)).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectMessage.Parameters(-Infinity, true)).toBe('type is object.');
        expect(ObjectMessage.Parameters(-Infinity, false)).toBe('type must object, actual number.');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(ObjectMessage.Parameters( 1, true )).toBe('type is object.');
        expect(ObjectMessage.Parameters( 1, false )).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectMessage.Parameters( -1, true)).toBe('type is object.');
        expect(ObjectMessage.Parameters( -1, false)).toBe('type must object, actual number.');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(ObjectMessage.Parameters(1.1, true)).toBe('type is object.');
        expect(ObjectMessage.Parameters(1.1, false)).toBe('type must object, actual number.');
    });

    it(`float`, () => {
        expect(ObjectMessage.Parameters( -1.1, true)).toBe('type is object.');
        expect(ObjectMessage.Parameters( -1.1, false)).toBe('type must object, actual number.');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(ObjectMessage.Parameters(NaN, true)).toBe('type is object.');
        expect(ObjectMessage.Parameters(NaN, false)).toBe('type must object, actual number.');
    });

});
