import ReadonlyParameters from "../../dist/readonly-parameters";
import CatchError from "./catch-error";

it('enable console log', () => spyOn(console, 'log').and.callThrough());


describe('property', () => {

    it('set', () => {

        let source = {
            number : 1,
        };

        let readonly = ReadonlyParameters(source, 'number');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);
    });

    it('optional', () => {

        let source : {
            number ?: number,
        } = {};

        let readonly = ReadonlyParameters(source, 'number');

        // @ts-expect-error
        readonly.number = 1;
    });
});

describe('getter', () => {

    it('object', () => {

        let source = {
            number : 1,
        };

        let readonly = ReadonlyParameters(source, 'number');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);
    });

    class Class {

        get number () : number {
            return 1;
        }
    }

    it('class', () => {

        let source = new Class();

        let readonly = ReadonlyParameters(source, 'number');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);
    });
});

describe('setter', () => {

    it('object', () => {

        let source = {
            data : 1,

            set number (number : number)  {
                this.data = number;
            },
        };

        let readonly = ReadonlyParameters(source, 'number');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);
    });

    class Class {

        data : number = 0;

        set number (number : number)  {

            this.data = number;
        }
    }

    it('class', () => {

        let source = new Class();

        let readonly = ReadonlyParameters(source, 'number');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);
    });
});
