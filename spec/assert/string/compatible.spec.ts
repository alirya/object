import Message from "../../../dist/assert/string/compatible";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it('valid',() =>{

    expect(Message.Parameter(true, {}, 'Set')).toBe(`type is compatible with Set.`);
});

it('invalid',() =>{

    expect(Message.Parameter(false, {}, 'Set')).toBe(`type must compatible with Set, actual object.`);

});
