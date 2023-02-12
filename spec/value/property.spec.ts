import Property from '../../dist/value/property.js';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('get', function() {

    describe('array', function() {

        const op = new Property([1,2], 'length');

        it(`length`, () => expect(op.value).toBe(2));
    });

    describe('object', function() {

        const object = {
            str : 'string',
            num : 2
        };

        it(`str`, () => {
            const op = new Property(object, 'str');
            expect(op.value).toBe('string');
        });

        it(`num`, () => {
            const op = new Property(object, 'num');
            expect(op.value).toBe(2);
        });

    });
});


describe('set', function() {

    describe('array', function() {

        const array = [1,2];
        const op = new Property(array, 'length');

        it(`length`, () => expect(op.value).toBe(2));

        it(`set length`, () => {

            op.value = 1;
            expect(op.value).toBe(1);
            expect(array).toEqual([1]);
        });
    });

    describe('object', function() {

        const object = {
            str : 'string',
            num : 2
        };

        it(`set str`, () => {
            const op = new Property(object, 'str');
            op.value = 'updated string';

            expect(op.value).toBe('updated string');
            expect(object.str).toBe('updated string');
        });

        it(`num`, () => {

            const op = new Property(object, 'num');
            op.value = 5;
            expect(op.value).toBe(5);
            expect(object.num).toBe(5);
        });

    });
});
