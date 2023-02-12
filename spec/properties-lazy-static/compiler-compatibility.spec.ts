import {PropertiesLazyStrictParameters} from '../../dist/properties-lazy-strict.js';


it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('plain', () => {

    it('empty', () => {

        const source = {};

        const object = PropertiesLazyStrictParameters(
            source,
            {
                get data () {
                    return 'string.js';
                }
            },
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

        const object = PropertiesLazyStrictParameters(source, {
            get data () {
                return 'string.js';
            }
        }, true, true);

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

        const object = PropertiesLazyStrictParameters(
            source,
            {
                // @ts-expect-error
                get data () {
                    return 'string.js';
                }
            },
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

        const object = PropertiesLazyStrictParameters(source, {
            get data () {
                return 'string.js';
            }
        }, true, true);

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
        const type : Interface = PropertiesLazyStrictParameters(source, {
            get data () {
                return 'string.js';
            }
        }, true, true);
        const string : string = type.data;

    });

    it('class', () => {

        class Test  {

            get data ()  {

                return '';
            }
        }

        const source : Interface = new Test();
        const type : Interface = PropertiesLazyStrictParameters(source, {
            get data () {
                return 'string.js';
            }
        }, true, true);
        const string : string = type.data;

    });
});

describe('not exists', () => {

    it('var', () => {

        const source = {};


        const object = PropertiesLazyStrictParameters(
            source,
            {
                get data () {
                    return 'string.js';
                }
            },
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


        const object = PropertiesLazyStrictParameters(
            source,
            {
                get data () {
                    return 'string.js';
                }
            },
            true,
            true
        );

        // @ts-expect-error
        const string : string = object.c;

    });
});
