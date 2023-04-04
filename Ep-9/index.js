
        // Block Scope
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//  console.log(a);
// console.log(b);
// console.log(c);

// ----------------------------------------------------------------------
        // Shadowing
//     var a = 100;
// {
//     var a = 10;  //this a shadows the global a outside block
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//  console.log(a);
// console.log(b);
// console.log(c);

// ----------------------------------------------------------------------------

let b = 100; //this b shadows the inner a in block
{
    var a = 10;  
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);