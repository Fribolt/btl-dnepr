var buttonMenu = document.querySelector('.button_menu');
var popuMenu = document.querySelector('.popup_menu');

function showMenu() {
    if (!popuMenu.classList.contains("menu_active")) {
        popuMenu.classList.add('menu_active');
        buttonMenu.classList.add('active_button');
    } else {
        popuMenu.classList.remove('menu_active');
        buttonMenu.classList.remove('active_button');
    }

}

buttonMenu.addEventListener("click", showMenu);
