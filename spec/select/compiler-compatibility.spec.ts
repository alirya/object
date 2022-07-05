import {SelectParameters} from '../../dist/select';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('plain object', () => {

    let object = {
        data1 : 'data1',
        data2 : function () { return 1; },
        data3 : true,
    };

    let result = SelectParameters(object, 'data1','data2');

    it('compiler compatibility object', () => {

        let string : string = result.data1;
        let number : number = result.data2();
        // @ts-expect-error
        let boolean : boolean = result.data3;
    });

});

describe('plain object, getter', () => {

    let object = {
        get data1 () { return 'data1';},
        get data2 () { return function () { return 1; }; },
        get data3 () { return true;},
    };


    let result = SelectParameters(object, 'data1','data2');

    it('compiler compatibility object', () => {

        let string : string = result.data1;
        let number : number = result.data2();
        // @ts-expect-error
        let boolean : boolean = result.data3;
    });
});


describe('plain object, setter', () => {

    let object = {
        set data1 (value: string) {},
        set data2 (value: () => {}) {},
        set data3 (value: string) {},
    };

    let result = SelectParameters(object, 'data1','data2');

    it('compiler compatibility object', () => {

        let string : string = result.data1;
        // @ts-expect-error
        let number : number = result.data2;
        // @ts-expect-error
        let boolean : boolean = result.data3;
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

    let object = new Class('data1', function () { return 1; }, true);

    let result = SelectParameters(object, 'data1','data2');

    it('compiler compatibility object', () => {

        let string : string = result.data1;
        let number : number = result.data2();
        // @ts-expect-error
        let boolean : boolean = result.data3;
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

    let object = new Class();

    let result = SelectParameters(object, 'data1','data2');

    it('compiler compatibility object', () => {

        let string : string = result.data1;
        let number : number = result.data2();
        // @ts-expect-error
        let boolean : boolean = result.data3;
    });
});


describe('plain object, setter', () => {

    class Class {
        constructor() {}
        set data1 (value: string) {}
        set data2 (value: () => {}) {}
        set data3 (value: string) {}
    }

    let object = new Class();

    let string : string = object.data1;

    let result = SelectParameters(object, 'data1','data2');

    it('compiler compatibility object', () => {

        let string : string = result.data1;
        // @ts-expect-error
        let number : number = result.data2;
        // @ts-expect-error
        let boolean : boolean = result.data3;
    });
});
