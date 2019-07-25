console.log('client.js is loading');

//lets use jQuery
$(document).ready(handleReady)

function handleReady() {
    console.log('DOM is ready');
//     $('.some-class')
//     $('#someID')
//     $('li').parent() //WHO IS YOUR DADDY AND WHAT DOES HE DO?!
//     $('ul').children().first(); //selects first child of element
//     $('li a')
//     $('.mic', '.check')
    // $('.once-blue').css('color', 'blue');
    $('.once-blue').addClass('blue');
    // $('.once-blue').removeClass('blue');
    // $('.once-blue').toggleClass('blue');
    $(document.body).append(`<p>ONE RING TO RULE THEM ALL</p>`).prepend('your hat is pretty cool');
  
    //when i click the add food button, I want to see a console.log
    $('#addFoodButton').on('click', handleClick)
    //jQuery exists now.on('click' , existsInTheFuture, handleDelete)
    $('#foodList ').on('click', '.foodItem', handleDelete);


 }

 function handleClick() {
     console.log('clicked');
     //go get the value of our input
     let newFood = $('#inputFood').val();
     console.log(newFood);
     $('#foodList').append(`<li class="foodItem">${newFood} <button class="foodItem" type="button">Delete Food</button></li>`);
     //need to clear input field after entry
     $('#inputFood').val('');
 }

function handleDelete() {
    console.log('clicked delete');
    //$(this) will get the item that called this function
    $(this).parent().remove();
    // $(this).html('');
    // $(this).empty();

}

console.log('client.js is done loading');


    //  $('#foodList').append(`<li>` + newFood + `</li>`);