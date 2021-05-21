let cloud = document.querySelectorAll('.cloud');
let sun = document.querySelector('.sun');

window.addEventListener('scroll', () => {
    const windowY = window.scrollY;

    cloud.forEach(clouds => {
        const speed = clouds.getAttribute('data-speed');

        clouds.style.transform = `translateX(${windowY * speed}px)`;
    });

    sun.style.transform = `translateY(${windowY / 2}px)`
})

window.addEventListener('load', () => {
    let h1 = document.querySelector('h1');

    const txt = h1.innerHTML;
    h1.innerHTML = '';
    let x = 0;

    function str() {
        h1.innerHTML += txt[x];
        x++;

        if (x < txt.length) {
            setTimeout(() => {
                str();
            }, 200);
        }
    }

    str();
})