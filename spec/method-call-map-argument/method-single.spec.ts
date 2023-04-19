import {MethodCallMapArgumentParameters} from '../../dist/method-call-map-argument.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

interface TestInterface {
    string: string;
    number: number;
    boolean: boolean;
}

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

        const result = MethodCallMapArgumentParameters(new Test(), {
            string : 'data'
        });

        const string : string = result.string;

        // @ts-expect-error
        const boolean : boolean = result.boolean;

        // @ts-expect-error
        const number : number = result.number;
    });

    it('partial 2', () => {

        const result = MethodCallMapArgumentParameters(new Test(), {
            string : 'data',
            number : 5
        });

        const string : string = result.string;

        // @ts-expect-error
        const boolean : boolean = result.boolean;

        const number : number = result.number;
    });

    it('all', () => {

        const result = MethodCallMapArgumentParameters(new Test(), {
            string : 'data',
            number : 5,
            boolean : false
        });

        const string : string = result.string;

        const boolean : boolean = result.boolean;

        const number : number = result.number;
    });

    it('noexist', () => {

        try {
            const result = MethodCallMapArgumentParameters(
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

        const result = MethodCallMapArgumentParameters(new Test(), {
            string : 'data'
        });

        expect(result.string).toBe('data' + 'data');

        // @ts-expect-error
        expect(result.boolean).toBe(undefined);

        // @ts-expect-error
        expect(result.number).toBe(undefined);
    });

    it('partial 2', () => {

        const result = MethodCallMapArgumentParameters(new Test(), {
            string : 'data',
            number : 5
        });

        expect(result.string).toBe('data' + 'data');

        // @ts-expect-error
        expect(result.boolean).toBe(undefined);

        expect(result.number).toBe(10);
    });

    it('all', () => {

        const result = MethodCallMapArgumentParameters(new Test(), {
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

        const result = MethodCallMapArgumentParameters(
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
