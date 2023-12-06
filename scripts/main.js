body = document.querySelector('body')
about = body.querySelector('.about')
burgerBtn = body.querySelector('.header-burger')
burgerMenu = body.querySelector('.header-burger_menu')

burgerBtn.addEventListener('click', (event) => {
    isOpen = event.currentTarget.classList.contains('active')

    body.style.overflow = 'visible'
    about.style.filter = 'none'
    event.currentTarget.classList.toggle('active')
    burgerMenu.classList.toggle('active')
    if (!isOpen) {
        body.style.overflow = 'hidden'
        about.style.filter = 'blur(4px)'
    }
})