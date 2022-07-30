import {PropertyParameters} from '../../../../dist/property/ensure/property';
import String from '../../../../../string/dist/ensure/string';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('object', ()=> {


    let object: {} = {};

    try {
        const ensured = PropertyParameters(object, 'property', String);

        let string : string = ensured.property;
        // @ts-expect-error
        let number : number = ensured.property;

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
        const ensured = PropertyParameters(object, 'property', String);

        let string : string = ensured.property;
        // @ts-expect-error
        let number : number = ensured.property;

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
        const ensured = PropertyParameters(object, 'property', String);

        let string : string = ensured.property;
        // @ts-expect-error
        let number : number = ensured.property;

        expect(ensured.property).toBe('');


    } catch (error) {

        fail('error should not thrown');
    }

});

