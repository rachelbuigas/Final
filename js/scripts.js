   // Mix it Up

   $('#reset').click(function() {
       $('#Container').mixItUp('filter', '');
   });

   $(function() {

       $('#Container').mixItUp({
           load: {
               filter: 'all'
           },
           controls: {
               toggleFilterButtons: false, //allowing more than one filter button to be selected at the same time, try changing to false
           },
           animation: {
               enable: true,
               effects: 'fade scale',
               duration: 1000,
               easing: 'ease',
               perspectiveDistance: '3000',
               perspectiveOrigin: '50% 50%',
               queue: true,
               queueLimit: 1,
               animateChangeLayout: false,
               animateResizeContainer: false,
               animateResizeTargets: false,
               staggerSequence: false,
               reverseOut: false
           }


       });


   });

 var parts = window.location.hash;
 if (parts) {
   setTimeout( function () { jQuery(parts).click(); }, 850);
 } 

   if (screen.width >= 600) {
       $.fn.moveIt = function() {
           var $window = $(window);
           var instances = [];

           $(this).each(function() {
               instances.push(new moveItItem($(this)));
           });

           window.addEventListener('scroll', function() {
               var scrollTop = $window.scrollTop();
               instances.forEach(function(inst) {
                   inst.update(scrollTop);
               });
           }, { passive: true });
       }

       var moveItItem = function(el) {
           this.el = $(el);
           this.speed = parseInt(this.el.attr('data-scroll-speed'));
       };

       moveItItem.prototype.update = function(scrollTop) {
           this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
       };

       // Initialization
       $(function() {
           $('[data-scroll-speed]').moveIt();
       });
   }



// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

