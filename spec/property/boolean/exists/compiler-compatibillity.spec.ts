import Property from '../../../../dist/property/boolean/exists';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe('object', ()=> {


    let object: object = {};

    if(Property(object, 'property')) {

        let property = object.property;

    } else {

        // @ts-expecerror
        let property = object.property;
    }

});

describe('optional', ()=> {

    class Class {
        property ?: number;
    }

    let object = new Class();

    if(Property(object, 'property')) {

        let property : number = object.property;

    } else {

        // @ts-expecerror
        let property : number = object.property;
        let optional : number|undefined = object.property;
    }

});
