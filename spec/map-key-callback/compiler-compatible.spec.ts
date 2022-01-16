import MapKeyCallback from '../../dist/map-key-callback';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('basic', () => {

    let source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    let map = MapKeyCallback(source, (value)=>'replaced' + 'value');

    let string : string;

    //@ts-expecerror
    string = map.replacednumber;

    //@ts-expecerror
    string = map.replacedstring;

    //@ts-expecerror
    string = map.replacedboolean;

    //@ts-expecerror
    string = map.replacedobject;

    //@ts-expecerror
    string = map.r;

});


describe('callback parameter', () => {

    let source = {
        number : 1,
        string : 'string',
        boolean : true,
        object : {},
    };

    let map = MapKeyCallback(source, (value, key)=>{

        if(key === 'object') {

            // @ts-ignore
            let object : object = value;
        }

        return 'replaced';
    });


});
