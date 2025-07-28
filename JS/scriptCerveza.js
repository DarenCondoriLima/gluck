document.addEventListener('DOMContentLoaded', () => {
    // Data para Cervezas
    const cervezas = [
        {
            imgSrc: "./img/gaseosa-florJamaica.png",
            altText: "Cerveza Dorada",
            title: "Cerveza Dorada",
            description: "Una cerveza dorada refrescante y ligera, perfecta para cualquier ocasión. Con notas sutiles de malta y un acabado limpio, ideal para quienes disfrutan de un sabor equilibrado.",
            presentations: [
                "Botella de 330ml: S/ 14.00",
                "Barril de 20 Litros",
                "Barril de 30 Litros",
                "Barril de 50 Litros"
            ]
        },
        {
            imgSrc: "./img/gaseosa-florJamaica.png",
            altText: "Cerveza Roja",
            title: "Cerveza Roja",
            description: "Nuestra cerveza roja artesanal se distingue por su color ámbar profundo y su rico sabor a caramelo. Balanceada con un amargor suave, es ideal para maridar con carnes asadas.",
            presentations: [
                "Botella de 330ml: S/ 14.00",
                "Barril de 20 Litros",
                "Barril de 30 Litros",
                "Barril de 50 Litros"
            ]
        },
        {
            imgSrc: "./img/gaseosa-florJamaica.png",
            altText: "Cerveza Maracuyá",
            title: "Cerveza Maracuyá",
            description: "Una cerveza innovadora con un toque tropical de maracuyá. Su acidez refrescante y aroma frutal la hacen única, perfecta para climas cálidos o para sorprender tu paladar.",
            presentations: [
                "Botella de 330ml: S/ 14.00",
                "Barril de 20 Litros",
                "Barril de 30 Litros",
                "Barril de 50 Litros"
            ]
        },
        {
            imgSrc: "./img/gaseosa-florJamaica.png",
            altText: "Cerveza Porter",
            title: "Cerveza Porter",
            description: "Intensa y robusta, nuestra cerveza Porter ofrece notas a café, chocolate tostado y un ligero toque ahumado. Ideal para los amantes de sabores complejos y noches frías.",
            presentations: [
                "Botella de 330ml: S/ 14.00",
                "Barril de 20 Litros",
                "Barril de 30 Litros",
                "Barril de 50 Litros"
            ]
        }
    ];

    // Data para Gaseosas
    const gaseosas = [
        {
            imgSrc: "./img/gaseosa-florJamaica.png",
            altText: "Gaseosa de Flor de Jamaica",
            title: "Gaseosa de Flor de Jamaica",
            description: "Nuestra gaseosa artesanal de flor de Jamaica es una bebida vibrante, con un sabor floral y ligeramente ácido. Perfecta para refrescarte en cualquier momento.",
            presentations: [
                "Botella de 500ml: S/ 8.00",
                "Botella de 1 Litro: S/ 15.00"
            ]
        }
    ];

    // Mapeo general de productos para fácil acceso en el modal
    const allProducts = {
        'cerveza': cervezas,
        'gaseosa': gaseosas
    };

    // Función para generar y añadir las tarjetas al DOM
    function generateCards(products, containerId, productType) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Contenedor con ID "${containerId}" no encontrado.`);
            return;
        }

        let cardsHtml = '';
        products.forEach((product, index) => {
            cardsHtml += `
                <div class="col">
                    <div class="card card-category h-100 text-center"
                        data-bs-toggle="modal"
                        data-bs-target="#productModal"
                        data-product-type="${productType}"
                        data-product-index="${index}">
                        <img class="card-img-top mx-auto d-block" src="${product.imgSrc}" alt="${product.altText}">
                        <div class="card-body">
                            <h2 class="card-title-gluck">${product.title}</h2>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = cardsHtml;
    }

    // Generar tarjetas para Cervezas
    generateCards(cervezas, 'cervezas-container', 'cerveza');

    // Generar tarjetas para Gaseosas
    generateCards(gaseosas, 'gaseosas-container', 'gaseosa');

    // --- Lógica para el Modal ---
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('show.bs.modal', event => {
            // Button that triggered the modal
            const openerCard = event.relatedTarget; // The card element that was clicked

            // Extract info from data-bs-* attributes
            const productType = openerCard.getAttribute('data-product-type');
            const productIndex = parseInt(openerCard.getAttribute('data-product-index'));

            // Get the product data
            const product = allProducts[productType][productIndex];

            // Update the modal's content
            const modalTitle = productModal.querySelector('#productModalLabel');
            const modalImage = productModal.querySelector('#modalProductImage');
            const modalDescription = productModal.querySelector('#modalProductDescription');
            const modalPresentations = productModal.querySelector('#modalProductPresentations');

            modalTitle.textContent = product.title;
            modalImage.src = product.imgSrc;
            modalImage.alt = product.altText;
            modalDescription.textContent = product.description;

            // Clear previous presentations and add new ones
            modalPresentations.innerHTML = ''; // Clear previous items
            product.presentations.forEach(presentation => {
                const li = document.createElement('li');
                li.textContent = presentation;
                modalPresentations.appendChild(li);
            });
        });
    } else {
        console.error("Modal element with ID 'productModal' not found.");
    }
});