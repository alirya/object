import MapCallback from '../../dist/map-callback.js';
import {KeysParameters} from '../../dist/keys.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('all false', () => {

    const symbol = Symbol('symbol');

    const source = {
        number : 1,
        string : 'string',
        get boolean () {
            return true;
        },
        object : {},
        [symbol] : 'sym'
    };

    const map = KeysParameters(source, false, false);

    expect(map).toEqual([ 'number', 'string', 'boolean', 'object' ]);

});

it('all false', () => {

    const symbol = Symbol('_symbol_');

    const source = {
        number : 1,
        string : 'string',
        get boolean () {
            return true;
        },
        object : {},
        [symbol] : 'sym'
    };

    const map = KeysParameters(source, true, false);

    expect(map).toEqual([
        'number',
        'string',
        'boolean',
        'object',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toString',
        'valueOf',
        'toLocaleString',
    ] as (keyof typeof source)[]);

});
