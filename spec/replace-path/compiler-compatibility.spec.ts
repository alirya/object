import ReplacePath from "../../dist/replace-path";


it('enable console log', () => spyOn(console, 'log').and.callThrough());


it('test', () =>{

    const source = {
        parent : {
            child : {
                number : 1
            }
        }
    }


    const updated : ReplacePath<typeof source, string, ['parent', 'child', 'number']> = {
        parent : {
            child : {
                number : '1'
            }
        }
    }


})
