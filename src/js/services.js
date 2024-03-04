import "../scss/index.scss";
// popWindow open manually
$('#scheduler').on('click', function(){
    $('.coveredLayer1').removeClass('hidden');
})

$('#exitPop').on("click", function(){
    $('.coveredLayer1').addClass('hidden');
});

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

//Menu Dropdown on
$('#menu-button').on('click', function(){
    $('.menu-drop-down').toggleClass('hidden');
})