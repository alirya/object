import {WritableParameters} from '../../../dist/property/boolean/writable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('plain', () => {

    it('property', () => {

        const object = {property:true};

        expect(WritableParameters(object, 'property')).toBe(true);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        const object = {
            set setter (value) {},
        };

        expect(WritableParameters(object, 'setter')).toBe(true);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        const object = {
            get getter () { return 1; },
        };

        expect(WritableParameters(object, 'getter')).toBe(false);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });
});


describe('class', () => {

    it('property', () => {

        class Test {
            property = true;
        }
        const object = new Test;

        expect(WritableParameters(object, 'property')).toBe(true);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        class Test {
            set setter (value) {}
        }

        const object = new Test;

        expect(WritableParameters(object, 'setter')).toBe(true);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        class Test {
            get getter () { return 1; }
        }
        const object = new Test;

        expect(WritableParameters(object, 'getter')).toBe(false);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });
});

