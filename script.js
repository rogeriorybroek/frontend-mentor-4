const mainInfo = document.querySelectorAll('.main-info')





mainInfo.forEach((element, index) => {
    const subInfo = element.nextElementSibling
    const arrow = element.lastElementChild
    const subTitle = element.firstElementChild

    element.onclick = () => {
    
        if (subInfo.classList.contains('hidden')) {
            subInfo.classList.remove('hidden')
            arrow.style.rotate = '180deg'
            subTitle.style.fontWeight = 'bold'
        } else {
            subInfo.classList.add('hidden')
            arrow.style.rotate = ''
            subTitle.style.fontWeight = ''
        }
        
    }

})
