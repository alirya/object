// import ValidatorStandard from "../../dist/validatable/objecstandard";
//
// it("enable console log", () => { spyOn(console, 'log').and.callThrough()});
//
// describe(`compiler compatible`,function() {
//
//     it(`valid value`,function() {
//
//         let validatable = ValidatorStandard(<unknown>{});
//
//         if(validatable.valid) {
//
//             // compiler pass
//             let object : object = validatable.value;
//             expect(object).toEqual({});
//
//         } else {
//
//             // @ts-expecerror
//             let object : object = validatable.value;
//             fail('validatable.valid should false')
//         }
//     });
//
//     it(`invalid value`,function() {
//
//         let validatable = ValidatorStandard(<unknown>1);
//
//         if(validatable.valid) {
//
//             // compiler pass
//             let object : object = validatable.value;
//             fail('validatable.valid should false')
//
//         } else {
//
//             // @ts-expecerror
//             let object : object = validatable.value;
//             // @ts-expecerror
//             expect(object).toEqual(1);
//         }
//     });
//
//     it(`readonly`,function() {
//
//         let validatable = ValidatorStandard(<unknown>{});
//
//         try {
//             // @ts-expecerror
//             validatable.valid = true;
//             fail('exception should thrown');
//         } catch (e) {
//             expect(e).toBeInstanceOf(Error);
//         }
//
//         // @ts-expecerror
//         validatable.value = true;
//
//         try {
//             // @ts-expecerror
//             validatable.message = 'message';
//             fail('exception should thrown');
//         } catch (e) {
//             expect(e).toBeInstanceOf(Error);
//         }
//
//     });
// });
//
//
// it(`valid`,function() {
//
//     let validatable = ValidatorStandard({});
//
//     expect(validatable.valid).toBe(true);
//     expect(validatable.value).toEqual({});
//     expect(typeof validatable.message).toBe("string");
//
// });
//
// it(`invalid`,function() {
//
//     let validatable = ValidatorStandard('a');
//
//     expect(validatable.valid).toBe(false);
//     expect(validatable.value).toBe('a');
//     expect(typeof validatable.message).toBe("string");
//
// });
//
//
//
