import {SetPropertyParameters} from '../../../../dist/value/value/set-property.js';
import {ReadableParameters} from '../../../../dist/property/boolean/readable.js';
import {WritableParameters} from '../../../../dist/property/boolean/writable.js';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('plain', () => {

    let called = 0;
    let result : string;
    let object = {

        get data ()  {

            called++;
            return SetPropertyParameters(this, 'data', Math.random().toString(), false);
        }
    };

    it('check initial', ()=>{

        expect(called).toBe(0);
        expect(ReadableParameters(object, 'data')).toBe(true);
        expect(WritableParameters(object, 'data')).toBe(false);

    });

    it('check value', ()=>{

        result = object.data;
        expect(typeof result).toBe('string');
        expect(called).toBe(1);

        expect(ReadableParameters(object, 'data')).toBe(true);
        expect(WritableParameters(object, 'data')).toBe(false);

    });

    it('re-check value', ()=>{

        expect(object.data).toBe(result);
        expect(called).toBe(1);

        expect(object.data).toBe(result);
        expect(object.data).toBe(object.data);
        expect(called).toBe(1);

        expect(ReadableParameters(object, 'data')).toBe(true);
        expect(WritableParameters(object, 'data')).toBe(false);

    });

});


describe('class', () => {

    let called = 0;
    let result : string;

    class Test {

        get data ()  {

            called++;
            return SetPropertyParameters(this, 'data', Math.random().toString(), false);
        }
    }

    let object = new Test();

    it('check initial', ()=>{

        expect(called).toBe(0);

        expect(ReadableParameters(object, 'data')).toBe(true);
        expect(WritableParameters(object, 'data')).toBe(false);

    });

    it('check value', ()=>{

        result = object.data;
        expect(typeof result).toBe('string');
        expect(called).toBe(1);

        expect(ReadableParameters(object, 'data')).toBe(true);
        expect(WritableParameters(object, 'data')).toBe(false);

    });

    it('re-check value', ()=>{

        expect(object.data).toBe(result);
        expect(called).toBe(1);

        expect(object.data).toBe(result);
        expect(object.data).toBe(object.data);
        expect(called).toBe(1);

        expect(ReadableParameters(object, 'data')).toBe(true);
        expect(WritableParameters(object, 'data')).toBe(false);

    });

});

