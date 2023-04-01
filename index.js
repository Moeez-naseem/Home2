document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
          document.body.style.paddingTop = '0';
        } 
    });
});

hamburger = document.querySelector('.hamburger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
a = document.querySelector('.a')
b = document.querySelector('.b')
c = document.querySelector('.c')
d = document.querySelector('.d')
e = document.querySelector('.e')
f = document.querySelector('.f')
g = document.querySelector('.g')


hamburger.addEventListener('click', ()=>{
    navlist.classList.toggle('v');
    a.classList.toggle('v');
    b.classList.toggle('v');
    c.classList.toggle('v');
    d.classList.toggle('v');
    e.classList.toggle('v');
    f.classList.toggle('v');
    g.classList.toggle('v');
    navbar.classList.toggle('h');
})