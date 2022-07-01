import Property from '../../../../dist/property/boolean/exists';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('object', ()=> {


    let object: object = {};

    if(Property.Parameters(object, 'property')) {

        let property = object.property;

    } else {

        // @ts-expect-error
        let property = object.property;
    }

});

it('optional', ()=> {

    class Class {
        property ?: number;
    }

    let object = new Class();

    if(Property.Parameters(object, 'property')) {

        let property : number = object.property;

    } else {

        // @ts-expect-error
        let property : number = object.property;
        let optional : number|undefined = object.property;
    }

});
