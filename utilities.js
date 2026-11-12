window.onload = function() {
    ScrollReveal().reveal('#projects');
    ScrollReveal().reveal('#about');
    ScrollReveal().reveal('.toobik', { delay : 10 });
    ScrollReveal().reveal('#toobikimg', { delay : 300 });
    ScrollReveal().reveal('#contact');
    ScrollReveal().reveal('.rigidity', { delay : 10 });
    ScrollReveal().reveal('#rigidityimg', { delay : 300 });
    ScrollReveal().reveal('.sholbuk', { delay : 10 });
    ScrollReveal().reveal('#sholbukimg', { delay : 300 });

    const darkButton = document.getElementsByClassName("darkbutton");
    const sunLogo = document.getElementsByClassName("sunlogo");
    const sections = document.getElementsByTagName("section");
    const thisStyle = window.getComputedStyle(document.body);

    function ShiftBackground(item){
        item.style.background = thisStyle.getPropertyValue('--dark-background-middle');
        item.style.borderColor = thisStyle.getPropertyValue('--dark-text-color');
    }

    darkButton[0].addEventListener("click", function(e){
        darkButton[0].style.background = thisStyle.getPropertyValue('--dark-text-color');
        sunLogo[0].style.filter = 'invert(0%)';
        sunLogo[0].src = 'images/sunlogo.png';
        document.body.style.background = thisStyle.getPropertyValue('--dark-background-body');
        for (i = 0; i < sections.length; i++){
            ShiftBackground(sections[i]);
        }
    });

    
}