const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})


// -----tablinks---------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// ------under construction---------
document.addEventListener('DOMContentLoaded', function () {
    var floatingElement = document.getElementById('floating-element');
    var overlay = document.getElementById('overlay');

    floatingElement.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    overlay.addEventListener('click', function () {
        floatingElement.style.display = 'none';
        overlay.style.display = 'none';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            floatingElement.style.display = 'none';
            overlay.style.display = 'none';
        }
    });

    floatingElement.style.display = 'block';
    overlay.style.display = 'block';
});

