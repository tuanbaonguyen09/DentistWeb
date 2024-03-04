import "../scss/index.scss";
$(document).ready(function(){
    paginationDisplay(1)

    paginationClickHandler()
})
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

// popWindow open manually
$('#scheduler').on('click', function(){
    $('.coveredLayer1').removeClass('hidden');
})

$('#exitPop').on("click", function(){
    $('.coveredLayer1').addClass('hidden');
});

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

//Pagination Handler
let currentPage = 1
const priceList = $('#price-List li').get()

const paginationStatusHandler = () => {
    const itemList = document.querySelectorAll('.item')
    itemList.forEach(item => {
        item.classList.remove('active')
        const pageIndex = item.getAttribute('page-index')
        if (currentPage == pageIndex){
            item.classList.add('active')
        }
    })
}
const paginationClickHandler = () => {
    $('#pagination-Price').on('click', (event)=>{
        const pageIndex = event.target.getAttribute("page-index")
        paginationDisplay(pageIndex)
    })
}

const paginationDisplay = (pageNumber) => {
    currentPage = pageNumber
    paginationStatusHandler()

    priceList.forEach((item,index) => {
        item.classList.add('hidden')
        if(index == pageNumber-1){
            item.classList.remove('hidden')
        }
    })
}

//Menu Dropdown on
$('#menu-button').on('click', function(){
    $('.menu-drop-down').toggleClass('hidden');
})