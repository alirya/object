import {ReadonlyParameters} from '../../dist/readonly.js';
import CatchError from './catch-error.js';

it('enable console log', () => spyOn(console, 'log').and.callThrough());


describe('property', () => {

    it('set', () => {

        const source = {
            number : 1,
        };

        const readonly = ReadonlyParameters(source, 'number');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);
    });

    it('optional', () => {

        const source : {
            number ?: number,
        } = {};

        const readonly = ReadonlyParameters(source, 'number');

        // @ts-expect-error
        readonly.number = 1;
    });
});

describe('getter', () => {

    it('object', () => {

        const source = {
            number : 1,
        };

        const readonly = ReadonlyParameters(source, 'number');

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

        const source = new Class();

        const readonly = ReadonlyParameters(source, 'number');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);
    });
});

describe('setter', () => {

    it('object', () => {

        const source = {
            data : 1,

            set number (number : number)  {
                this.data = number;
            },
        };

        const readonly = ReadonlyParameters(source, 'number');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);
    });

    class Class {

        data  = 0;

        set number (number : number)  {

            this.data = number;
        }
    }

    it('class', () => {

        const source = new Class();

        const readonly = ReadonlyParameters(source, 'number');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);
    });
});
