// Array and its method

// Array.prototype.copyWithin()

// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

// copyWithin(target, start)
// copyWithin(target, start, end)

{
    let array = ['a', 'b', 'c', 'd', 'e', 'f'];
        //        0    1    2    3    4    5 
    let array1 = array.copyWithin(2, 1)

    console.log(array1)// (6) ['a', 'b', 'b', 'c', 'd', 'e']

    let array2 = array.copyWithin(0, 2, 4)

    console.log(array2);// (6) ['b', 'c', 'b', 'c', 'd', 'e']

}

// Array.prototype.entries()

// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

// entries()

{
     let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f']
     let array1 = array.entries();

     console.log(array1.next().value) // (2) [0, 'a']
     console.log(array1.next().value) // (2) [1, 'b']
     console.log(array1.next().value) // (2) [2, 'c']
     console.log(array1.next().value)
}

// Array.prototype.every()

// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// every(callbackFn)
// every(callbackFn, thisArg)

{
    let num = [10, 20, 30, 40, 50, 60]

    let array = num.every((data) => data <= 50)

    console.log(array)// false
}

// Array.prototype.fill()

// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

// fill(value)
// fill(value, start)
// fill(value, start, end)

{
    let array = ['a', 'b', 'c', 'd', 'e', 'f']
    
    let array1 = array.fill('1',2); 
    console.log(array1); // (6) ['a', 'b', '1', '1', '1', '1']

    let array2 = ['1', '2', '3', '4', '5'];

    let array3 = array2.fill('A', 2 , 4)
    console.log(array3) // (5) ['1', '2', 'A', 'A', '5']

    console.log(array); // (6) ['a', 'b', '1', '1', '1', '1']
}

// Array.prototype.filter()

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function...

// filter(callbackFn)
// filter(callbackFn, thisArg)

{
    let num = [10, 20, 30, 40, 50];
    
    let array1 = num.filter((data) => data > 30);
    console.log(array1); // [ 40, 50 ]
}
{
    let list = ['fruits', 'veges', 'desert', 'flower']

    let array2 = list.filter((data) => data.length <= 5);
    console.log(array2); // ['veges']
}

// Array.prototype.find()

// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// find(callbackFn)
// find(callbackFn, thisArg)                                            

{
    let num = [10, 20, 30, 40, 50];

    let array = num.find((data) => data < 30);
    console.log(array); // 10
}

// Array.prototype.findIndex()

// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

{
    let num = [20, 40, 10, 30, 50]

    let array = num.findIndex((data) => data < 30);
    console.log(array);// 0

    let array1 = num.findIndex((data) => data == 40);
    console.log(array1);// 1

}

// Array.prototype.findLast()

// The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

{
    let num = [10, 30, 20, 40, 50, 60];

    let array = num.findLast((data) => data < 20)
    console.log(array);// 10

    let array1 = num.findLast((data) => data < 40)
    console.log(array1); // 20
}

