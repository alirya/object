import PickDeepParameters from "../../../../dist/value/value/pick-deep-parameters";

it('enable console log', () => spyOn(console, 'log').and.callThrough());

it('basic valid', ()=>{

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

