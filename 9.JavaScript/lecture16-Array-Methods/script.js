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