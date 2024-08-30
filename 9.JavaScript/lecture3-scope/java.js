//javascript scope//

// var keyword//

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