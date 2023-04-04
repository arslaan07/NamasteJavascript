// y() has closures of x() and z()

// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// ---------------------------------------------------------------

// y() has closure of x() even after x() is destoyed

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var k = x();
k();
