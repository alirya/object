import Record from '../../../../dist/validatable/record/boolean/record.js';
import And from '../../../../dist/validatable/and.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function () {

    const record = {
        valid :  {valid:true},
        invalid :  {valid:false},
    };

    const object : object = record;

    it('check result', () => {

        const result = Record(object);
        expect(result).toBeTrue();
    });

    it('explicit', () => {

        if(Record(object)) {

            let boolean : boolean;
            boolean = object.valid.valid;
            boolean = object.invalid.valid;

            try {

                boolean = object.invalid1.valid;
                fail('object.invalid1 shlud not exists');
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }


        } else {

            fail('type guard must be valid');
        }
    });

    it('implicit', () => {

        if(Record<typeof record>(object)) {

            let boolean : boolean;
            boolean = object.valid.valid;
            boolean = object.invalid.valid;

            try {
                // @ts-expect-error
                boolean = object.invalid1.valid;
                fail('object.invalid1 shlud not exists');
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }


        } else {

            fail('type guard must be valid');
        }
    });
});

describe('valid single dimension', function () {

    const record = {
        valid :  {valid:true},
        invalid :  {valid:false},
    };

    const object : object = record;

    it('check result', () => {

        const result = Record(object);
        expect(result).toBeTrue();
    });

    it('compiler pass', () => {

        if(Record(object)) {

            expect(object.valid.valid).toBeTrue();
            expect(object.invalid.valid).toBeFalse();
        }
    });
});

describe('invalid single dimension', function () {

    const record = {
        valid :  {valid:true},
        invalid : {valid:false},
        wrong : 1
    };

    const object : object = record;

    it('check result', () => {

        const result = Record(object);
        expect(result).toBeFalse();
    });
});


describe('valid multi dimension', function () {


    const record = {
        valid :  {valid:true},
        invalid : {valid:false},
        valids : And({
            valid1 :  {valid:true},
            valid2 :  {valid:true},
        }),
        invalids : And({
            invalid1 : {valid:false},
            invalid2 : {valid:false},
        }),
        mixed : And({
            valid :  {valid:true},
            invalid : {valid:false},
        })
    };

    const object : object = record;


    it('valid', () => {

        const result = Record(object);
        expect(result).toBeTrue();
    });

    it('compiler pass', () => {

        if(Record(object)) {

            expect(object.valid.valid).toBeTrue();

            expect(object.invalid.valid).toBeFalse();

            expect(object.valids.valid).toBeTrue();

            expect(object.invalids.valid).toBeFalse();

            expect(object.mixed.valid).toBeFalse();

        }
    });
});
