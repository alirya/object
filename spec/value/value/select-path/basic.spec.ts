import PickDeepParameters from "../../../../dist/value/value/pick-path-parameters";

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
        }

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
        }

        expect(PickDeepParameters(source)).toBe(source);

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
        }

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
        }

        try {

            PickDeepParameters(source as any, 'data', 'array', 'number')
            fail('error should be thrown');

        } catch (error) {

            expect(error).toBeInstanceOf(Error);
        }

    });
});

