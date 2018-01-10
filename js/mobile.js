var buttonMenu = document.querySelector('.button_menu');
var popuMenu = document.querySelector('.popup_menu');
var menu_anchor = popuMenu.querySelectorAll('.popup_menu > a');


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

for (var i = 0; i < menu_anchor.length; i++) {
    var nav_anchor = (menu_anchor[i]);
    nav_anchor.addEventListener("click", showMenu);
}
