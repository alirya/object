import {ReadonlyPropertiesReturn} from '../../dist/readonly';

it('enable console log', () => spyOn(console, 'log').and.callThrough());

describe('partial', () => {

    it('test', () => {

        let source = {
            number : 1,
            string : 'a',
            boolean : true,
            object : {},
        };

        let readonly : ReadonlyPropertiesReturn<['number', 'boolean'], typeof source> = source;


        // @ts-expect-error
        readonly.number = 1;

        // @ts-expect-error
        readonly.boolean = true;

        readonly.string = 'a';
        readonly.object = {};
    });
});
