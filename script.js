const MenuMobile = document.querySelector('.menu-mobile');
const Action = ()=>{
    const Menu = document.querySelector('.area_menu_mobile');
    if(Menu.classList.contains('active') == true) {
        Menu.classList.remove('active');
    }else{ Menu.classList.add('active');
    }
}

MenuMobile.addEventListener('click',Action);