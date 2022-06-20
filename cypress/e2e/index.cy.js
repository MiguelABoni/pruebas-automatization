import home from '../pages/home';
import build_your_own_computer from '../pages/build-your-own-computer';
import camera_photo from '../pages/camera-photo';
import cart from '../pages/cart';
import desktops from '../pages/desktops';

describe('empty spec', () => {

  before(() => {
    // Desktop
    cy.viewport(1366, 768);
    // Visitar página
    cy.visit('/');
  });

  it('Ingresar a la URL', () => {
    cy.url().should('include', 'demo.nopcommerce.com');
  });

  it('Ingresar a la opción COMPUTERS > DESKTOPS', () => {

  });

  it('Adicionar al carrito el build your own computer', () => {
      
  });


  it('Verificar que se presente el título del producto y Verificar que se presente el mensaje de producto adicionado al carrito', () => {
      
  });

  it('Verificar que se presente el producto adicionado con los datos respectivos', () => {
    let processor = '2.5 GHz Intel Pentium Dual-Core';
    cart.verificateInformation(processor);
  });

  it('Ir a las cámaras ELECTRONICS > CAMERA & PHOTO', () => {
      
  });

  it('Adicionar la cámara LEICA T MIRRORLESS', () => {
      
  });

  it('Verificar que se presente el nuevo producto adicionado, el nombre del producto y sus precios.', () => {
      
  });

})