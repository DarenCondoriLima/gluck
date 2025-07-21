
document.addEventListener('DOMContentLoaded', function() {
    console.log("script.js loaded and DOM fully loaded!");
    
    const slider = document.querySelector("#slider");
    let sliderSections = document.querySelectorAll(".slider_section");
    let sliderSectionLast = sliderSections[sliderSections.length - 1];

    const btnRight = document.querySelector("#btn-R");
    const btnLeft = document.querySelector("#btn-L");

    if (slider && btnRight && btnLeft) {
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);

        function next() {
            let sliderSectionFirts = document.querySelectorAll(".slider_section")[0];
            slider.style.marginLeft = "-200%";
            slider.style.transition = "all 0.5s";
            setTimeout(function() {
                slider.style.transition = "none";
                slider.insertAdjacentElement('beforeend', sliderSectionFirts);
                slider.style.marginLeft = "-100%";
            }, 500);
        }

        function prev() {
            let sliderSections = document.querySelectorAll(".slider_section");
            let sliderSectionLast = sliderSections[sliderSections.length - 1];
            slider.style.marginLeft = "0";
            slider.style.transition = "all 0.5s";
            setTimeout(function() {
                slider.style.transition = "none";
                slider.insertAdjacentElement('afterbegin', sliderSectionLast);
                slider.style.marginLeft = "-100%";
            }, 500);
        }

        btnRight.addEventListener('click', function() {
            next();
        });
        btnLeft.addEventListener('click', function() {
            prev();
        });

        setInterval(function() {
            next();
        }, 3000);
        console.log("Custom Carousel initialized and running!");
    } else {
        console.log("Custom Carousel elements not found. Check #slider, #btn-R, #btn-L existence.");
    }

    const galleryImages = [
        './img/img1.webp',
        './img/img2.webp',
        './img/img3.webp',
        './img/img2.webp',
        './img/img1.webp',
        './img/img1.webp',
        './img/img3.webp',
        './img/img2.webp',
        './img/img1.webp',
        './img/img2.webp',
        './img/img3.webp',
        './img/img1.webp',
        './img/img2.webp',
        './img/img3.webp',
        './img/img2.webp',
        './img/img1.webp',
        './img/img1.webp',
        './img/img2.webp',
        './img/img3.webp',
        './img/img2.webp',
        './img/img1.webp',
    ];

    const galleryGridContainer = document.querySelector('.gallery-grid');

    if (galleryGridContainer) {
        galleryImages.forEach((imagePath, index) => {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col');

            const galleryItemDiv = document.createElement('div');
            galleryItemDiv.classList.add('gallery-item');

            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.classList.add('img-fluid', 'rounded');

            imgElement.alt = `Glück Galería ${index + 1}`;

            galleryItemDiv.appendChild(imgElement);
            colDiv.appendChild(galleryItemDiv);
            galleryGridContainer.appendChild(colDiv);
        });
        console.log("Gallery grid generated dynamically!");
    } else {
        console.log("Gallery grid container (.gallery-grid) not found.");
    }

const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalImage = document.getElementById('modalImage');

galleryGridContainer.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        imageModal.show();
    });
});
});


