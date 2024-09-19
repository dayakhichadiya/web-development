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