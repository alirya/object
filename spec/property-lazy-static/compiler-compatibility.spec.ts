import {PropertyLazyStaticParameters} from '../../dist/property-lazy-static.js';


it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('plain', () => {

    it('empty', () => {

        const source = {};

        const object = PropertyLazyStaticParameters(
            source,
            // @ts-expect-errors
            'data',
            () =>'string',
            true,
            true
        );

        // @ts-expect-errors
        const string : string = object.data;

        // @ts-expect-error
        const nonExist  = object.c;

    });

    it('optional', () => {

        const source : {data ?: string} = {};

        const object = PropertyLazyStaticParameters(source, 'data', () =>'string', true, true);

        const string : string = object.data;

        // @ts-expect-error
        const nonExist  = object.c;

    });
});

describe('different type', () => {
    it('strict', () => {

        const source = {

            get data () : number { return  1;}
        };

        const object = PropertyLazyStaticParameters(
            source,
            'data',
            // @ts-expect-errors
            () =>'string',
            true,
            true
        );

        const number : number = object.data;

        // @ts-expect-error
        const string : string = object.data;

    });

    it('union', () => {

        const source = {

            get data () : number|string { return  1;}
        };

        const object = PropertyLazyStaticParameters(source, 'data', () =>'string', true, true);

        const numberString : number|string = object.data;

        // @ts-expect-error
        const number : number = object.data;

        // @ts-expect-error
        const string : string = object.data;

    });
});

describe('class', () => {

    interface Interface {
        readonly data : string;
    }

    it('implement', () => {

        class Implementer implements Interface {

            get data ()  {

                return '';

            }
        }

        const source : Interface = new Implementer();
        const type : Interface = PropertyLazyStaticParameters(source, 'data', () =>'string', true, true);
        const string : string = type.data;

    });

    it('class', () => {

        class Test  {

            get data ()  {

                return '';
            }
        }

        const source : Interface = new Test();
        const type : Interface = PropertyLazyStaticParameters(source, 'data', () =>'string', true, true);
        const string : string = type.data;

    });
});

describe('not exists', () => {

    it('var', () => {

        const source = {};


        const object = PropertyLazyStaticParameters(
            source,
            // @ts-expect-error
            'data',
            () =>'string',
            true,
            true
        );

        // @ts-expect-error
        const string : string = object.c;

    });

    it('multi', () => {

        const source = {

            get data ()  {
                return '';
            }
        };


        const object = PropertyLazyStaticParameters(
            source,
            // @ts-expect-error
            'value',
            () =>'string',
            true,
            true
        );

        // @ts-expect-error
        const string : string = object.c;

    });
});
