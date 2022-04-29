import MemoizeGetterBind from '../../dist/property-lazy-strict-parameters';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

it('plain', () => {

    let source = {};

    let object = MemoizeGetterBind(
        source,
        // @ts-expect-errors
        'data',
        () =>'string',
        false
    );

    // @ts-expect-errors
    let string : string = object.data;

    // @ts-expect-error
    let nonExist  = object.c;

});


it('different type', () => {

    let source = {

        get data () : number { return  1;}
    };

    let object = MemoizeGetterBind(
        source,
        'data',
        // @ts-expect-errors
        () =>'string',
        false
    );


    let number : number = object.data;

    // @ts-expect-errors
    let string : string = object.data;

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
        let type : Interface = MemoizeGetterBind(source, 'data', () =>'string', false);
        let string : string = type.data;

    });

    it('class', () => {

        class Test  {

            get data ()  {

                return '';
            }
        }

        let source : Interface = new Test();
        let type : Interface = MemoizeGetterBind(source, 'data', () =>'string', false);
        let string : string = type.data;

    });
});

describe('not exists', () => {

    it('var', () => {

        let source = {};


        let object = MemoizeGetterBind(
            source,
            // @ts-expect-errors
            'data',
            () =>'string',
            false
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


        let object = MemoizeGetterBind(
            source,
            // @ts-expect-errors
            'value',
            () =>'string',
            false
        );

        // @ts-expect-error
        let string : string = object.c;

    });
});
