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

    console.log(true ?  a : b); //on
    console.log(false ? a : b); //off
}

