import {CompatibleParameters} from '../../../dist/assert/string/compatible.js';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it('valid',() =>{

    expect(CompatibleParameters( {}, true, 'Set')).toBe(`type is compatible with Set.`);
});

it('invalid',() =>{

    expect(CompatibleParameters( {}, false, 'Set')).toBe(`type must compatible with Set, actual object.`);

});
