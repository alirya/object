import {SortKeyParameters} from '../../dist/sort-key';
import {SortKeyParameter} from '../../dist/sort-key';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

const data = {
    c : 3,
    b : 2,
    a : 1,
    e : 5,
    d : 4,
};

describe('params', () => {

    it('test', ()=>{

        expect(
            SortKeyParameters(data, (arg1, arg2) => arg1.localeCompare(arg2))
        ).toEqual({
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5
        });
    });

});

describe('param', () => {

    it('test', ()=>{

        expect(
            SortKeyParameter({
                object:data,
                compare:(arg1, arg2)=> arg1.localeCompare(arg2)
            })
        ).toEqual({
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5
        });
    });

});

