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

// etries method
{
    const set1 = new Set()
    set1.add(12);
    set1.add('twelve');

    const iterator1 = set1.entries();
    for (const entry of iterator1) {
        console.log(entry);
}
}