//
//
// it('enable console log', () => spyOn(console, 'log').and.callThrough());
//
// it('plain', () => {
//
//     let source = {};
//
//     let object = SetPropertyCallbackParameters(source, 'data', () =>'string', true, true);
//
//     let string : string = object.data;
//
//     // @ts-expect-error
//     let nonExist  = object.c;
//
// });
//
//
// it('different type', () => {
//
//     let source = {
//
//         get data () : number { return  1;}
//     };
//
//     let object = SetPropertyCallbackParameters(source, 'data', () =>'string', true, true);
//
//     // @ts-expect-error
//     let number : number = object.data;
//
//     let string : string = object.data;
//
// });
//
// describe('class', () => {
//
//     interface Interface {
//         readonly data : string;
//     }
//
//     it('implement', () => {
//
//         class Implementer implements Interface {
//
//             get data ()  {
//
//                 return '';
//
//             }
//         }
//
//         let source : Interface = new Implementer();
//         let type : Interface = SetPropertyCallbackParameters(source, 'data', () =>'string', true, true);
//         let string : string = type.data;
//
//     });
//
//     it('class', () => {
//
//         class Test  {
//
//             get data ()  {
//
//                 return '';
//             }
//         }
//
//         let source : Interface = new Test();
//         let type : Interface = SetPropertyCallbackParameters(source, 'data', () =>'string', true, true);
//         let string : string = type.data;
//
//     });
// });
//
// describe('not exists', () => {
//
//     it('var', () => {
//
//         let source = {};
//
//
//         let object = SetPropertyCallbackParameters(source, 'data', () =>'string', true, true);
//
//         // @ts-expect-error
//         let string : string = object.c;
//
//     });
//
//     it('multi', () => {
//
//         let source = {
//
//             get data ()  {
//                 return '';
//             }
//         };
//
//
//         let object = SetPropertyCallbackParameters(source, 'value', () =>'string', true, true);
//
//         // @ts-expect-error
//         let string : string = object.c;
//
//     });
// });
