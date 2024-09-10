// 1.Add two numbers input by the user

{
    let num1 = 10;
    let num2 = 5;

    let sum = num1 + num2;

    console.log('sum is', sum);
}

// 2.Calculate the area of a rectangle

{
    let width = 6;
    let height = 4;

    let total = width * height;

    console.log('area of rectangle is', total)
}

// 3.Convert temperature from Celsius to Fahrenheit

{
    let celsius = 55;

    let fahrenheit = (celsius * 1.8) + 32;

    console.log('the fahrenheit temperature is ', fahrenheit)
}


// {
//     let celsius = prompt ("Enter a celsius value: ");

//     let fahrenheit = (celsius * 1.8) + 32;

//     console.log(`${celsius} celsius is ${fahrenheit} degree`);
// }

// 4.Find the remainder when one number is divided by another


{
    let num = 22;

    console.log(num % 3);


}

// 5.Calculate the power of a number

{
    let num = 2;
    let power = 4;

    let total = 1;
    for (let i = 0; i < power; i++) {
        total = total * num;
    }
    console.log(total);
}

// 6.Combination of Arithmetic Operators

{
    let a = 6;
    let b = 5;

    console.log(a + b);
    console.log(a * b);
    console.log(a - b);
    console.log(a % b);
    console.log(a / b);
}

// 7.Comparing Numbers [5 number]

{
    let a = 6;
    let b = 5;
    let c = 6;

    console.log(a == b); // false
    console.log(a == c); // true
    console.log(a === c); // true
    console.log(a !== b); //true
    console.log(a > b); // true
    console.log(a < c); // false
}

// 8.Comparing Strings [5 String]

{
    {
        let str1 = 'skill';
        let str2 = 'skill';

        if (str1 == str2) {
            console.log("Strings are equal");
        } else {
            console.log("Strings are not equal");
        }
    }

    {
        let str3 = 'skill';
        let str4 = 'skill';

        if(str3 !== str4){
            console.log('strings are equal');
        }
        else{
            console.log('strings are not equal')
        }
    }

    {
        let str5 = 'hello';
        let str6 = 'hello';

        if(str5 === str6){
            console.log('strings are equal');
        }
        else{
            console.log('strings are not equal')
        }
    }
}

// 9.Comparing Different Types [4 types]

{
    {
        let str = 'hello';
        let x = false;

        if (str == x){
            console.log('data types are same');
        }
        else{
            console.log('datatypes are different');
        }
    }

    {
        let str = '2';
        let x = 'hello';

        if (str !== x){
            console.log('data types are same');
        }
        else{
            console.log('datatypes are different');
        }
        console.log(typeof str);
    }

    {
        let str = 12;
        let x = '12';

        if (str == x){
            console.log('data types are same');
        }
        else{
            console.log('datatypes are different');
        }
        console.log(typeof x);
    }
    {
        let str = true;
        let x = 'hello';

        if (str === x){
            console.log('data types are same');
        }
        else{
            console.log('datatypes are different');
        }
        console.log(typeof str);
    }

}
// 10. Using Multiple Operators [4 types]

{
    let val1 = 5;
    let val2 = 4;

    console.log(val1 >= val2);
    console.log(val1 == val2);
    console.log(val1 += val2);
    console.log(val1 != val2);
    console.log(val1 && val2);      
    console.log(val1 ** 2);      
}

// 11.Complex Assignments[2 types]
