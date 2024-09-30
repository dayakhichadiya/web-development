

{
    let demo = function () {
        return console.log('function body')
    }
    demo();

}

// Constructor function 

// new Function(functionBody);
// new Function(arg1, functionBody);
// new Function(arg1, arg2, functionBody);
// new Function(arg1, arg2, /* …, */ argN, functionBody);

// Function(functionBody);
// Function(arg1, functionBody);
// Function(arg1, arg2, functionBody);
// Function(arg1, arg2, /* …, */ argN, functionBody);

{
    let constructor = new Function('a', 'b', `return console.log("Constructor Function")`)
    constructor()
}

// Javascript Regular Expression 

{
    let regex1= /[y]/
    let regex2 = /[0-9]{2 , 4}/gm

    let result = regex1.test('heyy!!!')
    console.log(result); // true

    let result2 = regex2.test('0123')

    let regex3 = /in+g/
    let result3 = regex3.test('flying');
    console.log(result3); // true

    let regex4 = /9$/  // [ ends with 9]
    let result4 = regex4.test('389');
    console.log(result4) // true 
}







// Username Validation

const validUsername = /^[A-Za-z]{6,16}$/;
console.log(validUsername.test('')) // valid

const validname = /^Daya Khichadiya$/;
console.log(validname.test('Daya Khichadiya'))

// call validation

// const validnum = /^\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-$/;
// console.log(validnum.test('+919429005835'))

// const regex1 = /^(\+?[0-9]{1,4}[-.\s]?)?([0-9]{10})$/;
// console.log(regex1.test('+91 9429005835')); // true

// const phoneregex = /^[0-9\s-]+$/;
// console.log(phoneregex.test('9429004390'));

// const regex = /^\+?[0-9]{1,4}[-.\s]?([0-9\s-]{1,})(?!.*0{5,})$/;
// console.log(regex.test('+92 23390202930239'))

const regex = /^\+?[0-9]{1,4}[-.\s]?([0-9\s-]{1,10})(?!.*0{5,})$/;
console.log(regex.test('+91 9429000000'))


// Optional Country Code (^\+?[0-9]{1,4}[-.\s]?):

// + followed by 1 to 4 digits for the country code.
// Phone Number Validation (([0-9\s-]{1,12})):

// maximum of 10 digits, excluding separators like spaces or dashes.
// Disallow Consecutive Zeros ((?!.*0{5,})):

// The negative lookahead ensures that the phone number does not contain five or more consecutive zeros.
// Total Digit Count (Excluding Country Code):

// The script also ensures that the number of digits (excluding the country code) does not exceed 12. The digitsOnly variable removes non-digit characters (spaces, hyphens), and digitsWithoutCountryCode further removes the country code to validate only the remaining digits.


// Email validation

const emailregex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailregex.test('sq.daya@gmail.com'))


// ^[a-zA-Z0-9._%+-]+ matches the local part of the email (before the @), allowing alphanumeric characters and some special characters like ., _, %, +, and -.
// @[a-zA-Z0-9.-]+ matches the domain part (after the @), allowing alphanumeric characters, periods, and hyphens.
// \.[a-zA-Z]{2,}$ ensures that the domain ends with a valid top-level domain (TLD), which is at least two characters long (e.g., .com, .org).