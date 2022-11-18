//Back to top + Progress btn
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    // console.log(scrollValue);
    progressValue.innerText = `${scrollValue}%`;
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#d1d150 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

//scrollreveal code
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2500,
    delay: 400,
})
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// ScrollReveal().reveal('.navbar .logo', { delay: 50 ,origin: "top" });
// ScrollReveal().reveal('.navbar .downloadCV', { delay: 50 ,origin: "top" });
ScrollReveal().reveal('.introTexts div', { delay: 100, origin: "left", interval: 100 });
ScrollReveal().reveal('.myImage', { delay: 100, origin: ""});
ScrollReveal().reveal('#about div', { delay: 300, origin: "bottom", interval: 70 });
ScrollReveal().reveal('.socialMediaHandels a i', { delay: 300, origin: "bottom", interval: 50 });
ScrollReveal().reveal('.socialMedia div', { delay: 500, origin: "bottom", interval: 50 });
ScrollReveal().reveal('.contactForm form input,.contactForm form textarea,.contactForm form button', { delay: 600, origin: "left", interval: 100 });


//Hamburger
const mediaQuery = window.matchMedia('(max-width: 900px)')
const hamburger = document.querySelector('.hamburger');
const hamburgerBtn = document.querySelector('.fa-bars')
const navItems = document.querySelector('.navItems');
if(mediaQuery.matches){
    hamburgerBtn.addEventListener('click',(e)=>{
        if(navItems.style.right == "100%"){
            navItems.style.right = "20%";
            hamburgerBtn.classList.remove('fa-bars');
            hamburgerBtn.classList.add('fa-xmark');
        }else{
            navItems.style.right = "100%";
            hamburgerBtn.classList.add('fa-bars');
            hamburgerBtn.classList.remove('fa-xmark');
        }
    })
    navItems.addEventListener('click',(e)=>{
        navItems.style.right = "100%";
        hamburgerBtn.classList.add('fa-bars');
        hamburgerBtn.classList.remove('fa-xmark');
    })
}
// else{
//     navItems.style.right = 0;
// }
