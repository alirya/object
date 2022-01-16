import Message from '../../../dist/assert/string/compatible-parameters';

it('enable console log', () => {spyOn(console, 'log').and.callThrough();});

it('valid',() =>{

    expect(Message( {}, true, 'Set')).toBe(`type is compatible with Set.`);
});

it('invalid',() =>{

    expect(Message( {}, false, 'Set')).toBe(`type must compatible with Set, actual object.`);

});
