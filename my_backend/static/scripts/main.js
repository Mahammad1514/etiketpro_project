
const menuIcon = document.getElementById('menu-icon');

const links = document.getElementById('responsive-menu');
menuIcon.addEventListener('click', function () {
    links.classList.add('active')
    document.body.classList.add('no-scroll');

})

const menu_close = document.getElementById('menu-close');

menu_close.addEventListener('click', function () {
    links.classList.remove('active')
    document.body.classList.remove('no-scroll');

})


//footer dropdown
function toggleList(listId) {
    var list = document.getElementById(listId);

    if (!list.classList.contains("open")) {
        list.classList.add("open");
        list.style.maxHeight = list.scrollHeight + "px";
    } else {
        list.classList.remove("open");
        list.style.maxHeight = "0";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Daha aşağı rəqəm daha yavaş countır

    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => updateCount(counter), 10);
        } else {
            counter.innerText = target;
        }
    };

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                updateCount(counter);
                observer.unobserve(counter); // Stop observing once the counter has started
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.5 // Adjust this value based on when you want to start the count (0.5 means halfway into the view)
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});





