import Or from '../../../dist/validatable/or.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('valid', function() {

    let record = {
        valid1 : {valid:true},
        valid2 : undefined,
        valid3 : {valid:true},
    };

    let result = Or(record);

    expect(result.valid).toBe(true);

});



it('invalid', () => {

    let record = {
        invalid1 : {valid:false},
        invalid2 : undefined,
        invalid3 : {valid:false},
    };

    let result = Or(record);

    expect(result.valid).toBe(false);
});



it('mixed', () => {

    let record = {
        valid : {valid:true},
        undefined : undefined,
        invalid : {valid:false},
    };

    let result = Or(record);

    expect(result.valid).toBe(true);
});
