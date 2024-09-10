// Loop & Conditional statements excercise

// 1. Write a program that calculates the sum of all numbers from 1 to 100.

{
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

// 2. Write a program that prints the multiplication table of a given number (for example, 5).

{
    let num = 5;

    for (let i = 1; i <= 10; i++) {
        console.log(num, i, num * i);
    }
}

// 3. Write a program that calculates the factorial of a given number (for example, 5!) [-- 5*4*3*2*1]

{
    let num = 5;

    if (num == 0) {
        console.log(`the factorial of ${num} is 1`);
    } else {
        let factorial = 1;
        for (i = 1; i <= num; i++) {
            factorial *= i; 
        }
        console.log(`The factorial of ${num} is ${factorial}.`);
    }
}

// 4. Write a program that prints the first 10 numbers in the Fibonacci sequence

{
    let num = 10;
    let n1 = 0, n2 = 1, nextnum;

    for( let i=1; i<=num; i++){
        console.log(n1); // 0
        nextnum = n1 + n2; // 0+ 1
        n1 = n2; // 0 = 1;
        n2 = nextnum; //1 + 2 =3
    }
}

// 5. Write a program that reverses a given string.

{
    //  let array= [20];

    //  let str1 = 0;
    //  let str2 = 0;

    // //  let newstr = 'hello';
    // let newstr = prompt("enter a string");
     
    //  for(str1 = 0; array[str1]!='\0';str1++){
    //  }
    //  for(str2 = str1; str2 >= 0; str2--){
    //     console.log(array[str2]);
    //  }


}
// 6. Write a program that calculates the sum of all elements in an array.

{
    let array = [2, 4, 6,];
    let total = 0;

    for(let i=0; i<array; i++){
        total += array[i];
    }
    console.log(array[i]);
}
// 7. Write a program that finds the largest number in an array.


// 8. Write a program that counts the number of vowels in a given string.