document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function () {
        const header = document.getElementById("header");

        if (window.pageYOffset > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    function updateImage() {
        const imgElement = document.getElementById('dynamicImage');
        const screenWidth = window.innerWidth;

        if (screenWidth <= 850) {
            imgElement.src = 'images/mask__pizza.png';
        } else {
            imgElement.src = 'images/pizza.png';
        }
    }

    updateImage();
    window.addEventListener('resize', updateImage);

    const burger = document.getElementById('burger');
    const closed = document.getElementById('closed');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', function () {
        burger.style.display = 'none';
        closed.style.display = 'block';
        menu.style.display = 'block';
    });

    closed.addEventListener('click', function () {
        closed.style.display = 'none';
        burger.style.display = 'block';
        menu.style.display = 'none';
    });


    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;


    document.querySelectorAll('.footer__icons a').forEach(link => {
        const normalIcon = link.querySelector('.icon');
        const hoverIcon = link.querySelector('.hover-icon');
        hoverIcon.style.display = 'none';

        link.addEventListener('mouseenter', () => {
            normalIcon.style.display = 'none';
            hoverIcon.style.display = 'block';
        });

        link.addEventListener('mouseleave', () => {
            normalIcon.style.display = 'block';
            hoverIcon.style.display = 'none';
        });
    });

    document.querySelector('.btn__order').addEventListener('click', function () {
        document.querySelector('.order').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.querySelector('.btn__delivery').addEventListener('click', function () {
        document.querySelector('.order').scrollIntoView({
            behavior: 'smooth'
        });

    });
});