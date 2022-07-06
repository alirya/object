import {SetPathParameters} from '../../dist/set-path.js';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('valid', ()=>{

    it('exists', ()=>{

        const source = {
            data : {
                number : 1,
                string : 'string',
                object : {},
                boolean : true,
            }
        };

        expect(SetPathParameters(source, 5, 'data', 'number').data.number).toBe(source.data.number);
    });

    it('empty', ()=>{

        const source : any = {};

        expect(SetPathParameters(source, 5, 'data', 'number').data.number).toBe(source.data.number);
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

        expect(SetPathParameters(source, [], 'data', 'array').data.array).toBe((source.data as any).array);
    });
});

