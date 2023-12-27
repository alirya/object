import {PickParameters} from '../../dist/pick.js';
import List from '@axiona/proxy/list.js';
import GetListFirst from '@axiona/proxy/handler/get-list-first.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('property', ()=>{

    const proxy = List([
        {data: 1}
    ], [
        (objects)=>new GetListFirst(objects)
    ]);


    expect(PickParameters(proxy, 'data')).toEqual({data:1});
});

it('getter class', ()=>{

    class Getter  {
        get data() {return 1;}
    }


    const proxy = List([
        new Getter()
    ], [
        (objects)=>new GetListFirst(objects)
    ]);


    expect(PickParameters(proxy, 'data')).toEqual({data:1});
});
