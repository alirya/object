import SetProperty from "../../../../dist/value/value/set-property";
import Readable from "../../../../dist/property/boolean/readable";
import Writable from "../../../../dist/property/boolean/writable";

it("enable console log", () => spyOn(console, 'log').and.callThrough());

describe('plain', () => {

    let called = 0;
    let result : string;
    let object = {

        get data ()  {

            called++;
            return SetProperty.Parameters(this, 'data', Math.random().toString(), false);
        }
    }

    it('check initial', ()=>{

        expect(called).toBe(0);
        expect(Readable.Parameters(object, 'data')).toBe(true);
        expect(Writable.Parameters(object, 'data')).toBe(false);

    });

    it('check value', ()=>{

        result = object.data;
        expect(typeof result).toBe('string');
        expect(called).toBe(1);

        expect(Readable.Parameters(object, 'data')).toBe(true);
        expect(Writable.Parameters(object, 'data')).toBe(false);

    });

    it('re-check value', ()=>{

        expect(object.data).toBe(result);
        expect(called).toBe(1);

        expect(object.data).toBe(result);
        expect(object.data).toBe(object.data);
        expect(called).toBe(1);

        expect(Readable.Parameters(object, 'data')).toBe(true);
        expect(Writable.Parameters(object, 'data')).toBe(false);

    });

});


describe('class', () => {

    let called = 0;
    let result : string;

    class Test {

        get data ()  {

            called++;
            return SetProperty.Parameters(this, 'data', Math.random().toString(), false);
        }
    }

    let object = new Test();

    it('check initial', ()=>{

        expect(called).toBe(0);

        expect(Readable.Parameters(object, 'data')).toBe(true);
        expect(Writable.Parameters(object, 'data')).toBe(false);

    });

    it('check value', ()=>{

        result = object.data;
        expect(typeof result).toBe('string');
        expect(called).toBe(1);

        expect(Readable.Parameters(object, 'data')).toBe(true);
        expect(Writable.Parameters(object, 'data')).toBe(false);

    });

    it('re-check value', ()=>{

        expect(object.data).toBe(result);
        expect(called).toBe(1);

        expect(object.data).toBe(result);
        expect(object.data).toBe(object.data);
        expect(called).toBe(1);

        expect(Readable.Parameters(object, 'data')).toBe(true);
        expect(Writable.Parameters(object, 'data')).toBe(false);

    });

});

