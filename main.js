const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
document.addEventListener('DOMContentLoaded', function () {
    var floatingElement = document.getElementById('floating-element');
    var overlay = document.getElementById('overlay');

    floatingElement.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the overlay
    });

    overlay.addEventListener('click', function () {
        floatingElement.style.display = 'none'; // Hide the floating element
        overlay.style.display = 'none'; // Hide the overlay
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            floatingElement.style.display = 'none'; // Hide the floating element
            overlay.style.display = 'none'; // Hide the overlay
        }
    });

    // Show the floating element and overlay initially (for demonstration purposes)
    floatingElement.style.display = 'block';
    overlay.style.display = 'block';
});