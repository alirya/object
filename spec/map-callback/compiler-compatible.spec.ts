import MapCallback from '../../dist/map-callback.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', () => {

    const source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    const map = MapCallback(source, (value)=>'replaced.js');

    let string : string;
    string = map.number;
    string = map.string;
    string = map.boolean;
    string = map.object;

    //@ts-expect-error
    string = map.r;

});


it('callback parameter', () => {

    const source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    const map = MapCallback(source, (value, key)=>{

        if(key === 'object') {

            // @ts-ignore
            const object : object = value;
        }

        return 'replaced.js';
    });


});
