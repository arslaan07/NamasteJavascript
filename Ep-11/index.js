// function x() {
//     var i = 1;
//     setTimeout(function() {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Javascript");
// }
// x();

// function x() {
//    for(var i = 1;i<= 5;i++){
//        setTimeout(function() {
//            console.log(i);
//        },i * 1000);
//     }
//     console.log("Namaste Javascript");
// }
// x();


// get rid of this problem by using a closure

function x() {
    //close is the closure function
    for(var i = 1;i<= 5;i++){
            function close(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
     console.log("Namaste Javascript");
 }
 x();