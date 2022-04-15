import ReadonlyParameters from "../../dist/readonly-parameters";
import CatchError from "./catch-error";

it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('partial', () => {

    it('test', () => {

        let source = {
            number : 1,
            string : 'a',
            boolean : true,
            object : {},
        };

        let readonly = ReadonlyParameters(source, 'number', 'boolean');

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.number = 1)
        ).toBeInstanceOf(Error);

        expect(
            // @ts-expect-error
            CatchError(()=>readonly.boolean = true)
        ).toBeInstanceOf(Error);

        readonly.string = 'a';
        readonly.object = {};
    });
});

describe('all', () => {

    it('test', () => {

        let source = {
            number : 1,
            string : 'a',
            boolean : true,
            object : {},
        };

        let readonly = ReadonlyParameters(source);

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
