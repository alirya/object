import FilterRecursive from '../dist/filter-recursive.js';
import NotEmpty from '@alirya/string/boolean/not-empty.js';
import String from '@alirya/string/boolean/string.js';
import NotEmptyObject from '../dist/boolean/not-empty.js';
import Object from '../dist/boolean/object.js';


it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('single dimension', () => {

    const object = {
        retain : 'a',
        remove : '',
        mixed : {
            retain : 'a',
            remove : '',
        },
        retains : {
            retain1 : 'a',
            retain2 : 'b',
        },
        removes : {
            retain1 : '',
            retain2 : '',
        },
    };

    it('filter not empty string', ()=>{

        const filtered = FilterRecursive(object, NotEmpty);

        expect<any>(filtered).toEqual({
            retain : 'a',
            mixed : {
                retain : 'a',
            },
            retains : {
                retain1 : 'a',
                retain2 : 'b',
            },
            removes : {},
        });

    });

    it('filter not empty string & object', ()=>{

        const filtered = FilterRecursive(object, (v)=>{

            if(String(v)) {

                return NotEmpty(v);
            }

            if(Object(v)) {

                return NotEmptyObject(v);
            }

            return false;
        });

        expect<any>(filtered).toEqual({
            retain : 'a',
            mixed : {
                retain : 'a',
            },
            retains : {
                retain1 : 'a',
                retain2 : 'b',
            },
        });

    });



});
