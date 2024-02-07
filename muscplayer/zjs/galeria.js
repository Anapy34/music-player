$(function(){
   // See if this is a touch device
   if ('ontouchstart' in window)
   {
      // Set the correct [touchscreen] body class
      $('html').removeClass('no-touch').addClass('touch');
     
      // Add the touch toggle to show text when tapped
      $('.gallery img').click(function(){
         $(this).closest('li').toggleClass('touchFocus');
      });
   }
});