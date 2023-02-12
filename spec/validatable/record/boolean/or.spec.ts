import Or from '../../../../dist/validatable/record/boolean/or.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('all true', function () {

    const record = {
        data1:{valid:true},
        data2:{valid:true},
    };

    expect(Or(record)).toBeTrue();
});

it('all false', function () {

    const record = {
        data1:{valid:false},
        data2:{valid:false},
    };

    expect(Or(record)).toBeFalse();
});


it('mixed', function () {

    const record = {
        data1:{valid:true},
        data2:{valid:false},
    };

    expect(Or(record)).toBeTrue();
});

