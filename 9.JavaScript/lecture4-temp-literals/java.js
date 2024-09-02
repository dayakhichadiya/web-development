// variable name declaration

// javascript case-sensitive language

var name = "skill";
var Name = "qode";
var NAME = "institute";

console.log(name);
console.log(Name);
console.log(NAME);

// variable name

{

var firstname = 'sita';
console.log(firstname);

var first_name = 'ram';
console.log(first_name);

// this is good method for creating variables

var firstName = 'shyam';
console.log(firstName);

}

{
    // javascript casing

    // 1.camel-case

    var firstName = "myName";
    console.log(firstName);
    
    // 2.pascal-case

    var FirstName = "MyName";
    console.log(FirstName);

    // 3.snake-case

    var first_name = 'my_name';
    console.log(first_name);

    // 4.kebab-case  --- it is invalid method in javascript

    // var first name = 'my name'; 
    // console.log(first name);
}


{
    // javascript template literals

    let str1 = 'single quote string in javascript';

    let str2 = "double quote string in javascript";

    let str3 = `backtick quote string in javascript`;

    console.log(str1);
    console.log(str2);
    console.log(str3);

    // find the length of the string

    console.log(str1.length);
    
}

{
    // how to write string in string with variables

    let str4 = 'single quote in double "string" in javascript';

    let str5 = "double quote in single 'string' in javascript";

    let str6 = `backtick quote in both "string" in 'javascript'`;

    console.log(str4);
    console.log(str5);
    console.log(str6);

}

{
    let name = 'string';

    let string = "this is ${name} in javascript"; // it doesn't work it works only in backtick quote
    console.log(string);

    let string1 = `this is ${name} in javascript`; 
    console.log(string1);
}

{
    // space and new line = it works only in backtick sign

    let s1 = "string in javascript";

    let s2 = 'string in javascript';

    let s3 = `str  ing in java  
    script`;


    console.log(s1);
    console.log(s2);
    console.log(s3);

    let s4 = "string \t in javascript ";  //space character
    console.log(s4);

    let s5 = 'string in \n javascript'; //new line character
    console.log(s5);
}