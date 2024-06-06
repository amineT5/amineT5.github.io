/*================= SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that varibles exists
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We ADD  THE SHOW MENU CLASS TO THE DIV TAG WITH THE nav_menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*====================== REMOVE MENU ==================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // WHEN WE CLICK ON EACH nav_link, WE REMOVE THE SHOW MENU CLASS
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*================ CHANGE BG COLOR ================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    //WHEN THE SCROLL IS GREATER THAN 200VH, ADD THE SCROLL-HEADER CLASS TO THE HEADER TAG
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

/*================ SHOW SCROLL TOP =================*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //when the scroll is higher than 560vh, add the show -scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*================ SCROLL REVEAL ================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})

sr.reveal(
    `.home_data, .home_img,
    .about_data, .about_img,
    .services_content, .menu_img,
    .app_data, .app_img,
    .contact_data, .contact_button,
    .footer_content`, {
        interval: 200
})
 document.addEventListener("DOMContentLoaded", function() {
        const popupLinks = document.querySelectorAll('.popup-link');
        const closePopupIcons = document.querySelectorAll('.close-popup');
        const body = document.querySelector('body');
        let unlock = true;
        const timeout = 300;

        if (popupLinks.length > 0) {
          popupLinks.forEach(link => {
            link.addEventListener("click", function(e) {
              e.preventDefault();
              const popupId = link.getAttribute('href').replace('#', '');
              const currentPopup = document.getElementById(popupId);
              if (currentPopup) {
                popupOpen(currentPopup);
              }
            });
          });
        }

        if (closePopupIcons.length > 0) {
          closePopupIcons.forEach(icon => {
            icon.addEventListener("click", function(e) {
              e.preventDefault();
              popupClose(icon.closest('.popup'));
            });
          });
        }

        function popupOpen(currentPopup) {
          if (currentPopup && unlock) {
            const activePopup = document.querySelector('.popup.open');
            if (activePopup) {
              popupClose(activePopup, false);
            } else {
              bodyLock();
            }
            currentPopup.classList.add('open');
            currentPopup.addEventListener("click", function(e) {
              if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
              }
            });
          }
        }

        function popupClose(activePopup, doUnlock = true) {
          if (unlock) {
            activePopup.classList.remove('open');
            if (doUnlock) {
              bodyUnlock();
            }
          }
        }

        function bodyLock() {
          const lockPaddingValue = window.innerWidth - document.querySelector('.popup').offsetWidth + 'px';
          body.style.paddingRight = lockPaddingValue;
          body.classList.add('lock');
          unlock = false;
          setTimeout(function() {
            unlock = true;
          }, timeout);
        }

        function bodyUnlock() {
          setTimeout(function() {
            body.style.paddingRight = '0px';
            body.classList.remove('lock');
            unlock = false;
            setTimeout(function() {
              unlock = true;
            }, timeout);
          }, timeout);
        }
      });
