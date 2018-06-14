(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  $("#unicorn").css("left", $("#unicorn").position().left).circulate({
    sizeAdjustment: 175,
    speed: 2000,
    width: -840,
    height: -50,
    loop: true,
    zIndexValues: [1, 50, 50, 1]
  })

  });// end of document ready


})(jQuery); // end of jQuery name space




// <script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>
// <script type='text/javascript' src='js/jquery.easing.1.2.js'></script>
// <script type='text/javascript' src='js/jquery.circulate.js'></script>
  
// $("#anything).circulate({

//   speed: 400,                  // Speed of each quarter segment of animation, 1000 = 1 second
//   height: 200,                 // Distance vertically to travel
//   width: 200,                  // Distance horizontally to travel
//   sizeAdjustment: 100,         // Percentage to grow or shrink
//   loop: false,                 // Circulate continuously
//   zIndexValues: [1, 1, 1, 1]   // Sets z-index value at each stop of animation

// });