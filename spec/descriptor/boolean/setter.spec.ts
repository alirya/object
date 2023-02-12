import Type from '../../../dist/descriptor/boolean/setter.js';



describe('getter/setter', function() {

    describe('class', function() {

        class Class {

            set setter (value) {}
            get getter () { return 1;}
        }

        const object = new Class();

        it(`check setter`, () => {

            const prototype = Object.getPrototypeOf(object);
            const descriptor = Object.getOwnPropertyDescriptor(prototype, 'setter');

            if(descriptor) {

                expect(Type(descriptor)).toBeTrue();

            } else {

                fail('descriptor should not undefined');
            }
        });

        it(`check getter`, () => {

            const prototype = Object.getPrototypeOf(object);
            const descriptor = Object.getOwnPropertyDescriptor(prototype, 'getter');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

    });

    describe('object', function() {


        const object = {
            set setter (value) {},
            get getter () { return 1;}
        };

        it(`check setter`, () => {


            const descriptor = Object.getOwnPropertyDescriptor(object, 'setter');

            if(descriptor) {

                expect(Type(descriptor)).toBeTrue();

            } else {

                fail('descriptor should not undefined');
            }
        });

        it(`check getter`, () => {


            const descriptor = Object.getOwnPropertyDescriptor(object, 'getter');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

    });

    describe('native', function() {

        const string = new String('a');

        it(`check setter`, () => {

            const descriptor = Object.getOwnPropertyDescriptor(string, 'length');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

        it(`check getter`, () => {


            const descriptor = Object.getOwnPropertyDescriptor(string, 'length');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

    });
});


describe('property', function() {

    describe('class', function() {

        class Class {
            data = 1;
        }

        const object = new Class();

        it(`check setter`, () => {

            const descriptor = Object.getOwnPropertyDescriptor(object, 'data');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

        it(`check getter`, () => {


            const descriptor = Object.getOwnPropertyDescriptor(object, 'data');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

    });

    describe('native', function() {

        const string = new Array('a');

        it(`check setter`, () => {

            const descriptor = Object.getOwnPropertyDescriptor(string, 'length');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

        it(`check getter`, () => {


            const descriptor = Object.getOwnPropertyDescriptor(string, 'length');

            if(descriptor) {

                expect(Type(descriptor)).toBeFalse();

            } else {

                fail('descriptor should not undefined');
            }
        });

    });
});
