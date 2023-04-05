// function outest() {
//     var c = 20;
//     function outer(b) {
//         function inner() {
//             console.log(a, b, c);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// var close = outest()("helloworld");
// //calling outest() and then outer(b) passing it argument "helloworld"
// close();


// // --------------------------------------------
// //Data privacy using closures

// function counter() {
//     var count = 0;
//     function incrementCounter() {
//         count++;
//         console.log(count);
//     }
//     return incrementCounter;
// }
// var counter1 = counter();
// counter1();
// counter1();
// counter1();
// counter1();
// var counter2 = counter();
// counter2();
// counter2();
// counter2();
//counter1() and counter2() are independent of each other

// ----------------------------------------------

//Smart Garbage collection by v8 and Js engine

function abc() {
    var i = 10, j = 20;
    //j will be garbage collected as it is not being used
    
    function xyz() {
        console.log(i);
    }
    return xyz;
}
var z = abc();
z();