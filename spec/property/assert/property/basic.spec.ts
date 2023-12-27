import {PropertyParameters} from '../../../../dist/property/assert/property.js';
import String from '@axiona/string/assert/string.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('object', ()=> {


    const object: {} = {};

    try {
        PropertyParameters(object, 'property', String);

        const string : string = object.property;
        // @ts-expect-error
        const number : number = object.property;

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
        PropertyParameters(object, 'property', String);

        const string : string = object.property;
        // @ts-expect-error
        const number : number = object.property;

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
        PropertyParameters(object, 'property', String);

        const string : string = object.property;
        // @ts-expect-error
        const number : number = object.property;

        expect(object.property).toBe('');

    } catch (error) {

        fail('error should not thrown');

    }

});


