import ObjectMessage from "../../../dist/assert/string/object";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(ObjectMessage.Parameter(true, Infinity )).toBe('type is object.');
        expect(ObjectMessage.Parameter(false, Infinity )).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectMessage.Parameter(true, -Infinity)).toBe('type is object.');
        expect(ObjectMessage.Parameter(false, -Infinity)).toBe('type must object, actual number.');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(ObjectMessage.Parameter(true, 1 )).toBe('type is object.');
        expect(ObjectMessage.Parameter(false, 1 )).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectMessage.Parameter(true, -1)).toBe('type is object.');
        expect(ObjectMessage.Parameter(false, -1)).toBe('type must object, actual number.');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(ObjectMessage.Parameter(true, 1.1)).toBe('type is object.');
        expect(ObjectMessage.Parameter(false, 1.1)).toBe('type must object, actual number.');
    });

    it(`float`, () => {
        expect(ObjectMessage.Parameter(true, -1.1)).toBe('type is object.');
        expect(ObjectMessage.Parameter(false, -1.1)).toBe('type must object, actual number.');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(ObjectMessage.Parameter(true, NaN)).toBe('type is object.');
        expect(ObjectMessage.Parameter(false, NaN)).toBe('type must object, actual number.');
    });

});
