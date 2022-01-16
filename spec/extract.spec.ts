import Extract from '../dist/extract';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', () => {

    interface Test {

        required : string;
        nullable : string|null;
        optional ?: string;
        optionalUnion : undefined|string;
    }

    describe('explicit', () => {

        let data : Test = {
            required : 'required',
            nullable : 'nullable',
            optionalUnion : undefined,
        };

        let extract = new Extract(data, ['required', 'nullable']);
        let result = extract.return;
        let value = extract.value;

        describe('result', () => {

            data.required = result.required;
            data.nullable = result.nullable;

            // @ts-expecerror
            data.optional = result.optional;

            // @ts-expecerror
            data.optionalUnion = result.optionalUnion;
        });

        describe('value', () => {
            data.optional = value.optional;
            data.optionalUnion = value.optionalUnion;

            // @ts-expecerror
            data.required = value.required;

            // @ts-expecerror
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

    let data  = {
        required : 'required',
        nullable : 'nullable',
        optionalUnion : undefined,
        optional : 'optional',
    };

    let extract = new Extract(data, ['required', 'nullable']);
    let result = extract.return;
    let value = extract.value;

    it('result', () => {

        expect(result.required).toBe('required');
        expect(result.nullable).toBe('nullable');

        // @ts-expecerror
        expect(result.optional).toBeUndefined();

        // @ts-expecerror
        expect(result.optionalUnion).toBeUndefined();
    });

    it('value', () => {

        expect(value.optional).toBe('optional');
        expect(value.optionalUnion).toBeUndefined();

        // @ts-expecerror
        expect(value.required).toBeUndefined();

        // @ts-expecerror
        expect(value.nullable).toBeUndefined();
    });
});


