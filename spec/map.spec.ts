import Map from '../dist/map-callback.js';
import Convert from '../dist/map.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

interface Single {
    str : string;
    num : number;
}

interface Multi extends Single {
    str : string;
    num : number;
    child ?: Multi;
}

it('single dimension', () => {

    const single : Record<string, string> = {
        str : 'string',
        num : 'string',
    };

    const type : Convert<typeof single, boolean> = {

        str : true, // Compile Pass
        num : true, // Compile Pass
    };
});

it('multi dimension', () => {

    const single  = {
        str : 'string',
        num : 'string',
        child : {
            str : 'string',
            num : 'string',
            child : {
                str : 'string',
                num : 'string',
            }
        }
    };

    const type : Convert<typeof single, boolean> =  {

        str : true,
        num : true,
        child : true,
    };


    const invalid : Convert<typeof single, boolean> =  {
        str : true,
        num : true,
        // @ts-expect-error
        child : {
            str : true,
            num : true,
            child : {
                str : true,
                num : true,
            }
        }
    };
});


it('complex', () => {

    interface Data {

        string : string;
        number : number;
    }

    const convert : Convert<Data, boolean> = {
        string : true,
        number : false,
    };

});


const data = {
    property1 : 1,
    property2 : 'string',
    property3 : true,
};

describe('implicit', function () {

    const result = Map<typeof data, string>(data,  (v:any) => 'data');

    it(`check value`, () => {

        expect(result.property1).toBe('data', 'property1');
        expect(result.property2).toBe('data', 'property2');
        expect(result.property3).toBe('data', 'property3');
    });
});

describe('explicit', function () {

    const result = Map(data,  (v:any) => 'data');

    it(`check value`, () => {
        expect(result.property1).toBe('data', 'property1');
        expect(result.property2).toBe('data', 'property2');
        expect(result.property3).toBe('data', 'property3');
    });
});

