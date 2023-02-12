import OmitUndefined from '../dist/omit-undefined.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', () => {

    interface Test {

        required : string;
        nullable : string|null;
        optional ?: string;
        optionalUnion : undefined|string;
    }

    it('explicit', () => {

        const data : Test = {
            required : 'required',
            nullable : 'nullable',
            optionalUnion : undefined,
        };

        const result = OmitUndefined(data);


        data.required = result.required;
        data.nullable = result.nullable;

        // @ts-expect-error
        data.optional = result.optional;

        // @ts-expect-error
        data.optionalUnion = result.optionalUnion;

    });

    it('implicit', () => {

        const data = {
            required : 'required',
            nullable : 'nullable',
            optionalUnion : undefined,
        };

        const result = OmitUndefined(data);


        data.required = result.required;
        data.nullable = result.nullable;

        // @ts-expect-error
        data.optional = result.optional;

        // @ts-expect-error
        data.optionalUnion = result.optionalUnion;

    });
});


describe('data', () => {

    it('explicit', () => {

        const data = {
            required : 'required',
            nullable : 'nullable',
            undefined : undefined,
            null : null,
        };

        const result = OmitUndefined(data);

        expect(result.required).toBe('required');
        expect(result.nullable).toBe('nullable');
        expect(result.null).toBe(null);
        expect('undefined' in result).toBeFalse();

    });

});
