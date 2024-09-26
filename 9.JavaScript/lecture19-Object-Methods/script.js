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
    let NewObject = { obj1: "value1", obj2: "value2", obj3: "value3" };
    let NewObject1 = { obj4: "value4", obj5: "value5", obj6: "value6" };
    let NewObject2 = { obj7: "value7", obj8: "value8", obj9: "value9" };

    let MainObject = Object.assign(NewObject, NewObject1, NewObject2);
    console.log(MainObject);
}

// Object.create

//   Object.create(proto);
//   Object.create(proto, propertiesObject);

{
    const profile = {
        name: "Sia",
        age: function () {
            console.log(`I am ${this.ages} year old and my name is ${this.name}.`);
        }
    }

    const document = Object.create(profile);

    document.ages = 20;
    console.log(document);

    console.log(document.age())
}

// Object.defineProperties()
// Object.defineProperties(obj, props)

{
    const object1 = {};

    Object.defineProperties(object1, {
        property1: {
            value: 10,
            writable: true,
        },

        property2: {
            value: 40,
            writable: false,
        },
    })

    console.log(object1.property1);

}

// Object.defineProperty()
// Object.defineProperty(obj, prop, descriptor)

{
    const object1 = {};

    Object.defineProperty(object1, 'property1', {
        value: 20,

    })
    console.log(object1.property1)
}

// Object.entries()
// Object.entries(obj)

{
    let object1 = {
        name : 'Sia',
        age : 20,
        city : 'Australlia',
        work : 'singer',
    }

    for(const[key, value] of Object.entries(object1)){
        console.log(`${key} : ${value}`)
    }
}

// Object.freeze()
{
    let object1 = {
        name : 'Sia',
        age : 25,
        city : 'Australlia',
        work : 'singer',
    }

    let freeze = Object.freeze(object1);
    console.log(freeze);

    console.log(Object.isFrozen(freeze));

    object1.age = 30;
    console.log(object1);

    delete object1.city;
    console.log(object1)

}

// Object.seal()

{
    let object1 = {
        age : 20,
    }
    Object.seal(object1);
    object1.age = 30;

    console.log(object1);// 30

    delete object1.age;
    console.log(object1); // 30 cannot be deleted when object is sealed but can change the value

}

// group By()

{
    const inventory = [
        { name: "asparagus", type: "vegetables", quantity: 5 },
        { name: "bananas", type: "fruit", quantity: 0 },
        { name: "goat", type: "meat", quantity: 23 },
        { name: "cherries", type: "fruit", quantity: 5 },
        { name: "fish", type: "meat", quantity: 22 },
      ];

      const result = Object.groupBy(inventory, ({ type }) => type);
      console.log(result)
}
