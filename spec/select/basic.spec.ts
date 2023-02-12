import {SelectParameters} from '../../dist/select.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('plain object', () => {

    const object = {
        data1 : 'data1',
        data2 : function () { return 1; },
        data3 : true,
    };

    const result = SelectParameters(object, 'data1','data2');

    it('test value', () => {

        expect(result.data1).toBe(result.data1);
        expect(result.data2()).toBe(result.data2());
        // @ts-expect-error
        expect(result.data3).toBe(undefined);
    });

});


describe('plain object, getter', () => {

    const object = {
        get data1 () { return 'data1';},
        get data2 () { return function () { return 1; }; },
        get data3 () { return true;},
    };

    const result = SelectParameters(object, 'data1','data2');

    it('test value', () => {

        expect(result.data1).toBe(object.data1);
        expect(result.data2()).toBe(object.data2());
        // @ts-expect-error
        expect(result.data3).toBe(undefined);
    });
});


describe('plain object, setter', () => {

    const object = {
        set data1 (value: string) {},
        set data2 (value: () => {}) {},
        set data3 (value: string) {},
    };

    const result = SelectParameters(object, 'data1','data2');

    it('test value', () => {

        // @ts-expect-error
        expect(result.data1).toBe(undefined);

        expect(result.data2).toBe(undefined);
        // @ts-expect-error
        expect(result.data3).toBe(undefined);
    });
});

describe('plain object', () => {

    class Class {
        constructor(
            public data1 : string,
            public data2 : () => number,
            public data3 : boolean,
        ) {}
    }

    const object = new Class('data1', function () { return 1; }, true);

    const result = SelectParameters(object, 'data1','data2');

    it('test value', () => {

        expect(result.data1).toBe(object.data1);
        expect(result.data2()).toBe(object.data2());
        // @ts-expect-error
        expect(result.data3).toBe(undefined);
    });

});


describe('plain object, getter', () => {

    class Class {
        c = 1;
        constructor() {}
        get data1 () : string { return 'data1';}
        get data2 () : () => number { return function () { return 1; }; }
        get data3 () : boolean { return true;}
    }

    const object = new Class();

    const result = SelectParameters(object, 'data1','data2');

    it('test value', () => {

        expect(result.data1).toBe(object.data1);
        expect(result.data2()).toBe(object.data2());
        // @ts-expect-error
        expect(result.data3).toBe(undefined);
    });
});


describe('plain object, setter', () => {

    class Class {
        constructor() {}
        set data1 (value: string) {}
        set data2 (value: () => {}) {}
        set data3 (value: string) {}
    }

    const object = new Class();

    const string : string = object.data1;

    const result = SelectParameters(object, 'data1','data2');

    it('test value', () => {

        // @ts-expect-error
        expect(result.data1).toBe(undefined);

        expect(result.data2).toBe(undefined);
        // @ts-expect-error
        expect(result.data3).toBe(undefined);
    });
});
