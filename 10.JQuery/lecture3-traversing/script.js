
//  jQuery addClass , removeClass , And toggleClass Method


$(function(){
    $('#btn1').click(function(){
        $('#h1').addClass('heading')
    })
}
)

$(function(){
    $('#btn2').click(function(){
        $('#h1').removeClass('heading')
    })
})  


$(function(){
    $('#btn3').click(function(){
        $('#h1').toggleClass('heading')
    })
})  

//  jQuery Decendent Method

// children()  , find()

{
    $(function(){
        $('#btn').click(function(){
            $('div').children().css({
                backgroundColor:'purple'
            })
        })
    })
}