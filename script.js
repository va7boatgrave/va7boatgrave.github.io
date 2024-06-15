/* INTRO */
function enableScroll() {
    document.documentElement.style.overflowY = 'auto';
}

/*
document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var scrollDownElement = document.getElementById('scroll-down');
    var secondsLeft = 5; // Change this to the number of seconds you want to wait before showing the icon

    countdownElement.innerText = 'Exploration begins in ' + secondsLeft + ' seconds';

    var countdown = setInterval(function() {
        secondsLeft--;
        countdownElement.innerText = 'Exploration begins in ' + secondsLeft + ' seconds';

        if (secondsLeft <= 0) {
            clearInterval(countdown);
            countdownElement.style.display = 'none';
            scrollDownElement.style.display = 'inline'
        }
    }, 1000);
});
*/

function updateContent(image, info) {
    document.getElementById('spec_image').src = image;
    document.getElementById('spec_info').textContent = info;
}

/* SWORD */
var swordOn = false;

function turnOnOffSword() {
    var rect1 = document.getElementById('rect1');
    var rect2 = document.getElementById('rect2');

    if (swordOn) {
        rect1.style.fill = 'transparent';
        rect1.style.stroke = 'transparent';
        rect1.style.strokeWidth = '5';
        rect1.style.strokeOpacity = '1';

        rect2.style.fill = 'transparent';
        rect2.style.stroke = 'transparent';
        rect2.style.strokeWidth = '5';
        rect2.style.strokeOpacity = '1';
    } else {
        rect1.style.fill = 'transparent';
        rect1.style.stroke = '#ff0202';
        rect1.style.strokeWidth = '5';
        rect1.style.strokeOpacity = '1';

        rect2.style.fill = 'transparent';
        rect2.style.stroke = '#ff0202';
        rect2.style.strokeWidth = '5';
        rect2.style.strokeOpacity = '1';
    }

    swordOn = !swordOn;
}


/* HELMET */
var helmetOn = false;

function setPathStyle(path, fill, stroke, strokeWidth, strokeOpacity) {
    path.style.fill = fill;
    path.style.stroke = stroke;
    path.style.strokeWidth = strokeWidth;
    path.style.strokeOpacity = strokeOpacity;
}

function turnOnOffHelmet(numPaths) {
    var paths = [];
    for (var i = 1; i <= numPaths; i++) {
        paths.push(document.getElementById('path' + i));
    }

    if (helmetOn) {
        paths.forEach(path => {
            setPathStyle(path, 'transparent', 'transparent', '5', '1');
        });
    } else {
        paths.forEach(path => {
            setPathStyle(path, 'transparent', '#fff723', '5', '1');
        });
    }

    helmetOn = !helmetOn;
}

/* CAROUSEL */
let carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
let activeIndex = 0;

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        if (index === activeIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

document.getElementById('prev-button').addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

document.getElementById('next-button').addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % carouselItems.length;
    updateCarousel();
});

// Initialize the carousel
updateCarousel();

/* GALLERY OF MOTIFS*/


window.onload = function() {
    // Existing onload function
    document.querySelectorAll('.image-gallery').forEach(gallery => {
        gallery.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', event => {
                gallery.querySelector('.main-image').src = event.target.src;
                gallery.querySelector('.image-description').textContent = event.target.dataset.description;
            });
        });
    });

    // New onload function
    // Get the parameters from local storage.
    var id = localStorage.getItem('id');
    var file_name = localStorage.getItem('file_name');
    var desc = localStorage.getItem('desc');

    if (id && file_name && desc) {
        // If all parameters are present, change the image and description.
        changeDescription(id, desc);
    }
}

window.changeImage = function(id, file_name, desc) {
    // Store the parameters in local storage.
    localStorage.setItem('id', id);
    localStorage.setItem('file_name', file_name);
    localStorage.setItem('desc', desc);
}

/* TEST */

function showNotImplementedMessage() {
    alert("This feature is not yet implemented.");
}
