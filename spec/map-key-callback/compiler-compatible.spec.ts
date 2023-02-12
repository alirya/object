import MapKeyCallback from '../../dist/map-key-callback.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', () => {

    const source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    const map = MapKeyCallback(source, (value)=>'replaced.js' + 'value');

    let string : string;

    //@ts-expect-error
    string = map.replacednumber;

    //@ts-expect-error
    string = map.replacedstring;

    //@ts-expect-error
    string = map.replacedboolean;

    //@ts-expect-error
    string = map.replacedobject;

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

    const map = MapKeyCallback(source, (value, key)=>{

        if(key === 'object') {

            // @ts-ignore
            const object : object = value;
        }

        return 'replaced.js';
    });


});
