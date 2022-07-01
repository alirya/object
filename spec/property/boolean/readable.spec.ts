import {ReadableParameters} from '../../../dist/property/boolean/readable';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('plain', () => {

    it('property', () => {

        let object = {property:true};

        expect(ReadableParameters(object, 'property')).toBe(true);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        let object = {
            set setter (value) {},
        };

        expect(ReadableParameters(object, 'setter')).toBe(false);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        let object = {
            get getter () { return 1; },
        };

        expect(ReadableParameters(object, 'getter')).toBe(true);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });
});


describe('class', () => {

    it('property', () => {

        class Test {
            property = true;
        }
        let object = new Test;

        expect(ReadableParameters(object, 'property')).toBe(true);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        class Test {
            set setter (value) {}
        }

        let object = new Test;

        expect(ReadableParameters(object, 'setter')).toBe(false);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        class Test {
            get getter () { return 1; }
        }
        let object = new Test;

        expect(ReadableParameters(object, 'getter')).toBe(true);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });
});



describe('class inheritance', () => {

    it('property', () => {

        class Parent {
            parent = true;
        }

        class Child extends Parent {
            child = true;
        }
        let object = new Child;

        expect(ReadableParameters(object, 'child')).toBe(true);
        expect(ReadableParameters(object, 'parent')).toBe(true);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        class Parent {
            set parent (value) {}
        }

        class Child extends Parent {
            set child (value) {}
        }

        let object = new Child;

        expect(ReadableParameters(object, 'child')).toBe(false);
        expect(ReadableParameters(object, 'parent')).toBe(false);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        class Parent {
            get parent () { return 1; }
        }

        class Child extends Parent {
            get child () { return 1; }
        }

        let object = new Child;

        expect(ReadableParameters(object, 'parent')).toBe(true);
        expect(ReadableParameters(object, 'child')).toBe(true);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });
});

