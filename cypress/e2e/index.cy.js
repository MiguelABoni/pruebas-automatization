/** IMPORTACIONES DEL POM */
import home from '../pages/home';
import build_your_own_computer from '../pages/build-your-own-computer';
import camera_photo from '../pages/camera-photo';
import cart from '../pages/cart';
import desktops from '../pages/desktops';

/** ARRAY DE LOS ATRIBUTOS DE LOS ELEMENTOS QUE ESTEN EN EL CARRITO */
let SelectedValues = [];

/** SUITE DE PRUEBAS GENERAL PARA EL APLICATIVO */
describe('Realización de las pruebas UI del aplicativo nopCommerce', () => {

	/** SE EJECUTA ANTES DE TODOS LOS CASOS DE PRUEBAS (IT) */
	before(() => {
		/** VISITAR LA PÁGINA */
		cy.visit('/');
	});

	/** SE EJECURA ANTES DE CADA UNO DE LOS CASOS DE PRUEBAS (IT) */
	beforeEach(() => {
		// Desktop
		cy.viewport(1366, 768);
	})

	it('Ingresar y validar la URL', () => {
		cy.url().should('include', 'demo.nopcommerce.com');
	});

	it('Ingresar a la opción COMPUTERS > DESKTOPS y adicionar al carrito el "Build your own computer"', () => {
		/** Hover y click en el menú */
		home.clickDesktopsLink();
		/** Click al botón de agregar al carrito */
		desktops.clickCartButton();
	});

	it('Verificar que se presente el título del producto y verificar que se presente el mensaje de producto adicionado al carrito', () => {
		let options = {
			title: "Build your own computer",
			position: 3
		};
		/** Seleccionar especificaciones del PC, agregar al carrito y validar mensaje de confirmación */
		let Values = build_your_own_computer.AddToCardComputer(options);
		SelectedValues.push(Values);
		/** Ir al carrito de compras */
		build_your_own_computer.clickShoppingCartButton();
	});

	it('Verificar que se presente el producto adicionado con los datos respectivos, que se dirija a la página de cámaras y que agregue la cámara al carrito', () => {
		/** Verificar información del computador en el carrito */
		cart.verificateInformation(SelectedValues);
		/** Ir a sección de cámaras */
		cart.clickCameraLink();
		/** Agregar al carrito de compras */
		let CameraSeletected = camera_photo.clickCartButton();
		SelectedValues.push(CameraSeletected);
		/** Cerrar ventana de confirmación e ir al carrito de compras */
		camera_photo.clickShoppingCartButton();
	});

	it('Verificar que se presente el nuevo producto adicionado, el nombre del producto y sus precios.', () => {
		/** Verificar información de todos los componentes del carrito */
		cart.verificateInformation(SelectedValues);
		/** Verificar información de la cámara en el carrito */
		cart.verificateCameraName(SelectedValues);
	});

})