import PickDeepParameters from '../../../../dist/value/value/pick-path-parameters';

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

        expect(PickDeepParameters(source, 'data', 'number')).toBe(1);
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

        expect(PickDeepParameters(source)).toEqual(source);

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

        expect(PickDeepParameters(source as any, 'data', 'array')).toBe(undefined);
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

        expect(PickDeepParameters(source as any, 'data', 'array', 'number')).toBe(undefined);

    });
});

