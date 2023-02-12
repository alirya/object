import Property from '../../../../dist/property/boolean/exists.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('object', ()=> {


    const object: object = {};

    if(Property.Parameters(object, 'property')) {

        const property = object.property;

    } else {

        // @ts-expect-error
        const property = object.property;
    }

});

it('optional', ()=> {

    class Class {
        property ?: number;
    }

    const object = new Class();

    if(Property.Parameters(object, 'property')) {

        const property : number = object.property;

    } else {

        // @ts-expect-error
        const property : number = object.property;
        const optional : number|undefined = object.property;
    }

});
