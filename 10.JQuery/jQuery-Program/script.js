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

// $(function(){
//     $('#btn').click(function(){
//         $('#div-1').fadeIn('slow')
//         $('#div-2').fadeIn('fast')
//         $('#div-3').fadeIn('2000')
//         $('#div-4').fadeIn('6000')
//     })
// })

// 5. Clickable button after checking the box

// $(document).click(function () {
//     $('#checkbox').change(function () {
//         if ($(this).is(':checked')) {
//             $('#btn').prop('disabled', false);
//         } else {
//             $('#btn').prop('disabled', true);
//         }
//     });
// });

// 6 . Letting Users to print some documents

{
    // $(function(){
    //     $('#btn').click(function(){
    //         window.print()
    //     })
    // })
}

// 7 . Don't let username to be too long

{
    // $(document).click(function() {
    //         const inputlength = 5; 
          
    //         $('#username').on('input', function() {
    //           const username = $(this).val();
          
    //           if (username.length > inputlength) {
    //             $('#error').show(); 
    //           } else {
    //             $('#error').hide(); 
    //           }
    //         });
    //       });
}
// 8 . Forget to bold words_

{
    // $(function () {
    //     $('p').click(function () {
    //         $(this).css({
    //             "font-weight": "bold",
    //             "font-size": "18px",
    //         })
    //     })
    // })
}

// 9 . Adding new division

{
    // $(function(){
    //     $('#btn').click(function(){
    //         $('body').append('New DIV')
    //     })
    // })
}

// 10. Select values from a JSON object using jQuery

{
    $(function () {

        var JSON = [
            { "name": "gujarat", "text": "gujarat" },
            { "name": "surat", "text": "surat" },
            { "name": "Mumbai", "text": "Mumbai" },
            { "name": "Delhi", "text": "Delhi" }
        ]
        $('#btn').click(function () {
            var select = $("<select> </select>")
            .attr("name", "cities");

            $.each(json, function(index, json){
                select.append($("<option></option>")
                .attr("value", json.name).text(json.text));

            })

            $("#data").html(select)
        })
    })

    // $(document).click(function() {
    //         const user = {
    //           "name": "rohan shah",
    //           "age": 24,
    //           "email": "rohan@gmail.com"
    //         };
          
    //         $('#data').click(function() {
    //           $('#name').text("Name: " + user.name);
    //           $('#age').text("Age: " + user.age);
    //           $('#email').text("Email: " + user.email);
    //         });
    //       });
}
// 11. Add element within ul list

{
    // $(function(){
    //     $('#btn').click(function(){
    //         $('ul').append('<li>New Item</li>')
    //     })
    // })
}
// 12. Know what user puts into textbox

{
    // $(function(){
    //     $('#Get').click(function(){
    //         $('#msg').html($('input').val())
    //     })
    // })
}
// 13. Change input value

{
    // $(function () {
    //     $('#btn').click(function () {
    //         $('#input').val("Have a nice day")
    //     })
    // })
}