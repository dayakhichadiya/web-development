// Array methods in javascript


// Array.prototype.findLastIndex()

// The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findLastIndex(callbackFn)
// findLastIndex(callbackFn, thisArg)

{
    let num = [1, 2, 3, 4, 5, 6];
    // 0  1  2  3  4  5

    let array = num.findLastIndex((data) => data < 6);
    console.log(array); // 4
}

// Array.prototype.flat()

// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

{
    let multiarray = [10, 20, 30, 40, [50, 60, [70, 80]]]

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

    let flatmap = num.flatMap((data) => (data == 2 ? [2, 2, [3, 4]] : 2));
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

{
    let birds = ['pigeon', 'crow', 'eagle', 'duck', 'parrot'];
    let joint = birds.join(' + ');

    console.log(joint);
}

// Array.prototype.keys()

// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

// keys()

{
    let num = [10, 20, 30, 40, 50];

    let array = num.keys();
    console.log(array.next().value); // 0
    console.log(array.next().value); // 1
    console.log(array.next().value); // 2
    console.log(array.next().value); // 3
    console.log(array.next().value); // 4
}

// Array.prototype.lastIndexOf()

// The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)

{
    let birds = ['pigeon', 'crow', 'eagle', 'duck', 'parrot'];

    let result = birds.lastIndexOf('eagle', 1); // -1
    console.log(result);

    let result1 = birds.lastIndexOf('duck');
    console.log(result1); //3
}

// Array.prototype.map()

// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// map(callbackFn)
// map(callbackFn, thisArg)

{
    let num = [2, 1, 3, 2, 4];

    let map = num.map((data) => data * 2);
    console.log(map); //5) [4, 2, 6, 4, 8]
}

// Array.prototype.pop()

// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

// pop()
{
    let num = [1, 2, 3, 4, 5];

    num.pop()
    console.log(num); // (4) [1, 2, 3, 4]
}


// Array.prototype.push()

// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

// push()
// push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)

{
    let num = [1, 2, 3, 4, 5];

    num.push(6)
    console.log(num); // (6) [1, 2, 3, 4, 5, 6]
}

// Array.prototype.shift()

// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

// shift()

{
    let num = [1, 2, 3, 4, 5];

    num.shift()
    console.log(num); // (4) [2, 3, 4, 5]
}

// Array.prototype.unshift()

// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

// unshift()
// unshift(element1)
// unshift(element1, element2)
// unshift(element1, element2, /* …, */ elementN)

{
    let num = [1, 2, 3, 4, 5];

    num.unshift(6,7 )
    console.log(num); // (7) [6, 7, 1, 2, 3, 4, 5]
}

// Array.prototype.reduce()

// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// Array.prototype.reduceRight()

// The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

// reduceRight(callbackFn)
// reduceRight(callbackFn, initialValue)

{
    let num = [1, 2, 3, 4, 5];

    let result = num.reduce((prev, next) => prev * next);
    console.log(result);// 120

    let result1 = num.reduceRight((prev, next) => prev * next);
    console.log(result1); // 120
}

// Array.prototype.reverse()

// The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

// reverse()

{
    let char = ['a', 'b', 'c', 'd', 'e'];
  
    let rev = char.reverse();
    console.log(rev); // (5) ['e', 'd', 'c', 'b', 'a']

    let num = [1, 2, 3, 4, 5];

    let rev1 = num.reverse();
    console.log(rev1); // (5) [5, 4, 3, 2, 1]

    let num1 = [2 , 5 , 1 , 7 , 8];

    let rev2 = num1.reverse(); 
    console.log(rev2); // (5) [8, 7, 1, 5, 2]

    let rev3 = num1.sort((a  , b) => a - b)
    console.log(rev3); // (5) [1, 2, 5, 7, 8]
}


// Array.prototype.slice()

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// slice()
// slice(start)
// slice(start, end)

{
    let birds = ['pigeon', 'crow', 'eagle', 'duck', 'parrot'];

    let slice = birds.slice(2);
    console.log(slice); // (3) ['eagle', 'duck', 'parrot']

    let slice1 = birds.slice(1, 3);
    console.log(slice1);// (2) ['crow', 'eagle']
}


// Array.prototype.some()

// The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// some(callbackFn)
// some(callbackFn, thisArg)

{
    let num = [1, 2, 3, 4, 5];
    let array = num.some((data) => data > 5);
    console.log(array) // fasle
}

// Array.prototype.splice()

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

{
    let array = [1, 2, 3, 4, 5, 6];

    let splice = array.splice(2, 1, '9', '8');
    console.log(splice);

    console.log(array); // (7) [1, 2, '9', '8', 4, 5, 6]
}