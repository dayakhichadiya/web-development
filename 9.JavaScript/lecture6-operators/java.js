// Logical operator


{
    // AND operator

    {
        let a = true;
        let b = false;
        let c = true;

        console.log(a && b); //false
        console.log(a && c); //true
        console.log(a && a); //true

    }

    //OR opertor

    {
        let a = true;
        let b = false;
        let c = true;

        console.log(a || b); //true
        console.log(a || c); //true
        console.log(b || b); //false

    }

    //NOT operator

    {
        let a = true;
        let b = false;
        let c = true;

        console.log(!(a || b)); //false
        console.log(!(a && c)); //false
        console.log((!b || b)); //true

        console.log(!(a || b) && (a || b)); //false
        console.log(!(a || b) || (a || b)); //true

    }
}

// Unary operator

{
    {
        const x = '1'
        const y = 1;

        console.log(x); //1
        console.log(+y); //1

        console.log(+""); //0

        console.log(+true); //1
        console.log(+false) //0

        console.log(+'hello'); //Nan

    }

    {
        const x = 4;
        const y = -x;

        console.log(y); //-4
    }
}

// String operator

{
    let a = 10 + '10';
    console.log(a); // 1010

    let b = 10 + 10 + 10 + '20' + 10 + 10;
    console.log(b); //30201010

    let c = 10 + 10 + 10 + '20' + 10 - 10;
    console.log(c); //302000 

    let d = 'skill' + 'qode';
    console.log(d);
}


// Binary Operator

{
    let x = !(0);
    let y = !(1);

    console.log(x);//true
    console.log(y);// false
}


// Ternary operator

{
    let a = 'on ';
    let b = 'off';

    console.log(true ? a : b); //on
    console.log(false ? a : b); //off
}

// Bitwise operator

/* 
1. AND operator ( & ) (A & B)
{
    A   B    Output

    0   0     0
    0   1     0
    1   0     0
    1   1     1
}

2. OR operator ( | )  (A | B)

{
    A   B     output

    0   0     0
    0   1     1
    1   0     1
    1   1     1

}

3. XOR operator (A ^ B)

{
    A   B     output

    0   0     0
    0   1     1
    1   0     1
    1   1     0

}
 
4. NOT operator (~)

{
    A     output (~A)

    0      1
    1      0
    
}
    */


//    @keyframes dot-selected { 
//        0%, 100% {
//          scale: .75;
//        }
//        50% {
//          scale: 1;
//          background: var(--text-2);
//        }
//      }


// @keyframes spin {
//     to {
//       transform: rotateY(5turn);
//     }
//   }
  
//   @media (prefers-reduced-motion: no-preference) {
//     div {
//       animation: spin 5s ease infinite;


//https://tympanus.net/codrops/2024/01/17/a-practical-introduction-to-scroll-driven-animations-with-css-scroll-and-view/

// https://www.sliderrevolution.com/resources/css-animations-on-scroll/
//https://www.sliderrevolution.com/resources/css-animations-on-scroll/
//     }
//   }

