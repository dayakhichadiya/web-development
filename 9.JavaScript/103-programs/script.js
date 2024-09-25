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
    console.log('area o triangle is',area);
}

// 5) JavaScript Program to Swap Two Variables

{
    let a = 5;
    let b = 10;

    let swap ;

    swap = a;
    a = b;
    b = swap;

    console.log('a is',a);
    console.log('b is',b);
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
// 10)Javascript Program to Check if a number is Positive, Negative, or Zero
// 11) Javascript Program to Check if a Number is Odd or Even
// 12)JavaScript Program to Find the Largest Among Three Numbers
// 13)JavaScript Program to Check Prime Number


// 14)JavaScript Program to Print All Prime Numbers in an Interval



// 15)JavaScript Program to Find the Factorial of a Number

{
    let num = 6;
    let total = 1;

    if(num == 0){
        console.log('negative number or zero does not exist')
    }
    else {
        for(let i = 1; i <= num; i++){
            total *= i;
        }
    }
    console.log(total);
}

// 16)JavaScript Program to Display the Multiplication Table

{
    let tablenum = 5;
    
    for (let i = 1; i <= 10; i++){
        console.log(tablenum, i, tablenum * i);
    }
}

// 17)JavaScript Program to Print the Fibonacci Sequence

{
    let num = 10;
    let n1 = 0, n2 = 1, nextnum;

    for(let i = 0; i <= num; i++){
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
    while (temp > 0){
        let remainder = temp % 10;

        sum += remainder + remainder + remainder;
        
        temp = parseInt(temp / 10);
    }

    if(sum == num){
        console.log(` ${num} is number is armstrong number `)
    }
    else{
        console.log(`${num} is not an armstrong number`)
    }

}
// 19)JavaScript Program to Find Armstrong Number in an Interval
// 20)JavaScript Program to Make a Simple Calculator
// 21)JavaScript Program to Find the Sum of Natural Numbers
// 22)JavaScript Program to Check if the Numbers Have Same Last Digit
// 23)JavaScript Program to Find HCF or GCD