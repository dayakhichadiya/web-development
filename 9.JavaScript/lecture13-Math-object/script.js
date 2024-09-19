/* Javascript Math.Object Method */

/* Static methods */

// Math.abs()
// Math.ceil()
// Math.floor()
// Math.max()
// Math.min()
// Math.pow()
// Math.random()
// Math.round()
// Math.sin()
// Math.sqrt()
// Math.trunc()
// Math.sign()
// Math.cos()
// Math.log()
// Math.log10()
// Math.log2()

/* Static properties */

// Math.E
// Math.PI

{
    let math1 = Math.PI;
    console.log(math1);
}
{
    let math2 = Math.E;
    console.log(math2);
}

//Math abs (absolute)
{
    let maths3 = Math.abs(29);
    let maths4 = Math.abs(-29);
    let maths5 = Math.abs(0);
    let maths6 = Math.abs(-0);
    console.log(maths3);
    console.log(maths4);
    console.log(maths5); 
    console.log(maths6); 
}

// Math ceil 

{
    let math7 = Math.ceil(1.9);
    let math8 = Math.ceil(-1.9);
    let math9 = Math.ceil(1.10);
    console.log(math7); //2
    console.log('ceil',math8); //-1
    console.log(math9)//2
}

// Math floor method

{
    let math10 = Math.floor(5.90);
    let math11 = Math.floor(3.10)
    console.log('floor value',math10); // 5
    console.log(math11); // 3
}

// Math max 
{
    let math12 = Math.max(22, 18, 19, 90);
    console.log('maximum value is',math12); // 90
}

// Math min
{
    let math13 = Math.min(90, 58, 89, 33, 60);
    console.log('minimum value is',math13);//33
}

// Math.pow()

{
    let math14 = Math.pow(3,5); //3*3*3*3*3 =243
    console.log(math14)
}
// Math.random()

{
    let math15 =  Math.random(23);
    console.log('random number is',math15);
}
// Math.round()
{

    let math16 = Math.round(Math.random()*10000)
    console.log('round figure number is',math16);

}
// Math.sin()
{
    let math17 = Math.sin(30*3.14/180);
    console.log('sin is',math17)
}
// Math.sqrt()
{
    let math18 = Math.sqrt(64);
    console.log(math18);//8
}

// Math.trunc()
{
    let math19 = Math.trunc(10.10);
    console.log(math19)
}
// Math.sign()

{
    let math20 = Math.sign(90);
    let math21 = Math.sign(-56);
    let math22 = Math.sign(0);

    console.log(math20); // 1
    console.log(math21); // -1
    console.log(math22); // 0

}
// Math.cos()

{
    let math23 = Math.cos(60*3.14/180);
    console.log(math23)

}
// Math.log()
// Math.log10()
// Math.log2()

{
    let math24 = Math.log(10);
    let math25 = Math.log2(10);
    let math26 = Math.log10(10);

    console.log(math24);
    console.log(math25);
    console.log(math26);
}