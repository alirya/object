import Default from '../dist/default.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('destination undefined', () => {

    const target = {

    };

    const source = {
        data1 : 1,
        data2 : 2,
        data3 : 'a',
        data4 : 'b',
    };

    const result = Default(target, source);

    it(`check object`, () => {

        expect(result).toEqual(<typeof source>target);
    });

    it(`check value`, () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3).toBe('a');
        expect(result.data4).toBe('b');
    });

    it(`check type`, () => {

        result.data1 = 1; // Compiler Pass
        result.data2 = 2; // Compiler Pass
        result.data3 = 'a'; // Compiler Pass
        result.data4 = 'b'; // Compiler Pass
    });

});


describe('source undefined', () => {

    const target  = {
        data1 : 1,
        data2 : 2,
        data3 : 'a',
        data4 : 'b',
    };

    const source  = {

    };

    const result = Default(target, source);

    it(`check object`, () => {

        expect(result).toEqual(target);
    });

    it(`check value`, () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3).toBe('a');
        expect(result.data4).toBe('b');
    });

    it(`check type`, () => {

        result.data1 = 1; // Compiler Pass
        result.data2 = 2; // Compiler Pass
        result.data3 = 'a'; // Compiler Pass
        result.data4 = 'b'; // Compiler Pass
    });

});


describe('both set', () => {

    const target = {
        data1 : 1,
        data2 : 2,
        data3 : 3,
        data4 : 4,
    };

    const source = {
        data1 : 'a',
        data2 : 'b',
        data3 : 'c',
        data4 : 'd',
    };

    const result = Default(target, source);

    it(`check object`, () => {

        expect(result).toEqual(target);
    });

    it(`check property`, () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3).toBe(3);
        expect(result.data4).toBe(4);
    });


    it(`check type`, () => {

        result.data1 = 1; // Compiler Pass
        result.data2 = 2; // Compiler Pass
        result.data3 = 3; // Compiler Pass
        result.data4 = 4; // Compiler Pass
    });

});


describe('target mixed', () => {

    const target  = {
        data1 : undefined,
        data2 : 20,
        data3 : 'aa',
        data4 : undefined,
    };

    const source = {
        data1 : 1,
        data2 : 2,
        data3 : 'a',
        data4 : 'b',
    };

    const result = Default(target, source);

    it(`check object`, () => {

        // @ts-ignore
        expect(result).toEqual(target);
    });

    it(`check property`, () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(20);
        expect(result.data3).toBe('aa');
        expect(result.data4).toBe('b');
    });

    it(`check type`, () => {

        result.data1 = 11; // Compiler Pass
        result.data2 = 22; // Compiler Pass
        result.data3 = 'bb'; // Compiler Pass
        result.data4 = 'cc'; // Compiler Pass
    });

});


describe('target & source mixed', () => {

    const target = {
        data1 : undefined,
        data2 : 2,
        data3 : 'a',
        data4 : undefined,
        data5 : undefined,
    };

    const source  = {
        data1 : 1,
        data2 : 3,
        data3 : undefined,
        data4 : undefined,
        data5 : 'c',
    };

    const result = Default(target, source);

    it(`check object`, () => {

        // @ts-ignore
        expect(result).toEqual(target);
    });

    it(`check property`, () => {

        expect(result.data1).toBe(1);
        expect(result.data2).toBe(2);
        expect(result.data3).toBe('a');
        expect(result.data4).toBe(undefined);
    });

    it(`check type`, () => {

        result.data1 = 11; // Compiler Pass
        result.data2 = 22; // Compiler Pass
        result.data3 = 'aa.js'; // Compiler Pass
        result.data4 = undefined; // Compiler Pass
    });

});


describe('both undefined', () => {

    const target  = {

    };

    const source  = {
        data1 : undefined,
        data2 : undefined,
        data3 : undefined,
        data4 : undefined,
    };

    const result = Default(target, source);

    it(`check object`, () => {

        // @ts-ignore
        expect(result).toEqual(target);
    });

    it(`check property`, () => {

        expect(result.data1).toBe(undefined);
        expect(result.data2).toBe(undefined);
        expect(result.data3).toBe(undefined);
        expect(result.data4).toBe(undefined);
    });

    it(`check type`, () => {

        result.data1 = undefined; // Compiler Pass
        result.data2 = undefined; // Compiler Pass
        result.data3 = undefined; // Compiler Pass
        result.data4 = undefined; // Compiler Pass
    });


});
