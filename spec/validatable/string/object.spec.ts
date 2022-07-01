import {ObjectParameter} from '../../../dist/assert/string/object';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(ObjectParameter({value:Infinity, valid:true})).toBe('type is object.');
        expect(ObjectParameter({value:Infinity, valid:false})).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectParameter({value:-Infinity, valid:true})).toBe('type is object.');
        expect(ObjectParameter({value:-Infinity, valid:false})).toBe('type must object, actual number.');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(ObjectParameter({value:1, valid:true})).toBe('type is object.');
        expect(ObjectParameter({value:1, valid:false})).toBe('type must object, actual number.');
    });

    it(`number`, () => {
        expect(ObjectParameter({value:-1, valid:true})).toBe('type is object.');
        expect(ObjectParameter({value:-1, valid:false})).toBe('type must object, actual number.');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(ObjectParameter({value:1.1, valid:true})).toBe('type is object.');
        expect(ObjectParameter({value:1.1, valid:false})).toBe('type must object, actual number.');
    });

    it(`float`, () => {
        expect(ObjectParameter({value:-1.1, valid:true})).toBe('type is object.');
        expect(ObjectParameter({value:-1.1, valid:false})).toBe('type must object, actual number.');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(ObjectParameter({value:NaN, valid:true})).toBe('type is object.');
        expect(ObjectParameter({value:NaN, valid:false})).toBe('type must object, actual number.');
    });

});
