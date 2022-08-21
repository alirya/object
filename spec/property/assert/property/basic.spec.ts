import {PropertyParameters} from '../../../../dist/property/assert/property';
import String from '@alirya/string/assert/string';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('object', ()=> {


    let object: {} = {};

    try {
        PropertyParameters(object, 'property', String);

        let string : string = object.property;
        // @ts-expect-error
        let number : number = object.property;

        fail('error should thrown');

    } catch (error) {

        expect(error).toBeInstanceOf(Error);
    }

});

it('object', ()=> {


    let object: {
        property ?: string
    } = {};

    try {
        PropertyParameters(object, 'property', String);

        let string : string = object.property;
        // @ts-expect-error
        let number : number = object.property;

        fail('error should thrown');

    } catch (error) {

        expect(error).toBeInstanceOf(Error);
    }

});

it('object', ()=> {


    let object: {
        property ?: string
    } = {
        property : ''
    };

    try {
        PropertyParameters(object, 'property', String);

        let string : string = object.property;
        // @ts-expect-error
        let number : number = object.property;

        expect(object.property).toBe('');

    } catch (error) {

        fail('error should not thrown');

    }

});


