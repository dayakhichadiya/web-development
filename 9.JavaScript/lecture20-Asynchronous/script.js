// Javascript ES5 - ES6


{
    // console.log("first element");
    // console.log("second element");

    // function print() {
    //     return console.log("third element")
    // }

    // print();
}
// console.log("fourth element");

// settimeout

{
    // console.log("first element");
    // console.log("second element");

    // function print() {
    //     return console.log("third element")
    // }

    // let settimeout = setTimeout(() => {
    //     print()
    // }, 5000)

    // console.log("fourth element");
}

{
//     console.log("first element");
//     console.log("second element");

//     function print() {
//         return console.log("third element");
//     }

//     let intervalid = setInterval(() => {
//         print();
//     }, 3000)
//     console.log("fourth element");

//     clearInterval(intervalid)
}

// callback function

{
//     function callback(){
//         return console.log('callback function');
//     }

//     function sum(a, b){
//         callback();
//         return a + b;
//     }

//     console.log(sum(2,4)); // callback function 6
// 
}


// {
//     let callback = () =>{
//         return console.log("callback function");
//     }

//     let sum = (a, b, callback) => {
//         callback()
//         return a + b;
//     }

//     console.log(sum(10, 6 , callback))
// }


// IIFE Function [Immidiately Invoked Function Expression]

{
    (
        function sum() {
            return console.log('1st IIFE Function');
        }
    )()
}

{
    const sum = (() => {return console.log("2nd IIEF Function")})()
}