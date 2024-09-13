// Set.prototype.add() method

{
    const set1 = new Set();

    set1.add(42);
    set1.add(42);
    set1.add(13);

    for (const item of set1) {
        console.log(item);
    }

    const mySet = new Set();

    mySet.add(1);
    mySet.add(5).add("some text");

    console.log(mySet);
    // Set [1, 5, "some text"]

}
// set.clear method
{
    let set1 = new Set();
    set1.add(1);
    set1.add('hello');

    console.log(set1.size);
    // output: 2

    set1.clear();

    console.log(set1.size);// output is 0 bcz set is clear
}

//set.delete method
{
    let set1 = new Set();
    set1.add(21);
    set1.add(1);
    set1.add(31);

    console.log(set1);
    set1.delete(21);
    console.log(set1);
}

// difference method
{
    const set1 = new Set([1, 3, 5, 7, 9]);
    const set2 = new Set([1, 4, 9]);
    console.log(set1.difference(set2)); // Set(3) { 3, 5, 7 }
}

// // etries method
{
    const set1 = new Set()
    set1.add(11);
    set1.add('twelve');
    set1.add('five');

    const iterator1 = set1.entries();
    // for (const entry of iterator1) {
        console.log(iterator1);
// }
}
// set has method == to find the value  
 
{ 
    const set1 = new Set([1, 2, 3, 4, 5, 6]); 
 
    console.log(set1.has(2));  //true
    console.log(set1.has(9)); //false
} 
 
// intersection method == it create new set of same value 
 
{ 
    const set1 = new Set([1, 3, 5, 7, 9]); 
    const set2 = new Set([1, 4, 9]); 
    console.log(set2.intersection(set1)); // Set(2) { 1, 9 } 
} 
 
// isDisjointFrom method  == any number cannot be same

{ 
    const val1 = new Set([2, 3, 5, 7, 11, 13, 17, 19]); 
    const val2 = new Set([1, 4, 9, 16]); 
    console.log(val1.isDisjointFrom(val2)); // true 
} 
 
// // isSubsetOf == first set number must be match to the second set
 
{ 
    const set1 = new Set([4, 8, 12,16]); 
    const set2 = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]); 
    console.log(set1.isSubsetOf(set2)); // true 
} 
 
// //isSupersetOf(other) == first set values must be match
 
{ 
    const val1 = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]); 
    const val2 = new Set([4, 8, 12, 16]); 
    console.log(val1.isSupersetOf(val2)); // true 

} 
 
// // keys method 
 
{ 
    const set = new Set(); 
    set.add("key1"); 
    set.add("key2"); 
    set.add("key3"); 
 
    const result = set.keys(); 
 
    console.log(result.next().value);  
    console.log(result.next().value);  
    console.log(result.next().value);  

    // for (let k of set){
    //     console.log(k);
    // }
} 
 
// // Set.prototype[Symbol.iterator]() 
 
{ 
    const mySet = new Set(); 
    mySet.add("0"); 
    mySet.add(1); 
    mySet.add({}); 
    
    const result = mySet[Symbol.iterator](); 
    
    console.log(result); // "0" 
    // console.log(setIter.next().value); // 1 
    // console.log(setIter.next().value); // {} 
 
} 

    // const mySet = new Set();
    // mySet.add("0");
    // mySet.add(1);
    // mySet.add({});

    // for (const v of mySet) {
    // console.log(v);
    // }

 
// // symmetricDifference == it create new set of unmatch number
    { 
    const set1 = new Set([2, 4, 6, 8]); 
    const set2 = new Set([1, 4, 9]); 
    console.log(set1.symmetricDifference(set2)); // Set(5) { 2, 6, 8, 1, 9 } 
    
    } 
    
    // set union method == it prints all the set in one set and it does not reapet the number
    
    { 
        const evens = new Set([2, 4, 6, 8]); 
        const squares = new Set([1, 4, 9]); 
        console.log(evens.union(squares)); // Set(6) { 2, 4, 6, 8, 1, 9 } 
        
    } 
 
// // set values method == it prints only the values
 
{ 
    const mySet = new Set(); 
    mySet.add("maths"); 
    mySet.add("english"); 
    mySet.add("science"); 
    
    const result = mySet.values(); 
    
    console.log(result.next().value); // maths
    console.log(result.next().value); // english
    console.log(result.next().value); // science
    
 } 
 
// // size method == it shows the size 
{
    let mySet = new Set();
    mySet.add(1); 
    mySet.add(5); 
    mySet.add("text","tet"); 
    
    console.log(mySet.size); // 3
}