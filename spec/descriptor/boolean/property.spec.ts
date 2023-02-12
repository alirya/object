import Property from '../../../dist/descriptor/boolean/property.js';
import {FromObjectParameters} from '../../../dist/descriptor/from-object.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe(`plain`, () => {

    it(`property`, () => {

        const object = {property:1};
        const descriptor = FromObjectParameters(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(true);

        } else {

            fail('descriptor should exits');
        }
    });

    it(`getter`, () => {

        const object = {
            get property  () {return 1;}
        };

        const descriptor = FromObjectParameters(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(false);

        } else {

            fail('descriptor should exits');
        }
    });

    it(`setter`, () => {

        const object = {
            set property  (data) {}
        };

        const descriptor = FromObjectParameters(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(false);

        } else {

            fail('descriptor should exits');
        }
    });
});


describe(`class`, () => {

    it(`property`, () => {

        class Test {
            property = 1;
        }

        const object = new Test;

        const descriptor = FromObjectParameters(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(true);

        } else {

            fail('descriptor should exits');
        }
    });

    it(`getter`, () => {

        class Test {
            get property  () {return 1;}
        }

        const object = new Test;

        const descriptor = FromObjectParameters(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(false);

        } else {

            fail('descriptor should exits');
        }
    });

    it(`setter`, () => {

        class Test {
            set property  (data) {}
        }

        const object = new Test;

        const descriptor = FromObjectParameters(object, 'property');

        if(descriptor) {

            expect(Property(descriptor)).toBe(false);

        } else {

            fail('descriptor should exits');
        }
    });
});

describe(`array`, () => {

    it(`property`, () => {

        const descriptor = FromObjectParameters([], 'length');

        if(descriptor) {

            expect(Property(descriptor)).toBe(true);

        } else {

            fail('descriptor should exits');
        }
    });
});

