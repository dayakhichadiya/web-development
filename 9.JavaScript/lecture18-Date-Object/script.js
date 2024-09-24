// Javascript Date Object() Method


// Static Method 
// date.now()
// date.parse()
// date.utc()
{
    let date = new Date();
    console.log(date);

    let todaymili = Date.now();
    console.log(todaymili);

    let days = Date.parse('01 Jan 1970 00:00:00 GMT');
    console.log(days)
}

// GET Method in javascript

{
    let today = new Date();
    console.log(today);

    let getdate = today.getDate();
    console.log(getdate) // 24

    let getmonth = today.getMonth();
    console.log(getmonth);// 8

    let getday = today.getDay();
    console.log(getday); // 2 = tuesday

    let getyear = today.getFullYear();
    console.log(getyear) // 2024

    let gethours = today.getHours();
    console.log(gethours) // 17

    let getminutes = today.getMinutes();
    console.log(getminutes); // 36

    let getseconds = today.getSeconds();
    console.log(getseconds); // 57

    let getmilisec = today.getMilliseconds();
    console.log(getmilisec);

}

// Set method in javascript

{
    let today = new Date();
    console.log(today);
 
    let setdate = today.setDate(19);
    console.log(today);

    let setmonth = today.setMonth(11);
    console.log(today);

    let setyear = today.setFullYear(2004);
    console.log(today);

    let sethours = today.setHours(7);
    console.log(today);

    let setminutes = today.setMinutes(23);
    console.log(today);

    let setseconds = today.setSeconds(9); 
    console.log(today); // Sun Dec 19 2004 07:23:09 GMT+0530 (India Standard Time)



    let datestring = today.toDateString();
    console.log(datestring); // Sun Dec 19 2004

    let toisostring = today.toISOString();
    console.log(toisostring); // 2004-12-19T01:53:09.818Z

    let jsonstring = today.toJSON();
    console.log(jsonstring); //2004-12-19T01:53:09.857Z

    let tostring = today.toString();
    console.log(tostring); // Sun Dec 19 2004 07:23:09 GMT+0530 (India Standard Time)

    let totimestr = today.toTimeString();
    console.log(totimestr); // 07:23:09 GMT+0530 (India Standard Time)

    let toutcstr = today.toUTCString();
    console.log(toutcstr); // Sun, 19 Dec 2004 01:53:09 GMT

    let valueof = today.valueOf();
    console.log(valueof); // 1103421189199

}

// Javascript Basic function 

{
    function sum(){
        return 5+5;
    }
    console.log(sum()); // 10
}

{
    function add(a, b){
        return a * b;
    }
    console.log(add(4, 5)); //20
}

// Arrow function 

{
    let add = () => 5 + 5;

    console.log(add()); // 10
}

{
    const add = name => name
    console.log(add('hello world'));

}

{
    const multi = (a, b) => a*b;

    console.log(multi(5 , 5)); // 25
}