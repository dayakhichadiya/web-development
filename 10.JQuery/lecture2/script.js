

/* JQuery Slide */

// SlideDown
// SlideUp
// SlideToggle



// $(function(){
//     $('#slide_btn').click(function(){
//         $('#slide_content').slideDown()
//     })
// })

// $(function(){
//     $('#slide_btn').click(function(){
//         $('#slide_content').slideUp()
//     })
// })

// $(function(){
//     $('#slide_btn').click(function(){
//         $('#slide_content').slideToggle()
//     })
// }
// )

// jQuery Animate Effect

$(function(){
    $('#box').click(function(){
        $(this).animate({
            left: '500px',
            height: '400px'
        }, 2000)
    })

})

