const nav_links = document.querySelectorAll('.nav_link');

nav_links.forEach(link => {
    const href = link.getAttribute('href').split('#')[1];
    link.textContent = href;
});


// Show Menu 

const nav_toggle = document.querySelector('#nav_toggle'),
    nav_menu = document.querySelector('#nav_menu');

nav_toggle.addEventListener('click', () => {
    nav_menu.classList.toggle('show_menu');
});

// Remove Menu 
nav_menu.addEventListener('click', e => {
    if(e.target.classList.contains('nav_link'))
        nav_menu.classList.remove('show_menu');
});


// Scroll Active Link
const sections = document.querySelectorAll('section[id]');
function scroll_active(){
    const scrollY = this.pageYOffset;
    
    sections.forEach(section => {
        const id = section.getAttribute('id'),
              height = section.offsetHeight,
              top = section.offsetTop - 50;
        
        if(scrollY >= top && scrollY <= (top + height)){
            document.querySelector(`.nav_menu a[href*='${id}']`).classList.add('active_link');
        } else {
            document.querySelector(`.nav_menu a[href*='${id}']`).classList.remove('active_link');
        }
    })
}

window.addEventListener('scroll', scroll_active);


// Change Scroll Header 
function scroll_header(){
    const header = document.querySelector('header');
    
    if(this.scrollY >= 80)
        header.classList.add("scroll_header");
    else 
        header.classList.remove("scroll_header");
}

window.addEventListener('scroll', scroll_header);

// Scroll Up 
function scroll_up(){
    const scroll_up = document.querySelector('#scroll_up');
    if(this.scrollY >= 560)
        scroll_up.classList.add("show_scroll");
    else 
        scroll_up.classList.remove("show_scroll");
}

window.addEventListener('scroll', scroll_up);


// Theme Toggle

const theme_button = document.querySelector('#theme_button');
const dark_theme = "dark_theme";
const icon_theme = "bx-toggle-right";

const selected_theme = localStorage.getItem("selected_theme");
const selected_icon = localStorage.getItem("selected_icon");

const get_current_theme = () => document.body.classList.contains(dark_theme) ? "dark" : "light";

const get_current_icon = () => theme_button.classList.contains(icon_theme) ? 'bx-toggle-left' : 'bx-toggle-right';

if(selected_theme){
    document.body.classList[selected_theme === 'dark' ? 'add' : 'remove'](dark_theme);
    theme_button.classList[selected_icon === 'bx-toggle-left' ? 'add' : 'remove'](icon_theme);
}

theme_button.addEventListener('click', () => {
    document.body.classList.toggle(dark_theme);
    theme_button.classList.toggle(icon_theme);
    
    localStorage.setItem('selected_theme', get_current_theme());
    localStorage.setItem('selected_icon', get_current_icon());
})























