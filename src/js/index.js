import "../scss/index.scss";

import 'slick-carousel';
import "slick-carousel/slick/slick.css";

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

require ('timepicker/jquery.timepicker')
require ('timepicker/jquery.timepicker.min.css')

$(document).ready(function(){
    //Banner Slider

    $('#bannerSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows:true,
                    nextArrow: $('#bannerSlider-next'),
                    prevArrow: $('#bannerSlider-prev'),
                }
            },
        ]
    })

    //User reveiew Slider
    $('#userSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: $('.slick-next'),
        prevArrow: $('.slick-prev'),
    })

    //Time picker format
     $('input.timepicker').timepicker({timeFormat: 'H:i',});

    //Animation onscroll Handler 
    const observer = new IntersectionObserver (entries => {
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                if ($(entry.target).parents('.slick-cloned').length){
                    observer.unobserve(entry.target)
                }else{
                    const romeo = entry.target.classList.item(1)
                    const juliet = `animate-${romeo}`
                    entry.target.classList.replace(romeo,juliet)
                }
                observer.unobserve(entry.target)
            }
        })
    })

    const animatedItem = document.querySelectorAll('.animated')
        animatedItem.forEach((item)=>{
            observer.observe(item)
        })
})

//Slick refresh
$(window).resize(function(){
    $('#userSlider').slick('refresh');
    $('#bannerSlider').slick('refresh');
});


// popWindow open manually
$('#scheduler').on('click', function(){
    $('.coveredLayer1').removeClass('hidden');
})

$('#exitPop').on("click", function(){
    $('.coveredLayer1').addClass('hidden');
});
// Exit pop window
// const coverPanel = document.querySelector('.coveredLayer2');
// // window.addEventListener('click', function(event){
// //     if(event.target === coverPanel ){
// //         $('.coveredLayer1').addClass('hidden');
// //     }
// // });

//scroll top button function
window.onscroll = () =>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        $('#scrollTop').removeClass('hidden')
    else
        $('#scrollTop').addClass('hidden')
    
}
$('#scrollTop').on("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

//datepicker Init
$("#datePicker").datepicker({
    dateFormat: 'dd/mm/y',
    onSelect: function(dateText, target) {
      $(target).val(dateText); // Write the value in the input
    }
});
//Time picker z-index
$('.ui-timepicker-container').addClass('z-50')


//Menu Dropdown on
$('#menu-button').on('click', function(){
    $('.menu-drop-down').toggleClass('hidden');
})