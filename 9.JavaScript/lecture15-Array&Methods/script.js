// Array and its Methods

{
    // let array1 = [10];
    // console.log(array1) //[10]

    // let array2 = new Array(10);
    // console.log(array2) //empty * 10

    // console.log(array1.length); //1
    // console.log(array2.length); // 10

    // let array3 = []
    // array3.length = 20;
    // console.log(array3) // 20

    // array3.push('20');
    // array3.push('30');
    // array3.push('40');
    // array3.push('50');
    // console.log(array3)// 24 [ 20', '30', '40', '50']

    // array3.unshift('10')
    // console.log(array3)// (25) ['10', empty × 20, '20', '30', '40', '50']
    // array3.unshift('20')
    // array3.unshift('30')
    // array3.unshift('40')
    // console.log(array3)// (28) ['40', '30', '20', '10', empty × 20, '20', '30', '40', '50'

    // array3[4] = "50"
    // array3[5] = "60"
    // console.log(array3)// (28) ['40', '30', '20', '10', '50', '60', empty × 18, '20', '30', '40', '50']

    // let array4 = array3
    // console.log(array4); // (28) ['40', '30', '20', '10', '50', '60', empty × 18, '20', '30', '40', '50']

    // array4.pop()
    // console.log(array4); //(27) ['40', '30', '20', '10', '50', '60', empty × 18, '20', '30', '40']
    // console.log(array3);// (27) ['40', '30', '20', '10', '50', '60', empty × 18, '20', '30', '40']

    // array4.shift()
    // console.log(array4);// (26) ['30', '20', '10', '50', '60', empty × 18, '20', '30', '40']
    // console.log(array3);
    // console.log(Object.keys(array4));// (8) ['0', '1', '2', '3', '4', '23', '24', '25']
}

// Array.from() method 

// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
{
    let array = Array.from('123456')
    console.log(array);//(6) ['1', '2', '3', '4', '5', '6']
}

{
    let array = [10 , 20 , 30 , 40 , 50]
    let array1 = [...array]

    console.log(array1); //(5) [10, 20, 30, 40, 50]

    array1[0] = 60

    console.log(array);//  (5) [10, 20, 30, 40, 50]
    console.log(array1); //(5) [60, 20, 30, 40, 50]
// 
}

// Array.isArray(value)
// The Array.isArray() static method determines whether the passed value is an Array

{
    let array = Array.isArray([10, 20, 30, 40])
    console.log(array); // true

    let array2 = Array.isArray('[20]', '30', '40')
    console.log(array2)//false
}

// // Array.of()

// // The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

// // Array.of(element1)
// // Array.of(element1, element2)
// // Array.of(element1, element2, /* …, */ elementN)

{
    let array = Array.of(10, 20, 30, 40)
    console.log(array);// (4) [10, 20, 30, 40]
}

/*  Array.prototype.at() */

// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// at(index)

{
    let array = [10, 20, 30, 40, 50]
    console.log(array)

   let array1 = array.at(1);
    console.log(array1);// 20

    let array2 = array.at(-1);
    console.log(array2)// 50
}

/*  Array.prototype.concat() */

// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)

{
    let array1 = ['hi','hello']
    let array2 = ['java', 'script']

    let result = array1.concat(array2);
    console.log(result); // (4) ['hi', 'hello', 'java', 'script']
}