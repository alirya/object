import Or from '../../../dist/validatable/or.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('valid', function() {

    const record = {
        valid1 : {valid:true},
        valid2 : {valid:true},
    };

    const result = Or(record);

    expect(result.valid).toBe(true);

});



it('invalid', () => {

    const record = {
        invalid1 : {valid:false},
        invalid2 : {valid:false},
    };

    const result = Or(record);

    expect(result.valid).toBe(false);
});



it('mixed', () => {

    const record = {
        valid : {valid:true},
        invalid : {valid:false},
    };

    const result = Or(record);

    expect(result.valid).toBe(true);
});
