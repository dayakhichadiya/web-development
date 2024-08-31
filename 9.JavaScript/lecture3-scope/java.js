//javascript scope//

// var keyword//

document.getElementById('demo').innerHTML='hello moto !!!!!'

var item1 = "first"

console.log(item1);

var item1 = "sec";

console.log(item1);

{
    var item2 = "third";
}

console.log(item2);

var a , b , c;

a = 10;
b = 20;
c = 30;

console.log(a);
console.log(b);
console.log(c);

// let keyword //

let s = 8;

console.log(s);

// let s = 40;

// console.log(s); //error//

{
    let d = 20;

    console.log(d);
}

// console.log(d); //error//

console.log(s);

{
    let x , y , z;
    x = 1;
    y = 2;
    z = 3;

    console.log(x);
    console.log(y);
    console.log(z);

}

//const keyword//

const i2 = "react js";
{
    const i2 = "react";
    console.log(i2);
}

console.log(i2);


// Scope of variables
// Redeclaration and reassignment
// Hoisting

// hoisting //
{
    
    a1 = 10;
    a2 = 40;
    a3 = 20;
    
    // output is undefined  if we cannot assign the value//
    console.log(a1);
    console.log(a2);
    console.log(a3);
    var a1 , a2 , a3 ;
}


// let 

{

    // x1 = 12;
    // x2 = 13;
    // x3 = 14;
    
    let x1 , x2 , x3 ;   // it shows the reference error //  Cannot access 'x1' before initialization
    
    x1 = 12;
    x2 = 13;
    x3 = 14;

    console.log(x1);
    console.log(x2);
    console.log(x3);
}

// const 

{
    const x = 11 ;
    const y = 44 ;
    const z = 55 ;

    console.log(x);
    console.log(y);
    console.log(z);
    
    // const x = 33;  // it shows the reference error //  Cannot access 'x' before initialization
    // const y = 44 ;
    // const z = 55 ;
}