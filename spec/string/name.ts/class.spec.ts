import Name from '../../../dist/string/name.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

class Test {

}

it(`true`, () => {
    expect(Name(Test)).toBe('Test');
});
