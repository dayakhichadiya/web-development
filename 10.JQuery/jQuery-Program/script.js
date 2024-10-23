// [date:- 19-10-2024]

//  1. Check if jQuery is loaded

// if(typeof jQuery == "undefined"){
//     console.log("jQuery is not added");
// }else{
//     console.log("jQuery is added");
// }


// 2. If Page is too long scroll to the Top

// {
//     $(function(){
//         $('#button').click(function(){
//             $('html, body').scrollToTop(0);
//         }, 2000)
//     })
// }

// 3. Animate width and height of a button

// $(function(){
//     $('#btn').click(function(){
//         $(this).animate({
//             width : '200px',
//             height : '100px',
//         })
//     })
// })

// 4. FadeIn your boxes

$(function(){
    $('#btn').click(function(){
        $('#div-1').fadeIn('slow')
        $('#div-2').fadeIn('fast')
        $('#div-3').fadeIn('2000')
        $('#div-4').fadeIn('6000')
    })
})

// 5. Clickable button after checking the box

// 6 . Letting Users to print some documents

// 7 . Don't let username to be too long

// 8 . Forget to bold words_
// 9 . Adding new division

// 10. Select values from a JSON object using jQuery
// 11. Add element within ul list

{
    $(function(){
        $('#btn').click(function(){
            $('menu').append('<li><a href="#">New Item</a></li>')
        })
    })
}
// 12. Know what user puts into textbox
// 13. Change input value