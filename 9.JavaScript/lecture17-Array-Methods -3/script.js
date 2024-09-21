// Array methods in javascript


// Array.prototype.findLastIndex()

// The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)

{
    let num = [1, 2, 3, 4, 5, 6];
            // 0  1  2  3  4  5

    let array = num.findLastIndex((data) => data < 6 );
    console.log(array); // 4
}

// Array.prototype.flat()

// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

{
    let multiarray = [10, 20, 30, 40, [50, 60 ,[70, 80]]]

    let array = multiarray.flat();
    console.log(array);

    let array1 = multiarray.flat(2);
    console.log(array1); // (8) [10, 20, 30, 40, 50, 60, 70, 80]
}

// Array.prototype.flatMap()

// The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

// flatMap(callbackFn)
// flatMap(callbackFn, thisArg)

{
    let num = [1, 2, 3, 4, 5];

    let flatmap = num.flatMap((data) => (data == 2 ? [2, 2,[3, 4]] :2 ));
    console.log(flatmap)
}

// Array.prototype.forEach()

// The forEach() method of Array instances executes a provided function once for each array element.

// forEach(callbackFn)
// forEach(callbackFn, thisArg)

{
    let array = ['a', 'b', 'c', 'd']

    let result = array.forEach((data) => console.log(data))
}

// Array.prototype.includes()

// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

{
    let num = [1, 2, 3, 4, 5];

    let array = num.includes(2);
    console.log(array); // true
    let array1 = num.includes(6);
    console.log(array1); // false
}

// Array.prototype.indexOf()

// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present...indexOf(searchElement)

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

{
    let birds = ['pigeon', 'crow', 'eagle', 'duck', 'parrot'];

    let array = birds.indexOf('crow');
    console.log(array);// 1

    let array1 = birds.indexOf('duck', 4);
    console.log(array1) // -1
}

// Array.prototype.join()

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// join()
// join(separator)
