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

}