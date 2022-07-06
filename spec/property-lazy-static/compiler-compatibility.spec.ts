import {PropertyLazyStaticParameters} from '../../dist/property-lazy-static.js';


it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('plain', () => {

    it('empty', () => {

        let source = {};

        let object = PropertyLazyStaticParameters(
            source,
            // @ts-expect-errors
            'data',
            () =>'string',
            true,
            true
        );

        // @ts-expect-errors
        let string : string = object.data;

        // @ts-expect-error
        let nonExist  = object.c;

    });

    it('optional', () => {

        let source : {data ?: string} = {};

        let object = PropertyLazyStaticParameters(source, 'data', () =>'string', true, true);

        let string : string = object.data;

        // @ts-expect-error
        let nonExist  = object.c;

    });
});

describe('different type', () => {
    it('strict', () => {

        let source = {

            get data () : number { return  1;}
        };

        let object = PropertyLazyStaticParameters(
            source,
            'data',
            // @ts-expect-errors
            () =>'string',
            true,
            true
        );

        let number : number = object.data;

        // @ts-expect-error
        let string : string = object.data;

    });

    it('union', () => {

        let source = {

            get data () : number|string { return  1;}
        };

        let object = PropertyLazyStaticParameters(source, 'data', () =>'string', true, true);

        let numberString : number|string = object.data;

        // @ts-expect-error
        let number : number = object.data;

        // @ts-expect-error
        let string : string = object.data;

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

        let source : Interface = new Implementer();
        let type : Interface = PropertyLazyStaticParameters(source, 'data', () =>'string', true, true);
        let string : string = type.data;

    });

    it('class', () => {

        class Test  {

            get data ()  {

                return '';
            }
        }

        let source : Interface = new Test();
        let type : Interface = PropertyLazyStaticParameters(source, 'data', () =>'string', true, true);
        let string : string = type.data;

    });
});

describe('not exists', () => {

    it('var', () => {

        let source = {};


        let object = PropertyLazyStaticParameters(
            source,
            // @ts-expect-error
            'data',
            () =>'string',
            true,
            true
        );

        // @ts-expect-error
        let string : string = object.c;

    });

    it('multi', () => {

        let source = {

            get data ()  {
                return '';
            }
        };


        let object = PropertyLazyStaticParameters(
            source,
            // @ts-expect-error
            'value',
            () =>'string',
            true,
            true
        );

        // @ts-expect-error
        let string : string = object.c;

    });
});
