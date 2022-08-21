import {MethodCallMapSingleSingleParameters} from '../../dist/method-call-map-single';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


class Test {

    string (value : string) {

        return value + value;
    }

    number (value : number) {

        return value + value;
    }

    boolean (value : boolean) {

        return !value;
    }
}


describe('compiler compatibility', () => {

    it('partial 1', () => {

        let result = MethodCallMapSingleSingleParameters(new Test(), {
            string : 'data'
        });

        let string : string = result.string;

        // @ts-expect-error
        let boolean : boolean = result.boolean;

        // @ts-expect-error
        let number : number = result.number;
    });

    it('partial 2', () => {

        let result = MethodCallMapSingleSingleParameters(new Test(), {
            string : 'data',
            number : 5
        });

        let string : string = result.string;

        // @ts-expect-error
        let boolean : boolean = result.boolean;

        let number : number = result.number;
    });

    it('all', () => {

        let result = MethodCallMapSingleSingleParameters(new Test(), {
            string : 'data',
            number : 5,
            boolean : false
        });

        let string : string = result.string;

        let boolean : boolean = result.boolean;

        let number : number = result.number;
    });

    it('noexist', () => {

        try {
            let result = MethodCallMapSingleSingleParameters(
            // @ts-expect-error
                new Test(),
                {
                    number : 5,
                    object : false
                }
            );

        } catch (error) {

            expect(error).toBeInstanceOf(Error);
        }
    });
});


describe('test', () => {

    it('partial 1', () => {

        let result = MethodCallMapSingleSingleParameters(new Test(), {
            string : 'data'
        });

        expect(result.string).toBe('data' + 'data');

        // @ts-expect-error
        expect(result.boolean).toBe(undefined);

        // @ts-expect-error
        expect(result.number).toBe(undefined);
    });

    it('partial 2', () => {

        let result = MethodCallMapSingleSingleParameters(new Test(), {
            string : 'data',
            number : 5
        });

        expect(result.string).toBe('data' + 'data');

        // @ts-expect-error
        expect(result.boolean).toBe(undefined);

        expect(result.number).toBe(10);
    });

    it('all', () => {

        let result = MethodCallMapSingleSingleParameters(new Test(), {
            string : 'data',
            number : 5,
            boolean : false
        });

        expect(result.string).toBe('data' + 'data');

        expect(result.boolean).toBe(true);

        expect(result.number).toBe(10);
    });

    it('noexist', () => {

        try {

        let result = MethodCallMapSingleSingleParameters(
            // @ts-expect-error
            new Test(),
            {
                number : 5,
                object : {}
            }
        );

            result.object;

        } catch (error) {

            expect(error).toBeInstanceOf(Error);
        }

    });
});
