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
    let factorial = 1;


    if (num == 0) {
        console.log(`the factorial of ${num} is 1`);
    } else {
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
    let string = 'hello';
    let rev = '';

    for(let i = string.length - 1; i>=0; i--){
        rev += string[i];
    }
    console.log(rev);
  
}


// 6. Write a program that calculates the sum of all elements in an array.
    
{
    let array = [2, 4, 6,];
    let total = 0;

    for(let i=0; i<array.length; i++){
        total += array[i];
    }
    console.log(total);
}


// 7. Write a program that finds the largest number in an array.
{
    let array = [40, 20, 94, 12, 100, 44];
    let largest = array[0];
    
    for(let i = 0; i < array.length; i++){
        if(array[i] > largest){
             largest = array[i];
        }
    }
    console.log('the largest number is ', largest);
}


// 8. Write a program that counts the number of vowels in a given string.

{
    let count = 0;
    let string = 'skill';
    
    for(let i = 0; i < string.length; i++ ){
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
            count++;
        }
    }
    console.log('number of vowels is',count);
}