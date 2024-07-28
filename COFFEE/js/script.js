let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorALL('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    Sections.forEach( sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = set.getAttribute('id');


        if(
            top >= offset && top < offset + height
        ){
            navlinks.forEach(links=>{links.classList.remove('active')
                document.querySelector('header nav a [href*='+id +']').classList.add("active")
            })
        }
    })
}
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}