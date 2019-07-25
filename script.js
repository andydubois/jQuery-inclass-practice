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
    $(document.body).append(`<p>ONE RING TO RULE THEM ALL</p>`).prepend('your hat is pretty cool')
 }



console.log('client.js is done loading');