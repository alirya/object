import NonNullable from '../../dist/non-nullable';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


interface Type {
    string : string|null;
    number : number|null;
    boolean : boolean|null;
    object : object|null;
}

describe('nullable', ()=>{

    let strict : NonNullable<Type> = {
        string : '',
        number : 0,
        boolean : true,
        object : {},
    };


    let nullable : NonNullable<Type> = {
        // @ts-expecerror
        string : null,
        // @ts-expecerror
        number : null,
        // @ts-expecerror
        boolean : null,
        // @ts-expecerror
        object : null,
    };
});
