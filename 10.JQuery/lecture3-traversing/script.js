
//  jQuery addClass , removeClass , And toggleClass Method


$(function () {
    $('#btn1').click(function () {
        $('#h1').addClass('heading')
    })
}
)

$(function () {
    $('#btn2').click(function () {
        $('#h1').removeClass('heading')
    })
})


$(function () {
    $('#btn3').click(function () {
        $('#h1').toggleClass('heading')
    })
})

//  jQuery Decendent Method

// children()  , find()

{
    // $(function(){
    //     $('#btn').click(function(){
    //         $('ul').children().css({
    //             backgroundColor:'green'
    //         })
    //     })
    // })

    //     $(function(){
    //         $('#btn').click(function(){
    //             $('div').find('p').css({
    //                 backgroundColor: 'blue'
    //             })
    //         })
    //     })
    // }

}

/*
Sibling Method in jQuery

siblings()
next()
nextAll()
nextUntil()
prev()
prevAll()
PrevUntil()

*/

// $(function(){
//     $('#btn').click(function(){
//         $('li').siblings().css('background-color', 'pink')
//     })
// }
// )

// $(function(){
//     $('#btn').click(function(){
//         $('h1').next().css('background-color', 'pink')
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('h1').nextAll().css('background-color', 'yellow')
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('p').nextUntil('div').css('background-color', 'cyan')
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('p').prev().css('background-color', 'cyan')
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('p').prevAll().css('background-color', 'cyan')
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('p').prevUntil('h1').css('background-color', 'cyan')
//     })
// })


/*

jQuery Filter Method

first()
last()
eq()

*/

// $(function () {
//     $('#btn').click(function () {
//         $('h1').first().css({
//             'background-color': 'green',
//             'color': 'white',
//             'text-align': 'center',
//             'border-radius': '30px'

//         }
//         )
//     })
// })

// $(function () {
//     $('#btn').click(function () {
//         $('h1').last().css({
//             'background-color': 'cyan',
//             'text-align': 'center',
//             'border-radius': '30px'
//         })
//     })
// })

$(function () {
    $('#btn').click(function () {
        $('p').eq(3).css({
            'background-color': 'purple',
            'text-align': 'center',
            'border-radius': '30px',
            'color': 'white',
            'padding' : '10px'
        })
    })
})