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
    let str2 = "  Javascript"

    console.log(str1.concat(str2));
}

// String StartWith() / EndWith() Method 

// syntax :
// startsWith(searchString)
// startsWith(searchString, position)

// endsWith(searchString)
// endsWith(searchString, endPosition)

// NOTE : case-sensitive

{
    let str = "this is string method in JS"

    console.log(str.startsWith('t')); //true
    console.log(str.startsWith('T')); //false
    console.log(str.startsWith('i',5)); //true
    console.log(str.endsWith('s')); //false
    console.log(str.endsWith('S'));// true
}

// String includes() Method 
// Syntax:
// includes(searchString)
// includes(searchString, position)
//NOTE : case-sensitive 

{
    let str = "this is include method in javascript!!"

    console.log(str.includes('i')); //true
    console.log(str.includes('in',2)); //true
    console.log(str.includes('is',19 )); //false
    console.log(str.includes('is',2)); //true
    console.log(str.includes('i')); //true
    console.log(str.includes('is',-20)); //empty bcz -20 means 0
}


// String indexOf() And lastIndexOf() Method 

//Syntax:
// indexOf(searchString)
// indexOf(searchString, position)
// case-sensitive 

// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

{
    let str = "Cyprus, officially the Republic of Cyprus, is an island country in the eastern Sea."
               123456789012345678901234567890123456789012345678901234567890123456789

    console.log(str.indexOf('Sea')); //93
    console.log(str.indexOf('the', 1)); //19
    console.log(str.indexOf('sea')); //-1

    console.log(str.lastIndexOf('the')) //67
    console.log(str.lastIndexOf('of')) //67
    console.log(str.lastIndexOf('an')) //67
}