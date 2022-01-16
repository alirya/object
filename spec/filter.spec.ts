import Filter from '../dist/filter';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('compiler compatibility', function() {

    let record = {
        boolean : true,
        string : 'false',
        array : [],
        object : {}
    };

    it('boolean', () => {

        let result = Filter(record,(v:any) : v is true => typeof v === 'boolean');

        let boolean : boolean;
        boolean = result.boolean;

        // @ts-expecerror
        boolean = result.string;

        // @ts-expecerror
        boolean = result.array;

        // @ts-expecerror
        boolean = result.object;

    });

    it('boolean', () => {

        let result = Filter(record,(v:any) : v is object => typeof v === 'object');

        let object : object;

        object = result.object;
        object = result.array;

        // @ts-expecerror
        object = result.string;

        // @ts-expecerror
        object = result.boolean;
    });

    it('boolean', () => {

        let result = Filter(record,(v:any) : v is Array<any> => Array.isArray(v));

        let array : any[];

        array = result.array;

        // @ts-expecerror
        array = result.object;

        // @ts-expecerror
        array = result.string;

        // @ts-expecerror
        array = result.boolean;
    });

});

describe('check value', function() {

    let record = {
        boolean : true,
        string : 'false',
        array : [],
        object : {}

    };

    it('boolean', () => {

        let result = Filter(record,(v:any) : v is boolean => typeof v === 'boolean');

        expect(result.boolean).toBe(true);
        // @ts-expecerror
        expect(result.string).toBe(undefined);
        // @ts-expecerror
        expect(result.array).toBe(undefined);
        // @ts-expecerror
        expect(result.object).toBe(undefined);
    });

    it('object', () => {

        let result = Filter(record,(v:any) : v is object => typeof v === 'object');

        // @ts-expecerror
        expect(result.boolean).toBe(undefined);
        // @ts-expecerror
        expect(result.string).toBe(undefined);

        expect(result.array).toBe(result.array);

        expect(result.object).toBe(result.object);
    });

    it('array', () => {

        let result = Filter(record,(v:any) : v is Array<any> => Array.isArray(v));

        expect(result.array).toBe(result.array);

        // @ts-expecerror
        expect(result.boolean).toBe(undefined);
        // @ts-expecerror
        expect(result.string).toBe(undefined);
        // @ts-expecerror
        expect(result.object).toBe(undefined);
    });

});


describe('unfiltered', () => {

    let source  = {
        data1 : 1,
        data2 : 2,
        data3 : 3,
        data4 : 4,
    };

    let filtered = Filter(source, ()=>true);

    it('compare source & original', () => {

        expect(filtered).not.toBe(source);

    });

    it('check source', () => {

        expect(source.data1).toBe(1);
        expect(source.data2).toBe(2);
        expect(source.data3).toBe(3);
        expect(source.data4).toBe(4);
    });

    it('check filtered', () => {

        expect(filtered.data1).toBe(1);
        expect(filtered.data2).toBe(2);
        expect(filtered.data3).toBe(3);
        expect(filtered.data4).toBe(4);
    });

});


describe('filtered', () => {

    let source  = {
        data1 : 1,
        data2 : '2',
        data3 : '3',
        data4 : 4,
    };

    let filtered = Filter(source, (value : any)=>typeof value === 'string');

    it('compare source & original', () => {

        expect(filtered).not.toBe(source);

    });

    it('check source', () => {

        expect(source.data1).toBe(1);
        expect(source.data2).toBe('2');
        expect(source.data3).toBe('3');
        expect(source.data4).toBe(4);
    });

    it('check filtered', () => {

        expect(filtered.data1).toBe(undefined);
        expect(filtered.data2).toBe('2');
        expect(filtered.data3).toBe('3');
        expect(filtered.data4).toBe(undefined);
    });

});
