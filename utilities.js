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
    const root = document.querySelector(':root');
    const color = thisStyle.getPropertyValue('--color');
    const textcolor = thisStyle.getPropertyValue('--text-color');
    const complement = thisStyle.getPropertyValue('--complement');
    const background = thisStyle.getPropertyValue('--background');
    const backgroundmiddle = thisStyle.getPropertyValue('--background-middle');
    const backgroundbody = thisStyle.getPropertyValue('--background-body');
    const darkcolor = 'whitesmoke';
    const darkbackground = '#383838';
    const darkbackgroundbody = '#121110';
    const darkbackgroundmiddle = '#302f2e';
    const darkcomplement = '#595c5a';
    var isdark = false;

    function lightMode(){
        root.style.setProperty('--color', color);
        root.style.setProperty('--text-color', textcolor);
        root.style.setProperty('--dark-hover', textcolor);
        root.style.setProperty('--background-body', backgroundbody);
        root.style.setProperty('--background-middle', backgroundmiddle);
        root.style.setProperty('--background', background);
        root.style.setProperty('--complement', complement);
        root.style.setProperty('--filter', 'invert(0%)');
        sunLogo[0].style.filter = 'invert(100%)';
        sunLogo[0].src = 'images/moonlogo.png';
        isdark = false;
    }

    function darkMode(){
        root.style.setProperty('--color', darkcolor);
        root.style.setProperty('--text-color', darkcolor);
        root.style.setProperty('--dark-hover', backgroundbody);
        root.style.setProperty('--background-body', darkbackgroundbody);
        root.style.setProperty('--background-middle', darkbackgroundmiddle);
        root.style.setProperty('--background', darkbackground);
        root.style.setProperty('--complement', darkcomplement);
        root.style.setProperty('--filter', 'invert(100%)');
        sunLogo[0].style.filter = 'invert(0%)';
        sunLogo[0].src = 'images/sunlogo.png';
        isdark = true;
    }

    function setMode(e){
        if (isdark){
            lightMode();
        }
        else {
            darkMode();
        }
    }

    darkButton[0].addEventListener("click", setMode);
    
}