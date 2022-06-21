class buildYourOwnComputerPage {
    constructor() {
        this.titleComputer = '.product-name h1';
        this.proccesor = '#product_attribute_1';
        this.RAMselect = '#product_attribute_2';
        this.HDD = 'label[for="product_attribute_3_6"]';
        this.software = 'label[for="product_attribute_5_11"]';
        this.softwareOptions = 'input[type="checkbox"]';
        this.checkedSO = '#product_attribute_input_4 input[type="radio"]';
        this.AddToCard = '#add-to-cart-button-1';
        this.success = ".bar-notification.success";
        this.successClose = ".bar-notification.success span";
        this.quantity = '#product_enteredQuantity_1';
        this.buttonShoppingCart = '.ico-cart';
        this.price = '#price-value-1';
    }

    AddToCardComputer = ({ title, position }) => {

        let SelectedValues = {
            processor: '',
            RAM: '',
            HDD: '',
            OS: '',
            software: [],
            price: '',
            quantity: ''
        };

        // Verificar título del artículo
        cy.get(this.titleComputer).then((h1_element) => {
            const text = h1_element[0].textContent;
            expect(text, 'El titulo no es acorde al producto seleccionado o no se encuentra').to.equal(title);
        });

        // Seleccionar un Procesador
        cy.get(this.proccesor).then((proccesorHTML) => {
            const Proccesor = proccesorHTML[0][proccesorHTML[0].value].text;
            SelectedValues.processor = Proccesor;
        });

        // Seleccionar una RAM (8 GB)
        cy.get(this.RAMselect).select(position).then((elementSelected) => {
            const ArrayOptions = Array.from(elementSelected[0].options);
            SelectedValues.RAM = ArrayOptions[position].text;
        });
        
        // Seleccionar un HDD
        cy.get(this.HDD).click().then((HDDSelected) => {
            SelectedValues.HDD = HDDSelected[0].textContent;
        });

        // Seleccionar un SO
        cy.get(this.checkedSO).then((soHTML) => {
            const SO = Array.from(soHTML)[0].nextElementSibling.textContent;
            SelectedValues.OS = SO;
        });

        // Agregar Software
        cy.get(this.software).click();
        cy.get(this.softwareOptions).then((options) => {
            let SelectedSoftware = Array.from(options).filter((elem) => elem.checked);
            SelectedValues.software = SelectedSoftware.map((elem) => elem.nextElementSibling.textContent);
        });

        // Agregar Quantity
        cy.get(this.quantity).then((quantityHTML) => {
            SelectedValues.quantity = quantityHTML[0].value
        });

        // Agregar Precio
        cy.get(this.price).then((priceHTML) => {
            SelectedValues.price = priceHTML[0].textContent;
        });

        // Click al boton del carrito de compras
        cy.get(this.AddToCard).click();
        // Verificar mensaje
        cy.get(this.success).should('be.visible');
        // Cerrar modal
        cy.get(this.successClose).click();

        return SelectedValues;
    }

    clickShoppingCartButton = () => {
        /** Se da click al botón que direcciona a la página del Carrito */
        cy.get(this.buttonShoppingCart).click();
    }
}

export default new buildYourOwnComputerPage();