document.addEventListener('DOMContentLoaded', () => {
    // Data para Cervezas
    const cervezas = [
        {
            imgSrc: "./img/cerveceria/cerveza-maracuya.png",
            altText: "MARACUYA",
            title: "MARACUYA",
            description: "CERVEZA DE MARACUYA: Alcohol  5 %     IBUS 16 un estilo de cerveza totalmente refrescante y ligero dulzor, pensada en el verano, en la cual combinamos una cerveza estilo suave con maracuyá, haciendo que el lúpulo de la cerveza se mezcle con el sutil aroma del maracuyá dándole una sensación de frescura, perfecta para tomarla en esos días calurosos de verano. Ingredientes: cebada, lúpulo, agua, levadura, maracuyá.",
            presentations: [
                "Botella de 330ml: S/ 14.00",
                "Barril de 20 Litros: S/ 360.00",
                "Barril de 30 Litros: S/ 540.00",
                "Barril de 50 Litros: S/ 900.00"
            ]
        },
        {
            imgSrc: "./img/cerveceria/cerveza-golden.png",
            altText: "GOLDEN ALE (DORADA)",
            title: "GOLDEN ALE (DORADA)",
            description: "CERVEZA GOLDEN ALE (DORADA). Vol. Alcohólico 5.5%      IBUS 25 cerveza tradicional ligera, refrescante, facil de beber, aroma moderadamente a lupulos frutales, sensación en boca: cuerpo suave, espuma blanca y densa apaciguadora de la sed, ideal para tomarla helada y disfrutar con amigos.",
            presentations: [
                "Botella de 330ml: S/ 14.00",
                "Barril de 20 Litros: S/ 360.00",
                "Barril de 30 Litros: S/ 540.00",
                "Barril de 50 Litros: S/ 900.00"
            ]
        },
        {
            imgSrc: "./img/cerveceria/cerveza-red.png",
            altText: "RED ALE (ROJA)",
            title: "RED ALE (ROJA)",
            description: "CERVEZA RED ALE (ROJA): Vol. Alcohólico 6.5%      ibus 26 cerveza de color rojo oscuro, con sabor marcado a cebada malteada y un suave dulzor inicial a caramelo o toffee, muy ligero aroma frutal. sensación en boca: toque seco al final, buen cuerpo con espuma sedosa",
            presentations: [
                "Botella de 330ml: S/ 14.00",
                "Barril de 20 Litros: S/ 360.00",
                "Barril de 30 Litros: S/ 540.00",
                "Barril de 50 Litros: S/ 900.00"
            ]
        },
        {
            imgSrc: "./img/cerveceria/cerveza-porter.png",
            altText: "PORTER (NEGRA)",
            title: "PORTER (NEGRA)",
            description: "CERVEZA PORTER (NEGRA): Vol. Alcohólico  7 %      IBUS 25 cerveza oscura con un carácter a malta tostada y ligero aroma a chocolate y cacao. sensación en boca: buen cuerpo ligeramente amargo propio de los lúpulos utilizados en su elaboración, espuma sedosa de color crema buena para acompañar con carnes rojas ",
            presentations: [
                "Botella de 330ml: S/ 14.00",
                "Barril de 20 Litros: S/ 360.00",
                "Barril de 30 Litros: S/ 540.00",
                "Barril de 50 Litros: S/ 900.00"
            ]
        },
        {
            imgSrc: "./img/cerveceria/cerveza-ipa.png",
            altText: "IPA",
            title: "IPA",
            description: "CERVEZA IPA: vol. Alcohólico 6 %      IBUS 57 Esta cerveza de origen milenario pone como protagonista el lúpulo con un amargor moderado a intenso sin embargo comparte los sabores dulces de la malta. como acompañamiento nos da aromas herbales y afrutados moderados, pero no invasivos, sorprende por su color ámbar intenso, espuma densa, sedosa de color blanco y buen cuerpo al momento de probarla dejándonos un retrogusto semiseco, pidiéndonos a gritos el siguiente sorbo. ",
            presentations: [
                "Botella de 330ml: S/ 14.00",
                "Barril de 20 Litros: S/ 360.00",
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
                <div class="card card-product h-100 text-center"
                    data-bs-toggle="modal"
                    data-bs-target="#productModal"
                    data-product-type="${productType}"
                    data-product-index="${index}">
                    <img class="card-img-top mx-auto d-block" src="${product.imgSrc}" alt="${product.altText}">
                    <div class="card-body">
                        <h2 class="card-title">${product.title}</h2>
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