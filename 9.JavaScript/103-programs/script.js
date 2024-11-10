// import the variables and function from module.js
// import { message, number, multiplyNumbers } from './modules.js';

// console.log(message); // hello world

// console.log(number); // 10

// console.log(multiplyNumbers(3, 4)); // 12
// console.log(multiplyNumbers(5, 8)); // 40
// import { message, number, multiplyNumbers } from './modules.js';
// 1) JavaScript Program To Print Hello World

{
    // let text = 'hello world';
    // console.log(text)
}


// 2) JavaScript Program to Add Two Numbers

{
    // let num1 = 30;
    // let num2 = 40;

    // let sum = num1 + num2;
    // console.log(sum);
}

// 3) JavaScript Program to Find the Square Root

{
    // let num = 64;

    // let result = Math.sqrt(num);
    // console.log(result);
}

// 4) JavaScript Program to Calculate the Area of a Triangle

{
    // let base = 5;
    // let height = 8;

    // let area = base * height / 2;
    // console.log('area o triangle is', area);
}

// 5) JavaScript Program to Swap Two Variables

{
    // let a = 5;
    // let b = 10;

    // let swap;

    // swap = a;
    // a = b;
    // b = swap;

    // console.log('a is', a);
    // console.log('b is', b);
}

// 6) JavaScript Program to Solve Quadratic Equation



// 7) JavaScript Program to Convert Kilometres to Miles  39370

{
    // let km = 5;
    // let fact = 0.621371;

    // let miles = km * fact;
    // console.log(miles);
}

// 8) Javascript Program to Convert Celsius to Fahrenheit

// {
//     let celsius = 55;
//     let fahrenheit = (celsius * 1.8) + 32;

//     console.log(fahrenheit);
// }

//9) Javascript Program to Generate a Random Number

{
    // let num = Math.random();
    // console.log(num);
}

// 10)Javascript Program to Check if a number is Positive, Negative, or Zero 

{
    // let num1 = 0;

    // if (num1 > 0) {
    //     console.log('number is positive');
    // }
    // else if (num1 < 0) {
    //     console.log('number is negative');
    // }
    // else {
    //     console.log('zero');
    // }
}


// 11) Javascript Program to Check if a Number is Odd or Even 

{
    //     let num = 3;

    //     if (num % 2 == 0) {
    //         console.log('Number is even');
    //     }
    //     else {
    //         console.log('Number is odd');
    //     }
}


// 12)JavaScript Program to Find the Largest Among Three Numbers 

{
    // let array = Math.max(40, 60, 20, 70);
    // console.log(array);


    // let num1 = 10;
    // let num2 = 5;
    // let num3 = 30;

    // if (num1 >= num2 && num1 >= num3) {
    //     console.log(`largest number is ${num1}`)
    // }
    // else if (num2 >= num1 && num2 >= num3) {
    //     console.log(`largest number is ${num2}`)
    // }
    // else {
    //     console.log(`largest number is ${num3}`);
    // }
}

// 13)JavaScript Program to Check Prime Number 

{
    // let num = 7;
    // let prime = true;

    // if (num == 1) {
    //     console.log('1 is neither prime or composite number');
    // }

    // else if (num > 1) {

    //     for (let i = 2; i <= num / 2; i++) {
    //         if (num % i == 0) {
    //             prime = false;
    //             break;
    //         }
    //     }

    //     if (prime) {
    //         console.log(`${num} is a prime number`)
    //     }
    //     else {
    //         console.log(`${num} is not a prime number`);
    //     }


    // }
}

// 14)JavaScript Program to Print All Prime Numbers in an Interval

{
    // let firstNum = 2;
    // let lastNum = 10;

    // for (let i = firstNum; i <= lastNum; i++) {
    //     let temp = 0;


    //     for (let j = 2; j < i; j++) {
    //         if (i % j == 0) {
    //             temp = 1;
    //             break;
    //         }
    //     }
    //     if (i > 1 && temp == 0)
    //         console.log(i)
    // }
}


// 15)JavaScript Program to Find the Factorial of a Number

{
    // let num = 6;
    // let total = 1;

    // if (num == 0) {
    //     console.log('negative number or zero does not exist')
    // }
    // else {
    //     for (let i = 1; i <= num; i++) {
    //         total *= i;
    //     }
    // }
    // console.log(total);
}

// 16)JavaScript Program to Display the Multiplication Table

{
    // let tablenum = 5;

    // for (let i = 1; i <= 10; i++) {
    //     console.log(tablenum, i, tablenum * i);
    // }
}

// 17)JavaScript Program to Print the Fibonacci Sequence

// {
//     let num = 10;
//     let n1 = 0, n2 = 1, nextnum;

//     for (let i = 0; i <= num; i++) {
//         console.log(n1); // 0
//         nextnum = n1 + n2; // 0 + 1
//         n1 = n2; // 0 = 1
//         n2 = nextnum; //1+2 = 3
//     }
// }

// 18)JavaScript Program to Check Armstrong Number

{
    // let sum = 0;
    // let num = 153;

    // let temp = num;
    // while (temp > 0) {
    //     let remainder = temp % 10;

    //     sum += remainder + remainder + remainder;

    //     temp = parseInt(temp / 10);
    // }

    // if (sum == num) {
    //     console.log(` ${num} is armstrong number `)
    // }
    // else {
    //     console.log(`${num} is not an armstrong number`)
    // }

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
{
    // const num1 = prompt('Enter the firdt number :')
    // const num2 = prompt('Enter the second number :')

    // let min = (num1 > num2) ? num1:num2;

    // while(true){
    //     if(min % num1 == 0 && min % num2 == 0){
    //         console.log(`the LCM is ${min}`);
    //         break;
    //     }
    //     min++;
    // }
}
// 25)JavaScript Program to Find the Factors of a Number

{
    // let num = 12;

    // for (let i = 1; i <= num; i++) {
    //     if (num % i == 0) {
    //         console.log(i);
    //     }
    // }
}
// 26)JavaScript Program to Find Sum of Natural Numbers Using Recursion

// {
//     function sum(num) {
//         if (num > 0) {
//             return num + sum(num - 1);
//         }
//         else {
//             return num;
//         }
//     }
// }
// const number = parseInt(prompt('enter a positive integer: '));
// const result = sum(number);
// console.log(`The sum is ${result}`);
// 27)JavaScript Program to Guess a Random Number

// {
//     const random = Math.floor(Math.random() *50 )+1;

//     let num = parseInt(40);
//     // while(num !== random ){
//     //     num = parseInt(console.log(`${num}`))
//     // }

//     if(num == random){
//         console.log("you Guess correct number");
//     }
// }

// 28)JavaScript Program to Shuffle Deck of Cards
// 29)JavaScript Program to Display Fibonacci Sequence Using Recursion
{
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}
}
// 30)JavaScript Program to Find Factorial of Number Using Recursion
// program to find the factorial of a number 
// {
//     function factorial(n) {
//         if (n == 0) {
//             return 1;
//         }
//         else {
//             return n * factorial(n - 1);
//         }
//     }
//     const num = prompt('Enter a positive number: ');
//     if (num >= 0) {
//         const result = factorial(num);
//         console.log(`The factorial of ${num} is ${result}`);
//     }
//     else {
//         console.log('Enter a positive number.');
//     }
// }
// 31)JavaScript Program to Convert Decimal to Binary

{
    // function decimalnum(value) {
    //     return value.toString(2);
    // }
    // let num = 5;
    // let result = decimalnum(num);
    // console.log(result)
}
// 32)JavaScript Program to Find ASCII Value of Character

{
    // let char = prompt("Enter the character :");

    // let result = char.charCodeAt();
    // console.log(`The ASCII value of ${char} is`,result);
}
// 33)JavaScript Program to Check Whether a String is Palindrome or Not

{
    // function check(){

    //     const len = String.length;

    //     for(let i = 0; i < len / 2; i++){
    //         if(String[i] !== String[len - 1 - i])
    //             return 'String is not a palindrome'
    //     }
    //     return 'String is palindrome';
    // }
    // const String = prompt("Enter a string");
    // const result = check(String);
    // console.log(result)
}
// 34)JavaScript Program to Sort Words in Alphabetical Order

{
    // const string = prompt('Enter a sentence: ');
    // const words = string.split(' ');
    // words.sort();

    // console.log('The sorted words are:');

    // for (const element of words) {
    //     console.log(element);
    // }
}
// 35)JavaScript Program to Replace Characters of a String

{
    // let str = "My cat name is grove and dog name is jacky"

    // let newstr = str.replace('grove', 'kitty');
    // console.log(newstr);
}
// 36)JavaScript Program to Reverse a String

{
    // function reverse(str) {

    //     let newstr = '';

    //     for (let i = str.length - 1; i >= 0; i--) {
    //         newstr += str[i];
    //     }
    //     return newstr;
    // }
    // let result = reverse('skill');
    // console.log(result)
}

// 37)JavaScript Program to Create Objects in Different Ways

{
    // {
    //     const person = {
    //         name: 'John',
    //         age: 20,
    //         hobbies: ['reading', 'games', 'coding'],
    //         greet: function () {
    //             console.log('Hello everyone.');
    //         },
    //         score: {
    //             maths: 90,
    //             science: 80
    //         }
    //     };
    //     console.log(typeof person);
    //     console.log(person.name);
    //     console.log(person.hobbies[0]);
    //     person.greet();
    // }


    // const person = new Object({
    //     name: 'gita',
    //     age: 20,
    //     greet: function () {
    //         console.log('Hello everyone.');
    //     },
    //     score: {
    //         maths: 90,
    //         science: 80
    //     }
    // });

    // console.log(typeof person);
    // console.log(person.name);
    // person.greet()
}
// 38)JavaScript Program to Check the Number of Occurrences of a Character in the String
{
    // function count(str, letter) {
    //     let count = 0;

    //     for (let i = 0; i < str.length; i++) {

    //         if (str.charAt(i) == letter) {
    //             count += 1;
    //         }
    //     }
    //     return count;
    // }

    // const string = prompt('Enter a string: ');
    // const letterCheck = prompt('Enter a letter to check: ');

    // const result = count(string, letterCheck);

    // console.log(result);
}

// 39)JavaScript Program to Convert the First Letter of a String into UpperCase

{
    //     let str = "roman"
    //     let capital = str.charAt(0).toUpperCase() + str.slice(1);
    //     console.log(capital)
}
// 40)JavaScript Program to Count the Number of Vowels in a String

{
    // let str = 'Asia';

    // let count = str.match(/[aAeEiIoOuU]/gi).length;
    // console.log(count)
}

// 41)JavaScript Program to Remove a Property from an Object

{
    // const employe = {
    //     name: 'Ruta',
    //     age: 23,
    //     hobbies: 'reading',
    //     greet: function () {
    //         console.log('Introduction')
    //     },
    //     marks: {
    //         maths: 50,
    //         english: 60,
    //     }
    // }
    // delete employe.greet;
    // console.log(employe)
}

// 42)JavaScript Program to Check Whether a String Starts and Ends With Certain Characters

{
    // let str = "Flying";
    // let startIndex = "F";
    // let endIndex = "g";

    // const startcheck = str.charAt(0) === startIndex;

    // const endcheck = str.charAt(str.length - 1) === endIndex;

    // if (startcheck && endcheck) {
    //     console.log('true');
    // }
    // else {
    //     console.log('false');
    // }

}
// 43)JavaScript Program to Check if a Key Exists in an Object

{
    // const employe = {
    //     name: 'Ruta',
    //     age: 23,
    //     hobbies: 'reading',
    // }

    // let result = employe.hasOwnProperty('age')
    // console.log(result);
}

// 44)JavaScript Program to Clone a JS Object

// 45)JavaScript Program to Loop Through an Object

{
    // const employe = {
    //     name: 'sita',
    //     age: 23,
    //     hobbies: 'reading',
    // }
    // for (let key in employe) {
    //     let value;
    //     value = employe[key];

    //     console.log(key + ":" + value)
    // }
}

// 46)JavaScript Program to Merge Property of Two Objects

{
    // const obj1 = {
    //     name: 'sia',
    //     age: 27
    // }

    // const obj2 = {
    //     gender: 'female',
    // }

    // const newObj = Object.assign(obj1, obj2);
    // console.log(newObj)
}

// 47)JavaScript Program to Count the Number of Keys/Properties in an Object

{
    // const obj1 = {
    //     name: 'sia',
    //     age: 27,
    //     gender: 'female',
    //     hobbies: 'reading'
    // }

    // let count = 0;

    // for (let key in obj1) {
    //     ++count;
    // }
    // console.log(count);

}
// 48)JavaScript Program to Add Key/Value Pair to an Object

{
    // const obj = {
    //     name: 'sia',
    //     gender: 'female',
    //     hobbies: 'reading'
    // }

    // obj.age = 24;
    // console.log(obj)
}

// 49)JavaScript Program to Replace All Occurrences of a String

{
    // const str = 'My cat is very smart but my cat is also dangerous ';

    // const regex = /cat/gi;

    // const newstr = str.replace(regex, 'dog');
    // console.log(newstr)
}
// 50)JavaScript Program to Create Multiline Strings

{
    // const str = 'This is string method \n' +
    //     'String method in javascript\n' +
    //     'Multiline String method';

    // console.log(str);
}

// 51)JavaScript Program to Format Numbers as Currency Strings

{
    // const num = 124.5678;

    // const result = '$' + num.toFixed(2);
    // console.log(result)
}
// 52)JavaScript Program to Generate Random String

// 53)JavaScript Program to Check if a String Starts With Another String

{
    // const str = 'Hello world'
    // const check = 'hel';

    // if (str.startsWith(check)) {
    //     console.log('string starts with "hel"')
    // }
    // else {
    //     console.log('the string is not starts with "hell"')
    // }
}

// 54)JavaScript Program to Trim a String

{
    // let string = "      Javascript string Method    ";

    // let result = string.trim();
    // console.log(result)
}

// 55)JavaScript Program to Convert Objects to Strings

{
    // const profile = {
    //     name: "Riya",
    //     age: 23
    // }
    // const result = JSON.stringify(profile)
    // console.log(result);
}

// 56)JavaScript Program to Check Whether a String Contains a Substring

{
    // let str = "Javascript string method"
    // let checkstr = "string";

    // if (str.includes(checkstr)) {
    //     console.log(`the string contains ${checkstr}`);
    // } else {
    //     console.log(`the string does not contains ${checkstr} `)
    // }
}
// 57)JavaScript Program to Compare Two Strings

{
    // function compare(str1, str2) {
    //     if (str1.toUpperCase() === str2.toUpperCase()) {
    //         console.log("the strings are equlas")
    //     }
    //     else {
    //         console.log("strings are not equal")
    //     }
    // }
    // compare("skill", "Skill")
}
// 58)JavaScript Program to Encode a String to Base64

// 59)JavaScript Program to Replace all Instances of a Character in a String

{
    // let str = "My cat is very smart but my cat is also dangerous";

    // let regex = /cat/gi;
    // let newstr = str.replace(regex, 'dog');
    // console.log(newstr);
}
// 60)JavaScript Program to Replace All Line Breaks with

// 61)JavaScript Program to Display Date and Time

{
    // const date = new Date();
    // const d = date.toDateString()
    // console.log('Date :', d);

    // const time = date.toLocaleDateString()
    // console.log('Time :', time);
}
// 62)JavaScript Program to Check Leap Year

{
    // const year = 2024;

    // if ((year % 100 == 0 || year % 400 == 0 || year % 4 == 0)) {
    //     console.log(`${year} is a leap year`);
    // }
    // else {
    //     console.log(`${year} is not a leap year`);
    // }
}

// 63)JavaScript Program to Format the Date

{
    // let currentDate = new Date();
    // let day = currentDate.getDate();
    // let month = currentDate.getMonth() + 1;
    // let year = currentDate.getFullYear();

    // const formattedDate1 = month + '/' + day + '/' + year;
    // console.log(formattedDate1);

    // const formattedDate2 = month + '-' + day + '-' + year;
    // console.log(formattedDate2);

    // const formattedDate3 = day + '-' + month + '-' + year;
    // console.log(formattedDate3);

    // const formattedDate4 = day + '/' + month + '/' + year;
    // console.log(formattedDate4);
}

// 64)Javascript Program to Display Current Date

{
    // const date = new Date();
    // const d = date.toDateString();
    // console.log("Date :", d)
}

// 65)JavaScript Program to Compare The Value of Two Dates

// 66)JavaScript Program to Create Countdown Timer

{

}
// 67)JavaScript Program to Remove Specific Item From an Array

{
    // let array = [1, 2, 3, 4, 5, 6]

    // let result = array.pop();
    // console.log("deleted element is", result);
    // console.log("remaining element is ", array);
}

// 68)JavaScript Program to Check if An Array Contains a Specified Value

{
    // const array = ["javascript", "array", "method"]
    // const result = array.includes("array");

    // if (result) {
    //     console.log("Array contains a value")
    // }
    // else {
    //     console.log("array does not contain a value")
    // }


}

// 69)JavaScript Program to Insert Item in an Array

{
    // const arr = [1, 2, 4, 5, 6]
    // const index = 2;
    // const element = 7;

    // arr.splice(index, 0, element);
    // console.log(arr);
}
// 70)JavaScript Program to Append an Object to an Array

{
    // function add(arr, obj) {
    //     arr.push(obj);
    //     console.log(arr);
    // }
    // let array = [1, 2, 3];
    // let object = { x: 12, y: 8 };
    // add(array, object);
}
// 71)JavaScript Program to Check if An Object is An Array
{
    // function checkObject(arr) {
    //     const result = Array.isArray(arr);
    //     if (result) {
    //         console.log(`[${arr}] is an array.`);
    //     }
    //     else {
    //         console.log(`${arr} is not an array.`);
    //     }
    // }
    // const array = [1, 2, 3];
    // checkObject(array);
}
// 72)JavaScript Program to Empty an Array

{
    // function emptyArray(arr) {
    //     arr = [];
    //     return arr;
    // }
    // const array = [1, 2, 3, 4];
    // console.log(array);
    // const result = emptyArray(array);
    // console.log(result);

}
// 73)JavaScript Program to Add Element to Start of an Array

{
    // let array = [10, 20, 30, 40]
    // array.unshift(60);

    // console.log(array)
}

// 74)JavaScript Program to Remove Duplicates From Array

{
    //     let arr = [1, 2, 2, 3, 3, 4, 5]

    //     let newarr = [new Set(arr)];
    //     console.log(newarr)
}
// 75)JavaScript Program to Merge Two Arrays and Remove Duplicate Items
{
    // let arr1 = [1, 2, 3, 4, 5]
    // let arr2 = [4, 5, 6, 7]

    // let result = [...arr1, ...arr2];
    // let mergearray = [...new Set(result)];
    // console.log(mergearray)
}
// 76)JavaScript Program to Sort Array of Objects by Property Values
//     / program to sort array by property name
// function compareName(a, b) {
//     // converting to uppercase to have case-insensitive comparison    const name1 = a.name.toUpperCase();
//     const name2 = b.name.toUpperCase();
//     let comparison = 0;
//     if (name1 > name2) {        comparison = 1;
//     } else if (name1 < name2) {        comparison = -1;
//     }    return comparison;
// }
// const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];
// console.log(students.sort(compareName));

// 77)JavaScript Program to Create Two Dimensional Array

{
    // // program to sort array by property name
    // function compareAge(a, b) {
    //     return a.age - b.age;
    // }
    // const students = [{ name: 'Sara', age: 24 }, { name: 'John', age: 22 }, { name: 'Jack', age: 27 }];
    // console.log(students.sort(compareAge));
}
// 78)JavaScript Program to Extract Given Property Values from Objects as Array

// function twoDimensionArray(a, b) {
//     let arr = [];
//     for (let i = 0; i < a; i++) {
//         for (let j = 0; j < b; j++) {
//             arr[i] = [];
//         }
//     }
//    for (let i = 0; i< a; i++) {
//     for (let j = 0; j < b; j++) {
//         arr[i][j] = j;
//     }
// }
// return arr;
// const x = 2;
// const y = 3;
// const result = twoDimensionArray(x, y); console.log(result);
// }


// 79)JavaScript Program to Compare Elements of Two Arrays
{
    // function compareArrays(arr1, arr2) {

    //     const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    //     if(result) {
    //         console.log('The arrays have the same elements.');
    //     }
    //     else {
    //         console.log('The arrays have different elements.');
    //     }

    // }

    // const array1 = [1, 3, 5, 8];
    // const array2 = [1, 3, 5, 8];

    // compareArrays(array1, array2);
}

// 80)JavaScript Program to Get Random Item From an Array
{
    // function getRandomItem(arr) {

    //     const randomIndex = Math.floor(Math.random() * arr.length);
    //     const item = arr[randomIndex];

    //     return item;
    // }

    // const array = [1, 'hello', 5, 8];

    // const result = getRandomItem(array);
    // console.log(result);
}
// 81)JavaScript Program To Perform Intersection Between Two Arrays
{

    // function performIntersection(arr1, arr2) {

    //     const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);

    //     return intersectionResult;

    // }

    // const array1 = [1, 2, 3, 5, 9];
    // const array2 = [1, 3, 5, 8];

    // const result = performIntersection(array1, array2);
    // console.log(result);
}
// 82)JavaScript Program to Split Array into Smaller Chunks
{

    // function splitIntoChunk(arr, chunk) {

    //     for (i=0; i < arr.length; i += chunk) {

    //         let tempArray;
    //         tempArray = arr.slice(i, i + chunk);
    //         console.log(tempArray);
    //     }

    // }

    // const array = [1, 2, 3, 4, 5, 6, 7, 8];
    // const chunk = 2;
    // splitIntoChunk(array, chunk);
}
// 83)JavaScript Program to Include a JS file in Another JS file

{
    // program to include JS file into another JS file

    // const message = 'hello world';

    // const number = 10;

    // function multiplyNumbers(a, b) {
    //     return a * b;
    // }

    // // exporting variables and function
    // export { message, number, multiplyNumbers };
}
// 84)JavaScript Program to Get File Extension
{

// function getFileExtension(filename){

//     const extension = filename.split('.').pop();
//     return extension;
// }

// const result1 = getFileExtension('module.js');
// console.log(result1);

// const result2 = getFileExtension('module.txt');
// console.log(result2);

}
// 85)JavaScript Program To Check If A Variable Is undefined or null

{
    // function check(variable) {
    //     if (variable == null) {
    //         console.log("the variable is undefined or NULL")
    //     } else {
    //         console.log("the variable is not undefined or not a null")
    //     }
    // }
    // let nullvar;
    // check(nullvar);
    // check(5)
}
// 86)JavaScript Program to Set a Default Parameter Value For a Function
{

// function sum(x = 3, y = 5) {

//     // return sum
//     return x + y;
// }

// console.log(sum(5, 15));
// console.log(sum(7));
// console.log(sum());
}
// 87)JavaScript Program to Illustrate Different Set Operations
{
// function union(a, b) {
//     let unionSet = new Set(a);
//     for (let i of b) {
//         unionSet.add(i);
//     }
//     return unionSet
// }

// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['grapes', 'apple', 'banana']);

// const result = union(setA, setB);

// console.log(result);
}

// 88)Javascript Program to Generate a Random Number Between Two Numbers

{

// const min = parseInt(prompt("Enter a min value: "));
// const max = parseInt(prompt("Enter a max value: "));

// const a = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(`Random value between ${min} and ${max} is ${a}`);

}
// 89)JavaScript Program To Get The Current URL
{
    // document.getElementById("demo").innerHTML = 
    // "The full URL of this page is:<br>" + window.location.href;
}

// 90)JavaScript Program to Validate An Email Address
{
    // let email = "daya09@gmail.com"
    // let check = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // const valid = check.test(email);
    // console.log(valid)
}

// 91)JavaScript Program to Check If a Variable is of Function Type

{
    // function check(variable) {

    //     if (typeof variable === 'function') {
    //         console.log("Variable is of function type");
    //     }
    //     else {
    //         console.log("variable is not of function type")
    //     }
    // }

    // const count = true;
    // const a = function () {
    //     console.log('hello!!!')
    // }
    // check(count)
    // check(a)
}
// 92)JavaScript Program To Work With Constants

{
    // const num = [1, 2, 3, 4, 5, 6]
    // console.log(num);
}
// 93)JavaScript Program to Pass Parameter to a setTimeout() Function

{
    // function intro(){
    //     console.log("hello, My name is avsx")
    // }
    // setTimeout(intro, 3000);
    // console.log("The first message")
}


// 94)JavaScript Program to Generate a Range of Numbers and Characters

{
    // function generatenum(num1, num2) {
    //     const result = [];

    //     for (let i in [...Array(num2 - num1 + 1)]) {
    //         result.push(Number(i) + num1);
    //     }
    //     return result;
    // }
    // const result = generatenum(1, 4);
    // console.log(result)

}
// 95)JavaScript Program to Perform Function Overloading

{
    // function sum() {
    //     if(arguments.length == 0){
    //         console.log('you have not passed any arguments');
    //     }
    //     else if(arguments.length == 1){
    //         console.log('pass atleast two argument')
    //     }

    //     else{
    //         let result = 0;
    //         let length = arguments.length;

    //         for(i = 0; i < length; i++){
    //             result = result + arguments[i]
    //         }
    //         console.log(result)
    //     }
    // }

    // sum();
    // sum(2);
    // sum(4, 5);
    // sum(2, 7, 9, 3, 5, 3)
}
// 96)JavaScript Program to Implement a Stack
// 97)JavaScript Program to Implement a Queue
// 98)JavaScript Program to Check if a Number is Float or Integer
{
    //     let num = 45.89;
    //     let result = Number.isInteger(num);

    //     console.log('number is integer')    


}
// 99)JavaScript Program to Pass a Function as Parameter

{
    // function intro() {
    //     return 'hello';
    // }
    // function name(user, func) {
    //     const name = func();
    //     console.log(`${name} ${user}`);
    // }
    // name('sia', intro);
    // name('riya', intro);
}
// 100) JavaScript Program to Get the Dimensions of an Image

{
    // const img = new Image();

    // img.src = 'https://www.shutterstock.com/shutterstock/photos/2479191623/display_1500/stock-photo-high-rise-buildings-in-office-area-2479191623.jpg'

    // img.onload = function(){
    //     console.log('width', this.width)
    //     console.log('height', this.height)
    // }

}
// 101) JavaScript Program to Remove All Whitespaces From a Text
{
    // let str = '   this is trim method in javascript    '
    // console.log(str.length);// 40

    // let Trim = str.trim();
    // console.log(Trim);
    // console.log(Trim.length);// now length is 33

}
// 102) JavaScript Program to Write to Console

{
    // let num = 58;
    // console.log(num)

    // console.log("Write to console")
}
// 103) JavaScript Program to Convert Date to Number

{
    // let date = new Date();
    // console.log(date);

    // let result = date.getTime();
    // console.log(result)
}