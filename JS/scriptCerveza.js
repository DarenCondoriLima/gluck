// Data para Cervezas
        const cervezas = [
            {
                imgSrc: "./img/cerveceria/cerveza-maracuya.png",
                altText: "MARACUYA",
                title: "MARACUYA",
                description: "CERVEZA DE MARACUYA: Alcohol 5% IBUS 16 un estilo de cerveza totalmente refrescante y ligero dulzor, pensada en el verano, en la cual combinamos una cerveza estilo suave con maracuyá, haciendo que el lúpulo de la cerveza se mezcle con el sutil aroma del maracuyá dándole una sensación de frescura, perfecta para tomarla en esos días calurosos de verano. Ingredientes: cebada, lúpulo, agua, levadura, maracuyá.",
                presentations: [
                    "Botella de 330ml: S/ 14.00",
                    "Barril de 19 Litros: S/ 342.00",
                    "Barril de 30 Litros: S/ 540.00",
                    "Barril de 50 Litros: S/ 900.00"
                ]
            },
            {
                imgSrc: "./img/cerveceria/cerveza-golden.png",
                altText: "GOLDEN ALE (DORADA)",
                title: "GOLDEN ALE (DORADA)",
                description: "CERVEZA GOLDEN ALE (DORADA). Vol. Alcohólico 5.5% IBUS 25 cerveza tradicional ligera, refrescante, facil de beber, aroma moderadamente a lupulos frutales, sensación en boca: cuerpo suave, espuma blanca y densa apaciguadora de la sed, ideal para tomarla helada y disfrutar con amigos.",
                presentations: [
                    "Botella de 330ml: S/ 14.00",
                    "Barril de 19 Litros: S/ 342.00",
                    "Barril de 30 Litros: S/ 540.00",
                    "Barril de 50 Litros: S/ 900.00"
                ]
            },
            {
                imgSrc: "./img/cerveceria/cerveza-red.png",
                altText: "RED ALE (ROJA)",
                title: "RED ALE (ROJA)",
                description: "CERVEZA RED ALE (ROJA): Vol. Alcohólico 6.5% ibus 26 cerveza de color rojo oscuro, con sabor marcado a cebada malteada y un suave dulzor inicial a caramelo o toffee, muy ligero aroma frutal. sensación en boca: toque seco al final, buen cuerpo con espuma sedosa",
                presentations: [
                    "Botella de 330ml: S/ 14.00",
                    "Barril de 19 Litros: S/ 342.00",
                    "Barril de 30 Litros: S/ 540.00",
                    "Barril de 50 Litros: S/ 900.00"
                ]
            },
            {
                imgSrc: "./img/cerveceria/cerveza-porter.png",
                altText: "PORTER (NEGRA)",
                title: "PORTER (NEGRA)",
                description: "CERVEZA PORTER (NEGRA): Vol. Alcohólico 7% IBUS 25 cerveza oscura con un carácter a malta tostada y ligero aroma a chocolate y cacao. sensación en boca: buen cuerpo ligeramente amargo propio de los lúpulos utilizados en su elaboración, espuma sedosa de color crema buena para acompañar con carnes rojas",
                presentations: [
                    "Botella de 330ml: S/ 14.00",
                    "Barril de 19 Litros: S/ 342.00",
                    "Barril de 30 Litros: S/ 540.00",
                    "Barril de 50 Litros: S/ 900.00"
                ]
            },
            {
                imgSrc: "./img/cerveceria/cerveza-ipa.png",
                altText: "IPA",
                title: "IPA",
                description: "CERVEZA IPA: vol. Alcohólico 6% IBUS 57 Esta cerveza de origen milenario pone como protagonista el lúpulo con un amargor moderado a intenso sin embargo comparte los sabores dulces de la malta. como acompañamiento nos da aromas herbales y afrutados moderados, pero no invasivos, sorprende por su color ámbar intenso, espuma densa, sedosa de color blanco y buen cuerpo al momento de probarla dejándonos un retrogusto semiseco, pidiéndonos a gritos el siguiente sorbo.",
                presentations: [
                    "Botella de 330ml: S/ 14.00",
                    "Barril de 19 Litros: S/ 342.00",
                    "Barril de 30 Litros: S/ 540.00",
                    "Barril de 50 Litros: S/ 900.00"
                ]
            }
        ];

        // Data para Gaseosas
        const gaseosas = [
            {
                imgSrc: "./img/cerveceria/gaseosa-florJamaica.png",
                altText: "Gaseosa de Flor de Jamaica",
                title: "Gaseosa de Flor de Jamaica",
                description: "Gaseosa de Flor de Jamaica: experimenta una explosión de sabor puro con nuestra innovadora gaseosa, una bebida elaborada meticulosamente con flor de Jamaica, canela y piña, haciendo tributo a los sabores auténticos. hemos eliminado por completo los saborizantes y colorantes artificiales, garantizando una experiencia 100% natural y respetando tu bienestar.",
                presentations: [
                    "Botella de 330ml: S/ 4.50",
                    "Botella de 1 Litro: S/ 11.00 (Solo para local)"
                ]
            }
        ];

        // Mapeo general de productos para fácil acceso en el modal
        const allProducts = {
            'cerveza': cervezas,
            'gaseosa': gaseosas
        };

        // Clase Carrusel
        class ProductCarousel {
            constructor(trackSelector, prevSelector, nextSelector, products, productType) {
                this.track = document.querySelector(trackSelector);
                this.prevBtn = document.querySelector(prevSelector);
                this.nextBtn = document.querySelector(nextSelector);
                this.products = products;
                this.productType = productType;
                this.currentIndex = 0;
                this.cardsPerView = this.getCardsPerView();
                
                this.init();
                this.setupResponsive();
            }

            getCardsPerView() {
                const width = window.innerWidth;
                if (width <= 576) return 1;
                if (width <= 768) return 2;
                if (width <= 992) return 3;
                return 4;
            }

            init() {
                this.generateCards();
                this.updateButtons();
                this.setupEventListeners();
            }

            generateCards() {
                let cardsHtml = '';
                this.products.forEach((product, index) => {
                    cardsHtml += `
                        <div class="carousel-card">
                            <div class="card card-product h-100 text-center"
                                data-bs-toggle="modal"
                                data-bs-target="#productModal"
                                data-product-type="${this.productType}"
                                data-product-index="${index}">
                                <img class="card-img-top" src="${product.imgSrc}" alt="${product.altText}">
                                <div class="card-body d-flex align-items-center justify-content-center">
                                    <h2 class="card-title m-0">${product.title}</h2>
                                </div>
                            </div>
                        </div>
                    `;
                });
                this.track.innerHTML = cardsHtml;
            }

            setupEventListeners() {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
            }

            setupResponsive() {
                let resizeTimeout;
                window.addEventListener('resize', () => {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(() => {
                        this.cardsPerView = this.getCardsPerView();
                        this.currentIndex = 0;
                        this.updateCarousel();
                        this.updateButtons();
                    }, 250);
                });
            }

            prevSlide() {
                if (this.currentIndex > 0) {
                    this.currentIndex--;
                    this.updateCarousel();
                    this.updateButtons();
                }
            }

            nextSlide() {
                const maxIndex = Math.max(0, this.products.length - this.cardsPerView);
                if (this.currentIndex < maxIndex) {
                    this.currentIndex++;
                    this.updateCarousel();
                    this.updateButtons();
                }
            }

            updateCarousel() {
                const cardWidth = this.track.children[0]?.offsetWidth || 250;
                const gap = 24; // 1.5rem = 24px
                const translateX = -(this.currentIndex * (cardWidth + gap));
                this.track.style.transform = `translateX(${translateX}px)`;
            }

            updateButtons() {
                const maxIndex = Math.max(0, this.products.length - this.cardsPerView);
                this.prevBtn.disabled = this.currentIndex === 0;
                this.nextBtn.disabled = this.currentIndex >= maxIndex;
            }
        }

document.addEventListener('DOMContentLoaded', () => {
    // Crear carrusel de cervezas
            new ProductCarousel(
                '#cervezas-track',
                '#cervezas-prev',
                '#cervezas-next',
                cervezas,
                'cerveza'
            );

            // Crear carrusel de gaseosas
            new ProductCarousel(
                '#gaseosas-track',
                '#gaseosas-prev',
                '#gaseosas-next',
                gaseosas,
                'gaseosa'
            );

            // --- Lógica para el Modal ---
            const productModal = document.getElementById('productModal');
            if (productModal) {
                productModal.addEventListener('show.bs.modal', event => {
                    const openerCard = event.relatedTarget;
                    const productType = openerCard.getAttribute('data-product-type');
                    const productIndex = parseInt(openerCard.getAttribute('data-product-index'));
                    const product = allProducts[productType][productIndex];

                    const modalTitle = productModal.querySelector('#productModalLabel');
                    const modalImage = productModal.querySelector('#modalProductImage');
                    const modalDescription = productModal.querySelector('#modalProductDescription');
                    const modalPresentations = productModal.querySelector('#modalProductPresentations');

                    modalTitle.textContent = product.title;
                    modalImage.src = product.imgSrc;
                    modalImage.alt = product.altText;
                    modalDescription.textContent = product.description;

                    modalPresentations.innerHTML = '';
                    product.presentations.forEach(presentation => {
                        const li = document.createElement('li');
                        li.textContent = presentation;
                        modalPresentations.appendChild(li);
                    });
                });
            }


    // Array of objects, each containing the container selector and the number of items
    const matrixData = [
        { selector: '.matrix-container1', count: 57 }, // 10*5 + 7
        { selector: '.matrix-container2', count: 90 }, // 10*9
        { selector: '.matrix-container3', count: 150 } // 10*15
    ];

    // Get the SVG content just once
    const svgContent = document.getElementById('beer-icon-svg').textContent;

    // A single function to generate the icons
    function createMatrix(container, count) {
        if (!container) return; // Exit if container not found
        for (let i = 0; i < count; i++) {
            const iconWrapper = document.createElement('div');
            iconWrapper.classList.add('icon-wrapper');
            iconWrapper.innerHTML = svgContent;
            container.appendChild(iconWrapper);
        }
    }

    // Loop through the data and call the function for each matrix
    matrixData.forEach(data => {
        const container = document.querySelector(data.selector);
        createMatrix(container, data.count);
    });
});

