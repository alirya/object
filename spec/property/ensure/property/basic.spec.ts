import {PropertyParameters} from '../../../../dist/property/ensure/property.js';
import String from '@axiona/string/ensure/string.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('object', ()=> {


    const object: {} = {};

    try {
        const ensured = PropertyParameters(object, 'property', String);

        const string : string = ensured.property;
        // @ts-expect-error
        const number : number = ensured.property;

        fail('error should thrown');

    } catch (error) {

        expect(error).toBeInstanceOf(Error);
    }

});

it('object', ()=> {


    const object: {
        property ?: string
    } = {};

    try {
        const ensured = PropertyParameters(object, 'property', String);

        const string : string = ensured.property;
        // @ts-expect-error
        const number : number = ensured.property;

        fail('error should thrown');

    } catch (error) {

        expect(error).toBeInstanceOf(Error);
    }

});

it('object', ()=> {


    const object: {
        property ?: string
    } = {
        property : ''
    };

    try {
        const ensured = PropertyParameters(object, 'property', String);

        const string : string = ensured.property;
        // @ts-expect-error
        const number : number = ensured.property;

        expect(ensured.property).toBe('');


    } catch (error) {

        fail('error should not thrown');
    }

});

