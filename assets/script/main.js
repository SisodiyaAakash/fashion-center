function functionWrapper($) {
   var fashionChild = {
      /**
       * Main entry point
       */
      init: function () {
         fashionChild.registerEventHandlers();
         fashionChild.customFunctions();
         fashionChild.sliderFunctions();
      },

      /**
       * Registers event handlers
       */
      registerEventHandlers: function () {
         // I'm providing example here Mr. Manish
         $(document).on('click', 'selector', fashionChild.functionName);
      },

      /**
       * Custom Functions
       */
      customFunctions: function () {
         //Custom Function will be here
      },

      /**
       * Slider Functions
       */
      sliderFunctions: function () {
         // Navigation Slider
         var navSlider = $('.gallery-slider.nav-slider');
         if (navSlider.find('.gallery-itm-wrap').length > 1) {
             navSlider.slick({
                 dots: false,
                 infinite: false,
                 speed: 300,
                 slidesToShow: 4,
                 slidesToScroll: 1,
                 vertical: true,
                 arrows: true,
                 prevArrow: '<span class="slide-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#888888"> <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" /> </svg></span>',
                 nextArrow: '<span class="slide-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#888888"> <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" /> </svg></span>',
                 asNavFor: '.gallery-slider.thumbnail-slider', // Use selector without main.product-detail-wrapper .product-detail-inner .detail-block-section.media-section
             });
         } 
     
         var thumbSlider = $('.gallery-slider.thumbnail-slider');
         if (thumbSlider.find('.gallery-itm-wrap').length > 1) {
             thumbSlider.slick({
                 dots: false,
                 infinite: false,
                 speed: 300,
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 vertical: true,
                 arrows: false,
             });
         }
     },
     

      /**
       * Mr. Manish 
       * Define the function of the register event handler here
       */
      functionName: function () {
         // So much code here
      },

   }; // end fashionChild

   $(document).ready(fashionChild.init);

} // end fashionChildWrapper()

functionWrapper(jQuery);
