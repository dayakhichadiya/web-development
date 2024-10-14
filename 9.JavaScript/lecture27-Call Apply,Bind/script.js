// 'use strict'
// Use call Method()
/* Javascritp apply() , call() and bind() Method */
/* Javascript Module ES6 */

{
    const profile = {
        firstName: "Sia",
        lastName: "Kate",
        city: "Australia"
    }

    console.log(profile);


    function details() {
        console.log(`my name is ${this.firstName} ${this.lastName} and my city is ${this.city}`)
    }

    let call = details.call(profile);
    console.log(call);

}

{
    const profile = {
        firstName: "sia",
        lastname: "kate",
    };

    console.log(profile);

    function names(age, business) {
        console.log(
            `my name is ${this.firstName} ${this.lastname} and my age is ${age} and my occupation is ${business}`
        );
    }

    let call = names.call(profile, [30, "singer"]);

    console.log(call);

    //my name is sia kate and my age is 30,singer and my occupation is undefined
}

// Apply() Method in javascript

{
    const profile = {
        firstName: "Riya",
        lastname: "Arora",
    };

    console.log(profile);

    function names(age, business) {
        console.log(
            `my name is ${this.firstName} ${this.lastname} and my age is ${age} and my occupation is ${business}`
        );
    }

    let call = names.apply(profile, [26, "journalist"]);

    console.log(call);
    //my name is Riya Arora and my age is 26 and my occupation is journalist
}

// Merge Array

{
    let array1 = [10, 20, 30, 40, 50]
    let array2 = [60, 70, 80, 90, 100]

    let result = Math.max.apply(null, array1);
    console.log(result);
    console.log(array2)

    let demo = Math.max(10, 20, 30, 40, 50)
    console.log(demo) // 49

    console.log(array1)
}

// Bind() Method in javascript

{
    const profile = {
        firstName: "Pooja",
        lastName: "sharma",
        names: function () {
            console.log(`${this.firstName} ${this.lastName}`)
        }
    };

    profile.names()

    const secondProfile = {
        firstName: "Isha",
        lastName: "Mehta",
    }
    let print = profile.names.bind(secondProfile, [])
    console.log(print());
}

// JavaScript Module ES6

// export function sum() {
//     return console.log(10 + 20);
// }

names = 'SkillQode'
console.log(names);
