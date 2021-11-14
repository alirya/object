import Writable from "../../../dist/property/boolean/writable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('plain', () => {

    it('property', () => {

        let object = {property:true}

        expect(Writable.Parameters(object, 'property')).toBe(true);
        expect(Writable.Parameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        let object = {
            set setter (value) {},
        }

        expect(Writable.Parameters(object, 'setter')).toBe(true);
        expect(Writable.Parameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        let object = {
            get getter () { return 1 },
        }

        expect(Writable.Parameters(object, 'getter')).toBe(false);
        expect(Writable.Parameters(object, 'notExists')).toBe(false);

    });
});


describe('class', () => {

    it('property', () => {

        class Test {
            property = true
        }
        let object = new Test;

        expect(Writable.Parameters(object, 'property')).toBe(true);
        expect(Writable.Parameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        class Test {
            set setter (value) {}
        }

        let object = new Test;

        expect(Writable.Parameters(object, 'setter')).toBe(true);
        expect(Writable.Parameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        class Test {
            get getter () { return 1 }
        }
        let object = new Test;

        expect(Writable.Parameters(object, 'getter')).toBe(false);
        expect(Writable.Parameters(object, 'notExists')).toBe(false);

    });
});

