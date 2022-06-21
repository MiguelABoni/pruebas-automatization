class cartPage {
    constructor() {
        this.attributes = '.attributes';
        this.productNames = '.product-name';
        this.price = '.product-unit-price';
        this.subtotal = '.product-subtotal';
        this.quantity = '.qty-input';
        this.total = '.value-summary';
        this.cameraLi = 'ul.top-menu.notmobile > li:nth-child(2)';
        this.cameraLink = 'ul.top-menu.notmobile > li:nth-child(2) .sublist.first-level li:nth-child(1) a';
    }

    verificateInformation = (selectedValues) => {
        // Validamos la información del computador
        cy.get(this.attributes).then((div_element) => {
            const cartInformation = div_element[0].textContent;
            //Validamos el procesador
            expect(cartInformation, 'Se esperaba el procesador seleccionado y aparece otro diferente').to.include(selectedValues[0].processor);
            //Validamos la RAM
            expect(cartInformation, 'Se esperaba la RAM seleccionada y aparece otra diferente').to.include(selectedValues[0].RAM);
            //Validamos el disco duro
            expect(cartInformation, 'Se esperaba el HDD seleccionado y aparece otro diferente').to.include(selectedValues[0].HDD);
            //Validamos el sistema operativo
            expect(cartInformation, 'Se esperaba el OS seleccionado y aparece otro diferente').to.include(selectedValues[0].OS);
            //Validamos cada software ingresado
            selectedValues[0].software.forEach(software => {
                expect(cartInformation, 'Se esperaba el Software seleccionado y aparece otro diferente').to.include(software);
            });
        });


        // Validamos los precios que venían de las compras
        selectedValues.forEach((selectedValue, index) => {
            cy.get(this.price).then((span) => {
                const price = span[index].textContent;
                expect(price, 'Se esperaba un precio y aparece un precio diferente del articulo').to.include(selectedValue.price);
            });
        })

        cy.get(this.subtotal).then((subtotalArray) => {
            Array.from(subtotalArray).forEach((subtotalHTML, index) => {

                let subtotal = parseFloat(subtotalHTML.textContent.replaceAll(',', "").replaceAll('$', ""));
                cy.get(this.quantity).then(quantity => {
                    subtotal *= parseInt(quantity[index].textContent);
                })
                //validamos los subtotales que venían de las compras
                expect(subtotal, 'Se muestra el subtotal diferente').to.equal(parseFloat(selectedValues[index].price.replaceAll(',', "").replaceAll('$', "")) * parseInt(selectedValues[index].quantity));
            });
        });
    }

    //Verificamos que el nombre de la cámara sea igual al que se había añadido al carrito
    verificateCameraName = (selectedValues) => {
        cy.get(this.productNames).then((productName) => {
            const cameraName = productName[1].textContent;
            expect(cameraName, 'Se esperaba el nombre de la camara seleccionada y aparece otra diferente').to.equal(selectedValues[1].title);
        });
    }

    clickCameraLink = () => {
        /* Clickear el elemento "Camera & Photo" dentro de el submenú "Electronics" */
        cy.get(this.cameraLi).realHover('mouse');
        cy.get(this.cameraLink).click();
    }
}

export default new cartPage();