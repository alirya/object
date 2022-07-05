import {SetPropertyParameters} from '../../../../dist/value/value/set-property';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

it('plain', () => {

    let object = {

        get data ()  {

            return SetPropertyParameters(this, 'data', 'string');
        }
    };

    let string : string = object.data;

});

it('different type', () => {

    let object = {

        get data () : number {

        // @ts-expect-error
            return SetPropertyParameters(this, 'data', 'string');
        }
    };
    // @ts-expect-error
    let string : string = object.data;

});

describe('class', () => {

    interface Interface {
        readonly data : string;
    }

    it('implement', () => {

        class Implementer implements Interface {

            get data ()  {

                return SetPropertyParameters(this, 'data', 'string');
            }
        }

        let type : Interface = new Implementer();
        let string : string = type.data;

    });

    it('class', () => {

        class Test  {

            get data ()  {

                return SetPropertyParameters(this, 'data', 'string');
            }
        }

        let type : Interface = new Test();
        let string : string = type.data;

    });
});

describe('not exists', () => {

    it('var', () => {

        let object = {

            get data ()  {

                // @ts-expect-error
                return SetPropertyParameters(object, 'c', 'string');
            }
        };

        let string : string = object.data;

    });

    it('this', () => {

        let object = {

            get data ()  {

                return SetPropertyParameters(this, 'c', 'string');
            }
        };

        let string : string = object.data;

    });
});
