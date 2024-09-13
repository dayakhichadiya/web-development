// Javascript string method


{
    let string = "This is javascript String Method!"
               123456789012345678901234567890123456

    console.log(string);
    console.log(string.length);
}

//string at() method

{
    let str = 'this is at method in javascript'
               1234567890123456789012345678901


    let result = str.at(3);
    console.log(result);
}

// string CharAt() method
    
// charAt(index)

{
    let str = 'this is CharAt method in javascript'
         //    01234567890123456789012345678901234


    console.log(str.charAt(8));
    console.log(str.charAt(19));
    
}

//  String charCodeAt() Method
{
    let str = "This is charCodeAt Method!"
         //    01234567890123456789012345

    console.log(str.charCodeAt(16));
    console.log(str.charCodeAt(-5)); // Nan
}

//  String codePointAt() Method 
// codePointAt(index)

{
    let str = "This is charPointAt Method in JS!"
    console.log(str.codePointAt(15));//110
    console.log(str.codePointAt(-15)); // undefined
}

//  String concat() Method 

{
    let str1 = "Hello"
    let str2 = "Javascript"

    console.log(str1.concat(str2));
    console.log(str2.concat(str1));
}
