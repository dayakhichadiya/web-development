// String padStart() and padEnd() Method 

// Syntax:

// padStart(targetLength)
// padStart(targetLength, padString)

// padEnd(targetLength)
// padEnd(targetLength, padString)

{
    let str = '11'
    console.log(str.padStart(6, 20)); //202011
    console.log(str.padEnd(6, 20)); // 112020
}

// String trim() , trimStart() and trimEnd() Method
// Syntax:
// trim()
// trimStart()
// trimLeft()  deprecated
// trimEnd()
// trimRight()  deprecated

{
    let str = '   this is trim method in javascript    '
    console.log(str.length);// 40

    let Trim = str.trim();
    console.log(Trim);
    console.log(Trim.length);// now length is 33

    let Trimstart = str.trimStart();
    console.log(Trimstart);
    console.log(Trimstart.length)// 37

    let TrimEnd = str.trimEnd();
    console.log(TrimEnd);
    console.log(TrimEnd.length)// 36
}


// String slice() , subString() Method

// Syntax:

// slice(indexStart)
// slice(indexStart, indexEnd)

// substring(indexStart)
// substring(indexStart, indexEnd)

{
    let str = 'this is string method in javascript';
            //    01234567890123456789012345678901234

    console.log(str.slice(12)); //ng method in javascript
    console.log(str.slice(-12)); // n javascript
    console.log(str.substring(12)); // ng method in javascript
    console.log(str.substring(-12)); // it give full string bcz negative value becms 0 
    console.log(str.slice(12, 24)); // ng method in
    console.log(str.slice(12, -4)); // ng method in javasc
    console.log(str.slice(-20, -28)); // empty
    console.log(str.substring(-12, -24)); // empty

    
}

//  String Search() Method 

// Syntax:
// search(regexp)
{
    let str = 'I think my car is beautiful than your Car!';
    let regexp1 = /car/i;
    let regexp2 = /Car/g;
    
    console.log(str.search(regexp1));//11
    console.log(str.search(regexp2));//38

}

// String toLowercase() and toUppercase Method 
// Syntax:

// toUpperCase()
// toLowerCase()

{
    let str = 'I think my car is beautiful than your Car!';
    console.log(str.toLowerCase());
    console.log(str.toUpperCase());
}

// String replace() and repalaceAll() Method 

// syntax:

// replace(pattern, replacement)
// replaceAll(pattern, replacement)
{
    let str = 'I think my car is beautiful than your Car!';
    let regexp1 = /car/g;
    console.log(str.replace(regexp1,'CAR'));
    console.log(str.replaceAll(regexp1,'CAr'));

}

// String match() and matchAll() Method

// Syntax:

// match(regexp)
// matchAll(regexp)
{
    let str = 'I think my car is beautiful car than your Car!';
    let regex1 = /car/g
    console.log(str.match(regex1));
    console.log(([...str.matchAll(regex1)]));

    let array = [1,2,3,4,5,6,7]
    let array1 = [...array]
    let array2 = array

    console.log(array);
    console.log(array1);
    console.log(array2);

    // array[2] = 10

    // console.log(array);
    // console.log(array1);
    // console.log(array2);
    
}
// String split() Method 

// split()

{
    let str = 'I think my car is beautiful car than your Car!';

     let str1 = str.split('')
     let str2 = str1.reverse()
     let str3 = str2.join('')

     console.log(str1);
     console.log(str2);
     console.log(str3);
     
}

/* String repeat() Method */

{
     let str = "o";
     console.log(str.repeat(10));
}

/* String toString and valueOf Method */

{
    let str = 10

    console.log(str.toString());
    console.log(str.valueOf());

}





