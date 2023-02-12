import MapCallback from '../../dist/map-callback.js';
import {KeysParameters} from '../../dist/keys.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


class Test {

    [Symbol.iterator]() {

        return [];
    }

    get number() {
        return Promise.resolve(2);
    }

    get string() {
        return Promise.resolve('string');
    }

    get boolean() {
        return Promise.resolve(true);
    }
    set boolean(a) {

    }
}

it('all false', () => {

    const map = KeysParameters(new Test(), false, false);

    expect(map).toEqual([  ]);

});

it('all false', () => {

    const map = KeysParameters(new Test(), true, false);

    expect(map).toEqual([ 'number', 'string', 'boolean' ]);

});

it('all false', () => {

    const map = KeysParameters(new Test(), false, true);

    expect(map).toEqual([ Symbol.iterator ]);

});
