(() => {
    let sliderImage = document.querySelector(".slider__image")
    let paginates = document.querySelectorAll(".slider__paginate")
    paginates[0].classList.add("paginate__active")
    let i = 0
    let sliderArrow = document.querySelectorAll(".slider__arrow")
    
    let intervalSlider = setInterval(() => slide_item() , 4000)
    
    sliderArrow.forEach(el => {
        el.addEventListener("click", () => {
            clearInterval(intervalSlider)
    
            if(el.classList.contains("arrow__left")){
                i--
                i < 0 ? i = 2 : ""
            } else {
                i++
                i > 2 ? i = 0 : ""
            }
            
            clearClasses(paginates, "paginate__active")
            sliderImage.classList.add("loader")
            setTimeout(() => {
                paginates[i].classList.add("paginate__active")
                sliderImage.src = `./images/slide_${i + 1}.jpg`
                sliderImage.classList.remove("loader")
    
                intervalSlider = setInterval(() => slide_item() , 4000)
            }, 500)
        })
    })
    
    function slide_item(){
        i++
        if(i > 2) i = 0 
    
        clearClasses(paginates, "paginate__active")
        sliderImage.classList.add("loader")
    
        setTimeout(() => {
            paginates[i].classList.add("paginate__active")
            sliderImage.src = `./images/slide_${i + 1}.jpg`
            sliderImage.classList.remove("loader")
        }, 500)
    }
    
    function clearClasses(DOMElements, className){
        DOMElements.forEach(el => el.classList.remove(className))
    }
})()