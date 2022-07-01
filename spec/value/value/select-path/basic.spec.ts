import {PickPathParameters} from '../../../../dist/value/value/pick-path';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('valid', ()=>{

    it('pick', ()=>{

        const source = {
            data : {
                number : 1,
                string : 'string',
                object : {},
                boolean : true,
            }
        };

        expect(PickPathParameters(source, 'data', 'number')).toBe(1);
    });

    it('empty pick', ()=>{

        const source = {
            data : {
                number : 1,
                string : 'string',
                object : {},
                boolean : true,
            }
        };

        expect(PickPathParameters(source)).toEqual(source);

    });
});


describe('invalid', ()=>{

    it('non exists', ()=>{

        const source = {
            data : {
                number : 1,
                string : 'string',
                object : {},
                boolean : true,
            }
        };

        expect(PickPathParameters(source as any, 'data', 'array')).toBe(undefined);
    });

    it('out of bound', ()=>{

        const source = {
            data : {
                number : 1,
                string : 'string',
                object : {},
                boolean : true,
            }
        };

        expect(PickPathParameters(source as any, 'data', 'array', 'number')).toBe(undefined);

    });
});

