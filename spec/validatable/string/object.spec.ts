import Object from "../../../dist/assert/string/object";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Object.Parameter({value:Infinity, valid:true})).toBe('type is object.');
        expect(Object.Parameter({value:Infinity, valid:false})).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(Object.Parameter({value:-Infinity, valid:true})).toBe('type is object.');
        expect(Object.Parameter({value:-Infinity, valid:false})).toBe('type must object, actual number.');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Object.Parameter({value:1, valid:true})).toBe('type is object.');
        expect(Object.Parameter({value:1, valid:false})).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(Object.Parameter({value:-1, valid:true})).toBe('type is object.');
        expect(Object.Parameter({value:-1, valid:false})).toBe('type must object, actual number.');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Object.Parameter({value:1.1, valid:true})).toBe('type is object.');
        expect(Object.Parameter({value:1.1, valid:false})).toBe('type must object, actual number.');
    });

    it(`float`, () => {
        expect(Object.Parameter({value:-1.1, valid:true})).toBe('type is object.');
        expect(Object.Parameter({value:-1.1, valid:false})).toBe('type must object, actual number.');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Object.Parameter({value:NaN, valid:true})).toBe('type is object.');
        expect(Object.Parameter({value:NaN, valid:false})).toBe('type must object, actual number.');
    });

});
