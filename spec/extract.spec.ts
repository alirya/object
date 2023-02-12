import Extract, {ExtractParameters} from '../dist/extract.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', () => {

    interface Test {

        required : string;
        nullable : string|null;
        optional ?: string;
        optionalUnion : undefined|string;
    }

    describe('explicit', () => {

        const data : Test = {
            required : 'required',
            nullable : 'nullable',
            optionalUnion : undefined,
        };

        const extract = ExtractParameters(data, ['required', 'nullable']);
        const result = extract.result;
        const value = extract.object;

        it('result', () => {

            data.required = result.required;
            data.nullable = result.nullable;

            // @ts-expect-error
            data.optional = result.optional;

            // @ts-expect-error
            data.optionalUnion = result.optionalUnion;
        });

        it('value', () => {
            data.optional = value.optional;
            data.optionalUnion = value.optionalUnion;

            // @ts-expect-error
            data.required = value.required;

            // @ts-expect-error
            data.nullable = value.nullable;
        });
    });
});


describe('explicit', () => {

    interface Test {

        required : string;
        nullable : string|null;
        optional ?: string;
        optionalUnion : undefined|string;
    }

    const data  = {
        required : 'required',
        nullable : 'nullable',
        optionalUnion : undefined,
        optional : 'optional',
    };

    const extract = ExtractParameters(data, ['required', 'nullable']);
    const result = extract.result;
    const value = extract.object;

    it('result', () => {

        expect(result.required).toBe('required');
        expect(result.nullable).toBe('nullable');

        // @ts-expect-error
        expect(result.optional).toBeUndefined();

        // @ts-expect-error
        expect(result.optionalUnion).toBeUndefined();
    });

    it('value', () => {

        expect(value.optional).toBe('optional');
        expect(value.optionalUnion).toBeUndefined();

        // @ts-expect-error
        expect(value.required).toBeUndefined();

        // @ts-expect-error
        expect(value.nullable).toBeUndefined();
    });
});


