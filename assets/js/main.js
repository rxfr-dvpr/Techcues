// logo reload start

const logoReload = () => {
    const logo = document.querySelectorAll('.all__logo')
    
    logo.forEach(logos => {
        logos.addEventListener('click', () => {
            location.reload()
        })
    });
}

logoReload()

// logo reload end


// header nav animation start

const navAnim = () => {
    
    const header = document.querySelector('header')
    const headerNav = document.querySelector('.header__nav')
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > header.offsetTop) {
            headerNav.classList.add('active')
        } else {
            headerNav.classList.remove('active')
        }
    })

}

navAnim()


// header nav animation end

// to top btn start

const toTop = () => {
    const toTopBtn = document.querySelector('.toTop')
    const header = document.querySelector('#header')

    window.addEventListener('scroll', () => {
        if (window.scrollY > header.offsetHeight) {
            toTopBtn.classList.add('activated')
        } else {
            toTopBtn.classList.remove('activated')
        }
    })
}

toTop()

// to top btn end

// burger anim start

const burgerMenu = () => {
    const burgerBtn = document.querySelector('.burger-btn')
    const headerNavMenu = document.querySelector('.header__nav-list')

    burgerBtn.addEventListener('click', function () {
        burgerBtn.classList.toggle('activated')
        headerNavMenu.classList.toggle('opened')
    })

    headerNavMenu.addEventListener('click', function (e) {
        console.log(e.currentTarget);
    })
}

burgerMenu()

// burger anim end