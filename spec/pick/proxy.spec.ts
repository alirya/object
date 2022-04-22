import PickParameters from '../../dist/pick-parameters';
import List from "../../dist/proxy/list";
import GetListFirst from "../../dist/proxy/handler/get-list-first";

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('pick defined', ()=>{

    const proxy = List([
        {data: 1}
    ], [
        (objects)=>new GetListFirst(objects)
    ]);


    expect(PickParameters(proxy, 'data')).toEqual({data:1});
});
