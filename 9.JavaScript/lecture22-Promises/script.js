// Promises in Javascript

{
    //     const myPromise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('Promise is resolved');
    //         }, 5000)
    //     }).then((result) => {
    //         console.log(result);
    //     })
    // 
}

{
    const myPromise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise is resolved 1!!!");
        }, 5000)
    }).then(() => {
        console.log('error, promise is rejected 1')
    }).then(() => {
        console.log("progress 1")
    })

    const myPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("promise is rejected 2 !!!");
        }, 5000)
    }).catch(() => {
        console.log('error, promise is rejected 2')
    })


    async function Progress1() {
        console.log('Async Function 1')

        let result1 = await myPromise1;
        console.log('This is Aync and Await Method 1')

    }
    Progress1()

    async function Progress2() {
        console.log("Async Function 2")

        let result2 = await myPromise2;
        console.log('This is Aync and Await Method 2')
    }
    Progress2()
}

//                  Async Function 1
// script.js:45     Async Function 2
// script.js:20     error, promise is rejected 1
// script.js:22     progress 1
// script.js:38     This is Aync and Await Method 1
// script.js:30     error, promise is rejected 2
// script.js:48     This is Aync and Await Method 2
