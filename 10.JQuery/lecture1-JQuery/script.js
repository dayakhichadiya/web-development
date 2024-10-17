// JQurey Syntax 

// $(function(){
//     $('#btn').click(function(){
//         $('#heading').hide()
//     })
// })

// $(function(){
//     $('#show-btn').click(function(){
//         $('#heading').show()
//     })
// }
// )

// $(function(){
//     $('#toggle-btn').click(function(){
//         $('#heading').toggle();
//     })
// })

// JQuery Style

$(function(){
    $('#btn').click(function(){
        $('#box').css({
            backgroundColor: 'blue',
            height : '400px',
            width: '400px'
        })
    }
    )
})


//jQuery Fade Method

/*

fadeIn
fadeOut
fadeToggle
fadeTo

*/

// $(function(){
//     $('#fade').click(function(){
//         $('#div1').fadeIn('slow')
//         $('#div2').fadeIn('fast')
//         $('#div3').fadeIn(2000)
//         $('#div4').fadeIn(6000)
//         $('#div5').fadeIn(10000)
//     })
// })

// $(function(){
//     $('#fade').click(function(){
//         $('#div1').fadeOut('slow')
//         $('#div2').fadeOut('fast')
//         $('#div3').fadeOut(2000)
//         $('#div4').fadeOut(6000)
//         $('#div5').fadeOut(10000)
//     })
// })

// $(function(){
//     $('#fade').click(function(){
//         $('#div1').fadeToggle('slow')
//         $('#div2').fadeToggle('fast')
//         $('#div3').fadeToggle(2000)
//         $('#div4').fadeToggle(6000)
//         $('#div5').fadeToggle(10000)
//     })
// })

$(function(){
    $('#fade').click(function(){
        $('#div1').fadeTo('slow', 0.2)
        $('#div2').fadeTo('fast', 0.4)
        $('#div3').fadeTo(2000, 0.6)
        $('#div4').fadeTo(6000, 0.8)
        $('#div5').fadeTo(10000, 0.9)
    })
})