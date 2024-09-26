// Javascript Object() Method

{
    let NewObject = new Object();
    let NewObject1 = {};

    console.log(NewObject);// {}
    console.log(NewObject1);// {}

    console.log(NewObject == NewObject1); // false
}

{
    let NewObject = { obj1: "value1", obj2: "value2", obj3: "value3" };
    console.log(NewObject);
    console.log(NewObject.obj1)// value1  ( dot notation)
    console.log(NewObject["obj2"]) // value2 ( Bracket notation)
    console.log(NewObject["obj3"]) // value3 ( Bracket notation)

}

{
    let NewObject = { obj1: "value1", obj2: "value2", obj3: "value3" };
    console.log(NewObject) //{obj1: 'value1', obj2: 'value2', obj3: 'value3'}

    delete NewObject.obj1;
    console.log(NewObject) // {obj2: 'value2', obj3: 'value3'}
}

// Object.assign()
// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)

{
    let NewObject = { obj1 : "value1", obj2 : "value2", obj3 : "value3"};
    let NewObject1 = { obj1 : "value4", obj2 : "value5", obj3 : "value6"};
    let NewObject2 = { obj1 : "value7", obj2 : "value8", obj3 : "value9"};

    let MainObject = Object.assign(NewObject, NewObject1);

}