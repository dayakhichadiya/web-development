// break and continue statement


// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 0; j < 5; j++) {
//         if (i == 3) {
//             break;
//         }
//         console.log(`inner loop ${j}`);
//     }
// }

// {
//     demo: for (let i = 0; i < 10; i++) {
//         console.log(`outer loop ${i}`);
//         for (let j = 0; j < 5; j++) {
//             if (j == 3) {
//                 continue demo;
//             }
//         }
//         console.log(`inner loop ${j}`);
//     }
// }

// Map object:

{
    let map = new Map();
    console.log(map);

    map.set("key1",1);
    console.log(map);

    map.set("key2",2);
    console.log(map);

    // get method
    let Get = map.get("key1");
    console.log(Get);

    let Get1 = map.get("key2");
    console.log(Get1);

    //get has = to find
    let has1 = map.has('key1'); //true
    console.log(has1);

    let has3 = map.has('key3'); // false
    console.log(has3);

    map.set("key3",3);
    console.log(map);

    //map delete method
    // map.delete("key2");
    // console.log(map);

    //map clear method

    // map.clear();
    console.log(map);

    // Entries method in Map

    let entries1 = map.entries();
    console.log(entries1);

    // to print only values = 1,2,3
    let value = map.values();
    console.log(value);

    // to print only values = key1,key2,key3
    let key = map.keys();
    console.log(key);

    // map.forEach(key,value) => {
    //     return console.log(`${key} = ${value}`);
    // }

    let data = map[Symbol.iterator]()

    for(const item of data){
        console.log(item);
    }
}