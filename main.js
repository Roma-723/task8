// // 9. Реализуй простую функцию `deepEqual(a, b)`, которая сравниваетдваобъектапозначению(рекурсивно).                                                             
                                                                                                          
                                                                                                                                                                   
// // function deepEqual(a) {                                                                           
// //       const valuea=Object.values(a)                                                              
// //       const valueb=Object.values(b)                                                             
// //       return valuea==valueb                                                                    
                                                                                                    
// // }                                                                                            
// // console.log(({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));                                
                                                                                                 
                                                                                                
// function deepEqual(a, b) {                                                                  
//     return Object.values(a).toString() === Object.values(b).toString();                    
// }                                                                                         
//     deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }); // true                     
//     deepEqual({ a: 1 }, { a: "1" }); // false                                            
//     deepEqual([1, 2, [3]], [1, 2, [3]]); // true                                       
                                                                                         
                                                                                        
                                                                                       
// function deepEqual(a, b) {                                                         
//   return Object.values(a).toString() === Object.values(b).toString();             //
// }                                                                                //
                                                                                   //
                                                                                  //
function deepEqual(a, b) {                                                       //
  if (typeof a !== typeof b) return false;                                      //
  if (typeof a !== "object" || a === null || b === null) return a === b;       //
                                                                              //
  const keysA = Object.keys(a);                                              //
  const keysB = Object.keys(b);                                             //
  if (keysA.length !== keysB.length) return false;                         // 
  return keysA.every(key => deepEqual(a[key], b[key]));                   //
}                                                                        // 
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));   // 
console.log(deepEqual({ a: 1 }, { a: "1" }));                          //
console.log(deepEqual([1, 2, [3]], [1, 2, [3]]));                     //
 