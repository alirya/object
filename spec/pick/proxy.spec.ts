import {PickParameters} from '../../dist/pick';
import List from '@alirya/proxy/list';
import GetListFirst from '@alirya/proxy/handler/get-list-first';

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
