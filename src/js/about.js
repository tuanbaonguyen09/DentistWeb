import "../scss/index.scss";

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

require ('timepicker/jquery.timepicker')
require ('timepicker/jquery.timepicker.min.css')

// popWindow open manually
$('#scheduler').on('click', function(){
  $('.coveredLayer1').removeClass('hidden');
})

$('#exitPop').on("click", function(){
  $('.coveredLayer1').addClass('hidden');
});

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
//Animation onscroll Handler 
const observer = new IntersectionObserver (entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            const romeo = entry.target.classList.item(1)
            const juliet = `animate-${romeo}`
            entry.target.classList.replace(romeo,juliet)
            observer.unobserve(entry.target)
        }
    })
})

const animatedItem = document.querySelectorAll('.animated')
animatedItem.forEach((item)=>{
    observer.observe(item);
})

//Dot number format handler 
function dotsNumberHandler(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + '.' + '$2');
  }
  return val;
}

const countUp  = (entry) => {
  $(entry.target).each(function () {
    var $this = $(this);
    var countTo = $this.attr("data-count");
    $({ counter: $this.text() }).animate({ counter: countTo  }, {
      duration: 2500,
      easing: 'swing',
      step: function () {
        $this.text(dotsNumberHandler(Math.floor(this.counter)));
        counter_observer.unobserve(entry.target)
      },
      complete: function() {
        $this.text(dotsNumberHandler(this.counter));
      }
    });
  });
}

const counter_observer = new IntersectionObserver (entries => {
  entries.forEach (entry => {
    if (entry.isIntersecting){
      countUp(entry)
    }
  })
})

const counterItems = document.querySelectorAll('.counter')
counterItems.forEach(item => {
  counter_observer.observe(item)
})

$(document).ready(function(){
    //Time picker format
     $('input.timepicker').timepicker({timeFormat: 'H:i',});
})



// popWindow open manually
$('#scheduler').on('click', function(){
    $('.coveredLayer1').removeClass('hidden');
})


$('#exitPop').on("click", function(){
    $('.coveredLayer1').addClass('hidden');
});


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