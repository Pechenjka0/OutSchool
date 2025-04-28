function toggleMenu() {
    const burger = document.querySelector('[data-js-burger]');
    const menu = document.querySelector('[data-js-mobile-menu]');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        body.classList.toggle('overflow-hidden');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 640) {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            burger.classList.remove('active');
            body.classList.remove('overflow-hidden');
        }
    })
};

toggleMenu();