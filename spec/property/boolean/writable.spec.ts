import Writable from "../../../dist/property/boolean/writable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('plain', () => {

    it('property', () => {

        let object = {property:true}

        expect(Writable.Parameter(object, 'property')).toBe(true);
        expect(Writable.Parameter(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        let object = {
            set setter (value) {},
        }

        expect(Writable.Parameter(object, 'setter')).toBe(true);
        expect(Writable.Parameter(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        let object = {
            get getter () { return 1 },
        }

        expect(Writable.Parameter(object, 'getter')).toBe(false);
        expect(Writable.Parameter(object, 'notExists')).toBe(false);

    });
});


describe('class', () => {

    it('property', () => {

        class Test {
            property = true
        }
        let object = new Test;

        expect(Writable.Parameter(object, 'property')).toBe(true);
        expect(Writable.Parameter(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        class Test {
            set setter (value) {}
        }

        let object = new Test;

        expect(Writable.Parameter(object, 'setter')).toBe(true);
        expect(Writable.Parameter(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        class Test {
            get getter () { return 1 }
        }
        let object = new Test;

        expect(Writable.Parameter(object, 'getter')).toBe(false);
        expect(Writable.Parameter(object, 'notExists')).toBe(false);

    });
});

