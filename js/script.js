
$(document).ready(function(){
    hamburger();
    showModal();
    closeModal();
    slider();
    
    $('.slide-description').hide();
    $('.slick-current').find('.slide-description').show();
    displaySlideDescription();

   });

 function displaySlideDescription() {
    $(".slick-slide").click(function() {
      if ($('.slick-slide').hasClass('slick-current')) {
        $('.slick-slide').find('.slide-description').hide();
         $('.slick-current').find('.slide-description').show();
      } 
    });
  };
    
 function slider(){ 
    $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      variableWidth: true,
        centerPadding: '50px',
        draggable: true,
        focusOnSelect: true,
        touchMove: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
            ]
    });
 }

function hamburger(){
    $('.icon.ion-navicon').click(function(){
        navigation_list=$('.nav');
        navigation_search=$('.search');
        navigation=$('.navigation');

        icon=$('.menu-icon i');
        navigation_list.toggleClass('hidden');
        navigation_search.toggleClass('hidden');
        if(icon.hasClass('ion-navicon')){
            icon.removeClass('ion-navicon');
            icon.addClass('ion-android-close');
            $('.navigation').addClass('nav-mobile');
            $('nav').addClass('nav-mobile');
            $('.logo').addClass('mobile');
            $('.menu-icon').addClass('mobile');
        }else{
            icon.removeClass('ion-android-close');
            icon.addClass('ion-navicon');
            $('.navigation').removeClass('nav-mobile');
            $('nav').removeClass('nav-mobile');
            $('.logo').removeClass('mobile');
            $('.menu-icon').removeClass('mobile');
        }
    });
}

function showModal(){
    $('.city').on('click',function(){
        var id = $(this).data('id');
        $('#'+id).addClass('active');
            });
}

function closeModal(){
    $('.close-modal').on("click", function(){
        $(this).parent('.modal').removeClass('active');
    });
        
    }

/*function showFirstDescriptionSlide(){
    var slideDescription = $('.slide-description');
    var slide = $('.slide');
    var currentSlide = $('.current');
    
    $(slideDescription).hide();
    $(currentSlide).find('.slide-description').show();
    
    displaySlideDescription();
}
   
function displaySlideDescription(){
    var slideDescription = $('.slide-description');
    var slide = $('.slide');
    var currentSlide = $('.current');
    
   $(slide).on("click",function(){
       $(slide).removeClass('current');
       $(currentSlide).removeClass('current');
       $(slide).find('.slide-description').hide();
       $(currentSlide).find('.slide-description').hide();
       $(this).addClass('current');
       
       if($(slide).hasClass('current')){
           $(this).find('.slide-description').show();
       }   
       });
}*/