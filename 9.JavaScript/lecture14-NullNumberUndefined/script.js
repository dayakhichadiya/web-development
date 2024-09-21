// NaN , null  , undefined 

//{
//   console.log(undefined == undefined);
//   console.log(undefined == null);
//   console.log(null == null);
//   console.log(undefined == NaN);
//   console.log(NaN == NaN);
//   console.log(null == NaN);
//   console.log(Infinity == undefined);
//   console.log(Infinity == null);
//   console.log(Infinity == NaN);
//   console.log(Infinity == Infinity);
//   console.log(-Infinity == Infinity);
//}

// Number Method

// toString() 
// toExponential()
// toFixed()
// toPrecision()
// Valueof()

//Converting Variable to Numbers
// Number()
// parseFloat() 
// parseInt() 

// Number Object Method
// Number.isInteger() 
// Number.isSafeInteger()
// Number.parseFlaot()
// Number.parseInt() 

// to string()

{
    let num1 = 12;
    console.log(num1);
    console.log(typeof num1);
    console.log(num1.toString());
    console.log(typeof num1)

}

// toExponential()
{
    let num2 = 4.903202
    console.log(num2.toExponential())
    console.log(num2.toExponential(2))
    console.log(num2.toExponential(3))
}

// to fixed()
{
    let num3 = 9.96701
    console.log(num3.toFixed()); //10
    console.log(num3.toFixed(2));//9.97
    console.log(num3.toFixed(4));//9.9670
}

// toPrecision()

{
    let num4 = 9.9570;
    console.log(num4.toPrecision()); //9.9670
    console.log(num4.toPrecision(2));//10
    console.log(num4.toPrecision(6));//9.95700
}

// Valueof()
{
    let num5 = 123
    console.log(num5.valueOf())//123
}


// Number()
{
    let num6 = Number('10');
    console.log(num6);
    console.log(typeof num6)
}

// Number.isFinite(value)

{
    let num7 = 0/1;
    console.log(num7);
    let num8 = 1/0;
    console.log(num8);

    
}

// // Number.isInteger(value)

{
  let num6 = Number.isInteger(10);
  console.log(num6);
  let num7 = Number.isInteger(10.1);
  console.log(num7);
}

// // Number.isNaN(value)

{
  let x = 10;
  let y = "10F";
  let z = x * y;
  console.log(z);

  let num8 = Number.isNaN(z);
  console.log(num8);
  let num9 = Number.isNaN(NaN);
  console.log(num9);
}

// // Number.isSafeInteger(testValue)

{
  let x = 10101010122222n;
  console.log(x);
  console.log(typeof x);
  let num10 = Number.isSafeInteger(x);
  console.log(num10);
}

// // Number.parseFloat()

{
  let num11 = Number.parseFloat(10.15);
  let num12 = Number.parseFloat(10.01);
  console.log(num11);
  console.log(num12);
}

// // Number.parseInt()

{
  let num13 = Number.parseInt(10.15);
  let num14 = Number.parseInt(10.51);
  console.log(num13);
  console.log(num14);
}

// // Number.prototype.toExponential()


// // toExponential()
// // toExponential(fractionDigits)

{
    let num = 560065

    console.log(num.toExponential());
    console.log(num.toExponential(1));
    console.log(num.toExponential(2));
    console.log(num.toExponential(3));
}


//Number.prototype.toFixed()

{
    let num = 56.0065
    console.log(num.toFixed());
    console.log(num.toFixed(1));
    console.log(num.toFixed(2));
    console.log(num.toFixed(3));
    console.log(num.toFixed(4));
}

// Number.prototype.toLocaleString()
// Number.prototype.toString()

{
    let num = 5600695
    let num1 = num.toString()
    console.log(typeof num);
    console.log(typeof num1);  
}

// Number.prototype.toPrecision()

{
    let num = 76.2365
    console.log(num.toPrecision()) // 76.2365
    console.log(num.toPrecision(1)) // 8e+1
    console.log(num.toPrecision(2)) // 76
    console.log(num.toPrecision(3)) // 76.2
    console.log(num.toPrecision(4)) // 76.24
    console.log(num.toPrecision(5))  // 76.237
    
}