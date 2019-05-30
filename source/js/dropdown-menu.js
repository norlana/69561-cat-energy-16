(function() {
    var nav = document.querySelector('.navigation');
    var toggle = nav.querySelector('.navigation__toggle');

    nav.classList.remove('navigation--no-js');

    toggle.addEventListener('click', function() {
        nav.classList.toggle('navigation--opened');
    });
}
)();
