/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//setDarkMode
if(localStorage.getItem('theme') == 'dark'){
    setDarkMode();

    if(document.getElementById('checkbox').checked){
        localStorage.setItem('checkbox', true)

    }
}

function setDarkMode() {
    let isDark = document.body.classList.toggle('darkmode');
  
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      document.getElementById('checkbox').setAttribute('checked', 'checked');
      document.getElementById('mode-label').textContent = 'Modo Escuro.';
    } else {
      localStorage.removeItem('theme', 'dark');
      document.getElementById('checkbox').removeAttribute('checked');
      document.getElementById('mode-label').textContent = 'Modo Claro.';
    }
  }
  

//button scroll-top
const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }


