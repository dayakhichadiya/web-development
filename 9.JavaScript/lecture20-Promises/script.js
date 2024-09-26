// Javascript Promises

{
    let myPromise = new Promise(function(myResolve, myReject){

        myResolve();
        myReject();
    })
    myPromise.then(
        function(value){}
    )
}
// async function myFunction() {
//     return "Hello";
//     }


{
    function myFun(some){
        document.getElementById("demo").innerHTML = some;
    }

    function myCalc(num1, num2, mycallback){
        let sum = num1 + num2;
        mycallback(sum);
    }
    myCalc(5, 4, myFun);
}

{
    function myFun(result){
        console.log(`the result is : ${result}`);
    }

    function failureCallback(error) {
        console.error(`Error generating audio file: ${error}`);
      }

      
// createAudioFileAsync(audioSettings, myFun, failureCallback);


}