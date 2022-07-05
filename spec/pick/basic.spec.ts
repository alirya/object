import {PickParameters} from '../../dist/pick';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('pick defined', ()=>{

    expect(PickParameters({data:1}, 'data')).toEqual({data:1});

});

it('pick defined undefined', ()=>{

    expect(PickParameters({data:undefined}, 'data')).toEqual({data:undefined});

});

it('pick undefined', ()=>{

    expect(PickParameters<Partial<{ data: any }>>({}, 'data')).toEqual({});

});


it('pick getter', ()=>{

    class Getter {

        get data() : string {

            return 'data 1';
        }
    }

    expect(PickParameters(new Getter(), 'data')).toEqual({data:'data 1'});
});

it('pick setter', ()=>{

    class Setter {

        set data (data) {}
    }

    expect(PickParameters<Partial<{ data: any }>>(new Setter(), 'data')).toEqual({});
});
