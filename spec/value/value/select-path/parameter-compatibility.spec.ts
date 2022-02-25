import PickDeepParameters from "../../../../dist/value/value/select-path-parameters";
import PickDeepParameter from "../../../../dist/value/value/select-path-parameter";

it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('valid', ()=>{

    it('pick', ()=>{

        const object = {
            data : {
                number : 1,
                string : 'string',
                object : {},
                boolean : true,
            }
        }

        expect(
            PickDeepParameters(object, 'data', 'number')
        ).toBe(
            PickDeepParameter<['data', 'number'], typeof object>({object, properties: ['data', 'number']})
        );
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

