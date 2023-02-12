import MapCallback from '../../dist/map-callback.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', () => {

    const source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    const map = MapCallback(source, (value)=>'replaced');

    expect(map.number).toBe('replaced');
    expect(map.string).toBe('replaced');
    expect(map.boolean).toBe('replaced');
    expect(map.object).toBe('replaced');

});
