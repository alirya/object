import {ReadableParameters} from '../../../dist/property/boolean/readable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('plain', () => {

    it('property', () => {

        const object = {property:true};

        expect(ReadableParameters(object, 'property')).toBe(true);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        const object = {
            set setter (value) {},
        };

        expect(ReadableParameters(object, 'setter')).toBe(false);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        const object = {
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
        const object = new Test;

        expect(ReadableParameters(object, 'property')).toBe(true);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        class Test {
            set setter (value) {}
        }

        const object = new Test;

        expect(ReadableParameters(object, 'setter')).toBe(false);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        class Test {
            get getter () { return 1; }
        }
        const object = new Test;

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
        const object = new Child;

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

        const object = new Child;

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

        const object = new Child;

        expect(ReadableParameters(object, 'parent')).toBe(true);
        expect(ReadableParameters(object, 'child')).toBe(true);
        expect(ReadableParameters(object, 'notExists')).toBe(false);

    });
});

