window.onload = function() {
    let params = new URLSearchParams(window.location.search);
    let m_id = params.get('m_id');
    let file_name = params.get('file_name');
    /*alert(`ID: ${m_id}\nFile Name: ${file_name}`);*/

    if (m_id && file_name) {
        var div = document.querySelector('div.container-of-two#' + m_id);

        // Find the image and the description in the gallery.
        var img = div.querySelector('.image-gallery .main-image');
        var description = div.querySelector('.image-gallery .image-description');
        // Set the source of the image and the text of the description.
        img.src = 'imgs/motifs/' + m_id + '/' + file_name;
        description.textContent = "Va7";
    }

    /* SHOW WHAT THE USER CLICKED ON */
    // TO CHANGE BETWEEN IMAGES
    document.querySelectorAll('.image-gallery').forEach(gallery => {
        gallery.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', event => {
                gallery.querySelector('.main-image').src = event.target.src;
                gallery.querySelector('.image-description').textContent = event.target.dataset.description;
            });
        });
    });

}

/* GALLERY OF MOTIFS*/
/*
window.onload = function() {
    document.querySelectorAll('.image-gallery').forEach(gallery => {
        gallery.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', event => {
                gallery.querySelector('.main-image').src = event.target.src;
                gallery.querySelector('.image-description').textContent = event.target.dataset.description;
            });
        });
    });
}

window.changeImage = function(id, file_name, desc) {
    // Store the parameters in local storage.
    localStorage.setItem('id', id);
    localStorage.setItem('file_name', file_name);
    localStorage.setItem('desc', desc);
}

window.onload = function() {
    // Get the parameters from local storage.
    var id = localStorage.getItem('id');
    var file_name = localStorage.getItem('file_name');
    var desc = localStorage.getItem('desc');

    if (id && file_name && desc) {
        // If all parameters are present, change the image and description.
        changeImage(id, file_name, desc);
    }
}




window.onload = function() {
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    let file_name = params.get('file_name');
    let desc = params.get('desc');
    alert(`ID: ${id}\nFile Name: ${file_name}\nDescription: ${desc}`);

    // Existing onload function
    document.querySelectorAll('.image-gallery').forEach(gallery => {
        gallery.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', event => {
                gallery.querySelector('.main-image').src = event.target.src;
                gallery.querySelector('.image-description').textContent = event.target.dataset.description;
            });
        });
    });
}
*/
