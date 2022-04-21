import ExistsDeepParameters from '../../../../dist/property/boolean/exists-deep-parameters';
import ExistsDeepParameter from '../../../../dist/property/boolean/exists-deep-parameter';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});




it(`parameters`, () => {

    let object =  {
        a : 1,
        b : {
            a : 1,
            b : 1
        }
    };
    expect(ExistsDeepParameters(object, 'a', 'b')).toBe(false);
    expect(ExistsDeepParameters(object, 'b', 'a')).toBe(false);
});


it(`parameter`, () => {

    let object =  {
        a : 1,
        b : {
            a : 1,
            b : 1
        }
    };
    expect(ExistsDeepParameter({object, properties:['a', 'b']})).toBe(false);
    expect(ExistsDeepParameter({object, properties:['b', 'a']})).toBe(false);
});


