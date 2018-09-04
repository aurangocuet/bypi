"use strict";
// Start -> For Sliding in HomePage

$("#slideshow > #slide:gt(0)").hide();

setInterval(function() {
  $('#slideshow > #slide:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

//// End -> For Sliding in HomePage