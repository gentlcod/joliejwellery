// preloader ( when loading the page or navigate to another section )

var loader = document.getElementById("preloader");

window.addEventListener("load", () => {
    loader.style.display = "none";
});



// active navbar

let nav = document.querySelector(".navigation-wrap");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}


// whenever the user tap on certain nav buttons the color transform to primamry color

const navItems = document.querySelectorAll('.navbar-nav li a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove the 'active' class from all navigation items
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        // Add the 'active' class to the clicked navigation item
        item.classList.add('active');
    });
});


