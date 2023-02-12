import {SetGetterParameters} from '../../../../dist/value/value/set-getter.js';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

it('plain', () => {

    const object = {

        get data ()  {

            return SetGetterParameters(this, 'data', 'string');
        }
    };

    const string : string = object.data;

});

it('different type', () => {

    const object = {

        get data () : number {

        // @ts-expect-error
            return SetGetterParameters(this, 'data', 'string');
        }
    };
    // @ts-expect-error
    const string : string = object.data;

});

describe('class', () => {

    interface Interface {
        readonly data : string;
    }

    it('implement', () => {

        class Implementer implements Interface {

            get data ()  {

                return SetGetterParameters(this, 'data', 'string');
            }
        }

        const type : Interface = new Implementer();
        const string : string = type.data;

    });

    it('class', () => {

        class Test  {

            get data ()  {

                return SetGetterParameters(this, 'data', 'string');
            }
        }

        const type : Interface = new Test();
        const string : string = type.data;

    });
});

describe('not exists', () => {

    it('var', () => {

        const object = {

            get data ()  {

                // @ts-expect-error
                return SetGetterParameters(object, 'c', 'string');
            }
        };

        const string : string = object.data;

    });

    it('this', () => {

        const object = {

            get data ()  {

                return SetGetterParameters(this, 'c', 'string');
            }
        };

        const string : string = object.data;

    });
});
