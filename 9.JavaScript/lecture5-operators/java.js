// operators in javascript

// 1.Arithmetic operator
// 2.Assignment operator
// 3.Comparison operator
// 4. Conditional operator
// 5. Logical operator
// 6. unary operator
// 7. binary operator
// 8.ternary operatoe
// 9.string operator


// Arithmetic operator

{
    // let a = 5;
    // let b = 4;

    // console.log(a + b);
    // console.log(a - b);
    // console.log(a * b);
    // console.log(a / b);
    // console.log(a % b);
    // console.log(a + b);
    // console.log(a - b);
}


// Assignment operator
{
    let x = 4;
    let y = 8;
    let z;

    console.log(z = x += y); // x+=y = x = x + b;
    console.log(z = x -= y);
    console.log(z = x *= y);
    console.log(z = x /= y);
    console.log(z = x %= y);
    console.log(x ** y);

}

// comparison operator

{
    {
        // ==
        let a = ' janvi';
        let b = 'maya';
        console.log(a == b);
        
        let c =  '10';
        let d = 10;
        console.log(c == d)
    
        let e = 'janvi';
        let f = 'janvi';
        console.log( e == f);

        let g = 'janvi';
        let h = 'janvi';
        console.log(!(g == h));
    }

    {
        // !=

        let a = 'janvi';
        let b = 'janvi';
        console.log(a != b);
        
    }

    {
        // === (strict equality)

        let a = 'janvi';
        let b = 'maya';
        console.log(a === b);

        let c =  '10';
        let d = 10;
        console.log(c === d)
    
        let e = 'janvi';
        let f = 'janvi';
        console.log( e === f);

    }
    {
        // !==

        let c =  '10';
        let d = 10;
        console.log(c !== d)
    
        let e = 'janvi';
        let f = 'janvi';
        console.log( e !== f);

    }

    {
        //>

        let j = 5;
        let k = 7;
        console.log(j > k);
    }

    {
        // <
        let l = 5;
        let m = 7;
        console.log(l < m);

    }


}



