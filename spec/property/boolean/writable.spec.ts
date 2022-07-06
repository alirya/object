import {WritableParameters} from '../../../dist/property/boolean/writable.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('plain', () => {

    it('property', () => {

        let object = {property:true};

        expect(WritableParameters(object, 'property')).toBe(true);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        let object = {
            set setter (value) {},
        };

        expect(WritableParameters(object, 'setter')).toBe(true);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        let object = {
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
        let object = new Test;

        expect(WritableParameters(object, 'property')).toBe(true);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });

    it('setter', () => {

        class Test {
            set setter (value) {}
        }

        let object = new Test;

        expect(WritableParameters(object, 'setter')).toBe(true);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });

    it('getter', () => {

        class Test {
            get getter () { return 1; }
        }
        let object = new Test;

        expect(WritableParameters(object, 'getter')).toBe(false);
        expect(WritableParameters(object, 'notExists')).toBe(false);

    });
});

