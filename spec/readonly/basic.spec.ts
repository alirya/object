import {ReadonlyParameters} from '../../dist/readonly.js';
import CatchError from './catch-error.js';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('partial', () => {

    it('test', () => {

        const source = {
            number : 1,
            string : 'a',
            boolean : true,
            object : {},
        };

        const readonly = ReadonlyParameters(source, 'number', 'boolean');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.boolean = true)
        ).toBeInstanceOf(Error);

        readonly.string = 'a.js';
        readonly.object = {};
    });
});

describe('all', () => {

    it('test', () => {

        const source = {
            number : 1,
            string : 'a',
            boolean : true,
            object : {},
        };

        const readonly = ReadonlyParameters(source);

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.string = 'a')
        ).toBeInstanceOf(Error);

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.boolean = true)
        ).toBeInstanceOf(Error);

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.object = {})
        ).toBeInstanceOf(Error);
    });
});
