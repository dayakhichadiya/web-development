/* JAVASCRIPT LOOPS

1. while loop
2. do-while loop
3. for loop
4. for ...each loop
5. for ...of loop
6. for ...in loop
7. nested loop
8. loop with break statements
9. loop with continue statements
*/

// For in loop in javascript

// Array  ----   difference  array = [10] , array1 = new(20)

{
    let array = [10]
    let array1 = new Array(20)

    console.log(array);
    console.log(new Array);

    console.log(array.length); //1
    console.log(array1.length); //20

    console.log(typeof array); // object
    console.log(typeof array1); // object
}

{
    let newArray = ['kiwi', 'apple', 'guava', 'grapes', 'orange'];

    console.log(newArray);

    console.log(newArray[3]);

    for (let value of newArray){ // prints all the values of array
        console.log(value);
    }

    // with string

    let str = 'this is javascript loops';

    for (let char of str){
        console.log(char);
    }
}

// For in Loop in javascript

{
    let obj = {1 : "11", 2 : "22", 3 : "33"}
    let obj1 = {2 : "22"};
    let newObj = ( {name : 'skill'})

    console.log(obj);
    console.log(obj1);
    console.log(newObj);

    console.log(obj === obj); // true
    console.log(obj === obj1);// output is false even value is same bcz memory location is differ


    let str = "skill";
    let str1 = "skill";
    console.log(str === str1 );// true

    console.log(obj);
    console.log(obj1);

    console.log(obj["1"]);
    console.log(obj1["2"]);
    console.log(newObj.name);

    for (let key in obj){
        console.log(`${key} = ${obj[key]}`);
    }
}