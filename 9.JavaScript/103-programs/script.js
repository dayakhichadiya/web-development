// 1) JavaScript Program To Print Hello World

{
    let text = 'hello world';
    console.log(text)
}


// 2) JavaScript Program to Add Two Numbers

{
    let num1 = 30;
    let num2 = 40;

    let sum = num1 + num2;
    console.log(sum);
}

// 3) JavaScript Program to Find the Square Root

{
    let num = 64;

    let result = Math.sqrt(num);
    console.log(result);
}

// 4) JavaScript Program to Calculate the Area of a Triangle

{
    let base = 5;
    let height = 8;

    let area = base * height / 2;
    console.log('area o triangle is', area);
}

// 5) JavaScript Program to Swap Two Variables

{
    let a = 5;
    let b = 10;

    let swap;

    swap = a;
    a = b;
    b = swap;

    console.log('a is', a);
    console.log('b is', b);
}

// 6) JavaScript Program to Solve Quadratic Equation



// 7) JavaScript Program to Convert Kilometres to Miles  39370

{
    let km = 5;
    let fact = 0.621371;

    let miles = km * fact;
    console.log(miles);
}

// 8) Javascript Program to Convert Celsius to Fahrenheit

{
    let celsius = 55;
    let fahrenheit = (celsius * 1.8) + 32;

    console.log(fahrenheit);
}

//9) Javascript Program to Generate a Random Number

{
    let num = Math.random();
    console.log(num);
}

// 10)Javascript Program to Check if a number is Positive, Negative, or Zero 

{
    let num1 = 0;

    if (num1 > 0) {
        console.log('number is positive');
    }
    else if (num1 < 0) {
        console.log('number is negative');
    }
    else {
        console.log('zero');
    }
}


// 11) Javascript Program to Check if a Number is Odd or Even 

{
    let num = 3;

    if (num % 2 == 0) {
        console.log('Number is even');
    }
    else {
        console.log('Number is odd');
    }
}


// 12)JavaScript Program to Find the Largest Among Three Numbers 

{
    let array = Math.max(40, 60, 20, 70);
    console.log(array);


    let num1 = 10;
    let num2 = 5;
    let num3 = 30;

    if (num1 >= num2 && num1 >= num3) {
        console.log(`largest number is ${num1}`)
    }
    else if (num2 >= num1 && num2 >= num3) {
        console.log(`largest number is ${num2}`)
    }
    else {
        console.log(`largest number is ${num3}`);
    }
}

// 13)JavaScript Program to Check Prime Number 

{
    let num = 7;
    let prime = true;

    if (num == 1) {
        console.log('1 is neither prime or composite number');
    }

    else if (num > 1) {

        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            console.log(`${num} is a prime number`)
        }
        else {
            console.log(`${num} is not a prime number`);
        }


    }
}

// 14)JavaScript Program to Print All Prime Numbers in an Interval

{
    let firstNum = 2;
    let lastNum = 10;

    for (let i = firstNum; i <= lastNum; i++) {
        let temp = 0;


        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                temp = 1;
                break;
            }
        }
        if (i > 1 && temp == 0)
            console.log(i)
    }
}


// 15)JavaScript Program to Find the Factorial of a Number

{
    let num = 6;
    let total = 1;

    if (num == 0) {
        console.log('negative number or zero does not exist')
    }
    else {
        for (let i = 1; i <= num; i++) {
            total *= i;
        }
    }
    console.log(total);
}

// 16)JavaScript Program to Display the Multiplication Table

{
    let tablenum = 5;

    for (let i = 1; i <= 10; i++) {
        console.log(tablenum, i, tablenum * i);
    }
}

// 17)JavaScript Program to Print the Fibonacci Sequence

{
    let num = 10;
    let n1 = 0, n2 = 1, nextnum;

    for (let i = 0; i <= num; i++) {
        console.log(n1); // 0
        nextnum = n1 + n2; // 0 + 1
        n1 = n2; // 0 = 1
        n2 = nextnum; //1+2 = 3
    }
}

// 18)JavaScript Program to Check Armstrong Number

{
    let sum = 0;
    let num = 153;

    let temp = num;
    while (temp > 0) {
        let remainder = temp % 10;

        sum += remainder + remainder + remainder;

        temp = parseInt(temp / 10);
    }

    if (sum == num) {
        console.log(` ${num} is armstrong number `)
    }
    else {
        console.log(`${num} is not an armstrong number`)
    }

}
// 19)JavaScript Program to Find Armstrong Number in an Interval
// 20)JavaScript Program to Make a Simple Calculator

{
    // const operator = prompt('Enter operator :');

    // const num1 = parseInt(prompt('enter first number :'));
    // const num2 = parseInt(prompt('enter second number :'));

    // let result;

    // switch (operator) {
    //     case '+':
    //         result = num1 + num2;
    //         console.log(`${num1} + ${num2} = ${result}`);
    //         break;

    //     case '-':
    //         result = num1 - num2;
    //         console.log(`${num1} - ${num2} = ${result}`);
    //         break;

    //     case '*':
    //         result = num1 * num2;
    //         console.log(`${num1} * ${num2} = ${result}`);
    //         break;

    //     case '/':
    //         result = num1 / num2;
    //         console.log(`${num1} / ${num2} = ${result}`);
    //         break;

}


// 21)JavaScript Program to Find the Sum of Natural Numbers

{
    // const num = parseFloat(prompt('enter the natural number'));
    // let sum = 0;

    // for(let i = 1; i <= num; i++){
    //     sum += i;
    // }
    // console.log('the sum of natural number is',sum);
}


// 22)JavaScript Program to Check if the Numbers Have Same Last Digit

{
    // const num1 = parseFloat(prompt('Enter first number'));
    // const num2 = parseFloat(prompt('Enter second number'));
    // const num3 = parseFloat(prompt('Enter third number'));
    
    // // let result1 = num1.length  

    // let result1 = num1 % 10;
    // let result2 = num2 % 10;
    // let result3 = num3 % 10;

    // if(result1 == result2 && result1 == result3){
    //     console.log(`${num1} , ${num2} and ${num3} has Last digit are same`);
    // }
    // else{
    //     console.log(`${num1} , ${num2} and ${num3} has Last digit are different`);
    // }

}
// 23)JavaScript Program to Find HCF or GCD


// 24)JavaScript Program to Find LCM
// 25)JavaScript Program to Find the Factors of a Number
// 26)JavaScript Program to Find Sum of Natural Numbers Using Recursion
// 27)JavaScript Program to Guess a Random Number
// 28)JavaScript Program to Shuffle Deck of Cards
// 29)JavaScript Program to Display Fibonacci Sequence Using Recursion
// 30)JavaScript Program to Find Factorial of Number Using Recursion
// 31)JavaScript Program to Convert Decimal to Binary
// 32)JavaScript Program to Find ASCII Value of Character
// 33)JavaScript Program to Check Whether a String is Palindrome or Not
// 34)JavaScript Program to Sort Words in Alphabetical Order
// 35)JavaScript Program to Replace Characters of a String
// 36)JavaScript Program to Reverse a String
// 37)JavaScript Program to Create Objects in Different Ways
// 38)JavaScript Program to Check the Number of Occurrences of a Character in
// the String
// 39)JavaScript Program to Convert the First Letter of a String into UpperCase
// 40)JavaScript Program to Count the Number of Vowels in a String
// 41)JavaScript Program to Remove a Property from an Object
// 42)JavaScript Program to Check Whether a String Starts and Ends With Certain
// Characters
// 43)JavaScript Program to Check if a Key Exists in an Object
// 44)JavaScript Program to Clone a JS Object
// 45)JavaScript Program to Loop Through an Object
// 46)JavaScript Program to Merge Property of Two Objects