import "../scss/index.scss";

// popWindow open manually
$('#scheduler').on('click', function(){
    $('.coveredLayer1').removeClass('hidden');
})

$('#exitPop').on("click", function(){
    $('.coveredLayer1').addClass('hidden');
});

$('document').ready(function(){
    //Pagination Function
    loadPageButton(pageCount)
    currentPageDisplay(1)

    paginationButtonHandler()
    paginationNumberHandler()
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
// Pagination Funtion

const pageLimit = 4 //slides per page
const pageList = $('#list-items li').get()
const pageNumber = 1
const prevPaginationButton = $('#pagination #prev')
const nextPaginationButton =  $('#pagination #next')


let currentPage = 1
const pageCount  = Math.ceil(pageList.length / pageLimit)

const paginationButtonHandler = () => {
    //Click Handler
    nextPaginationButton.on("click", function(){
        currentPageDisplay(currentPage+1 <= pageCount ? currentPage+1 : 1 );
    })
    prevPaginationButton.on("click", function(){
        currentPageDisplay(currentPage-1 >= 1 ? currentPage-1 : pageCount);
    })
}

const disableHandler = (element) => {
    element.attr("disabled", true);
}   
const enableHandler = (element) => {
    element.attr("disabled", false);
}

const paginationButtonStatusHandler = () => {
    if(currentPage == 1){
        disableHandler(prevPaginationButton)
    }else enableHandler(prevPaginationButton)

    if(pageCount == currentPage){
        disableHandler(nextPaginationButton)
    } else enableHandler(nextPaginationButton)
}


const paginationNumberHandler = () => {

    $('#pagination-Num button').on('click', function(event){
        const pageIndex = event.target.getAttribute("page-index");
        currentPageDisplay(pageIndex);
    })
}

const paginationNumberStatusHandler = () => {
    const numberButtonList = $('#pagination-Num button').get()
    numberButtonList.forEach((current)=>{
        current.classList.remove('active')
        const pageIndex = current.getAttribute("page-index")
        if(currentPage == pageIndex){
            current.classList.add('active')
        }
    })

}
const addButton = (pageNumber) => {

    $('#pagination-Container').append(`                                
    <li id="pagination-Num">
        <button page-index ="${pageNumber}" class="w-8 h-8 
        hover:rounded-full hover:bg-primary-3 hover:text-white 
        text-txt-2 text-body-2 tracking-[0.2px]">${pageNumber}</button>
    </li>
    `)
}

// const insertManyButton = (button) => {
//     if (pageCount > 6) {
//         for (let i = 6; i <pageCount; i++){
//             if (button.attr('page-index') == i)
//             button.addClass('hidden')
//         }
//     }
// }

const loadPageButton = (pageCount) => {
    for (let i = 1; i <= pageCount; i++){
        addButton(i);
    }
}

const currentPageDisplay = (pageNumber) => {
    currentPage = pageNumber
    paginationButtonStatusHandler()
    paginationNumberStatusHandler()
    // insertManyButton($('#pagination-Num button'));

    const startItem = (pageNumber-1)*pageLimit
    const endItem = (pageNumber)*pageLimit

    pageList.forEach((current, index) => {
        current.classList.add('hidden')
        if (index >= startItem && index < endItem)
            current.classList.remove('hidden')
    })
}


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