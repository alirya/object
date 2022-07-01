import {SelectPathParameters} from '../../../../dist/value/value/select-path';
import {SelectPathParameter} from '../../../../dist/value/value/select-path';

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
        };

        expect(
            SelectPathParameters(object, 'data', 'number')
        ).toBe(
            SelectPathParameter<['data', 'number'], typeof object>({object, properties: ['data', 'number']})
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
        };

        expect(SelectPathParameters(source as any, 'data', 'array')).toBe(undefined);
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

        expect(SelectPathParameters(source as any, 'data', 'array', 'number')).toBe(undefined);

    });
});

