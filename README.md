# Automatización Cypress

## Requerimientos para usar:

1. ⬇ Instalar [Node.js](https://nodejs.org/en/) (incluye NPM como gestor de paquetes y librerías)
2. ⬇ Instalar el editor de código: [Visual Studio Code](https://code.visualstudio.com/ "Visual Studio Code")
3. ⬇ Descargar o clonar el repositorio

## Descarga e instalación:
1. Descargar el código en un comprimido (si se tiene conocimientos sobre git es posible clonar el repositorio)

![Descargar o clonar el repositorio](https://i.postimg.cc/d1gtMQnf/Paso0-Dowload-Repository.png)

2. Abrir la carpeta que contiene el código en el editor de Visual Studio Code

- 🖱 File > Open Folder... > Seleccionar la carpeta resultante tras descomprimir el código
- ⌨ Ctrl + k + Ctrl + O (Atajo de teclado para Open Folder...)

3. Abrir una terminal en el editor (Menú superior del editor: Terminal > New Terminal)

4. Ejecutar los siguientes comandos:
    - ⌨ npm install (Instalar dependencias para el funcionamiento del proyecto)
        - cypress              -> Librería para automatización de pruebas en JavaScript
        - cypress-real-events  -> Librería para la simulación de eventos (Utilizado para simular un "hover")
    - ⌨ npm run open (Ejecutar cypress de manera gráfica)

5. Seleccionar la opción "E2E Testing"
![Seleccionar E2E](https://i.postimg.cc/T1m2T843/Paso1-Select-E2-E.png)
6. Seleccionar el navegador (se recomienda utilizar Google Chrome) y presionar el botón "Start E2E Testing in Chrome"
![Seleccionar navegador](https://i.postimg.cc/8krzRWzg/Paso2-Select-Google.png)
7. Seleccionar el archivo "index.cy.js" que contiene todas las pruebas
![Seleccionar el archivo index.cy.js](https://i.postimg.cc/BQ9QM6jL/Paso3-Select-index.png)
8. Esperar que todas las pruebas se ejecuten para mirar el resultado ✅
![Resultado de los test](https://i.postimg.cc/pXLx0F2d/Paso4-Test-Completed.png)

## ⚠ Advertencia ⚠
> En ocasiones la aplicación presenta problemas en el envío de peticiones POST o en la simulación del evento "hover" (algo fuera de nuestras posibilidades) por lo cual en caso de fallar es requerido volver a ejecutar las pruebas para un correcto funcionamiento:
- Presionando la tecla "R"
- Dar click en el botón de recargar 👇
![Botón para volver a ejecutar las pruebas](https://i.postimg.cc/Pf605Fjt/Paso-Extra-Reload-Test.png)

## Integrantes:
- [Santiago Restrepo Idárraga](https://github.com/Santiago-Restrepo "Santiago Restrepo Idárraga")
- [Miguel Ángel Bedoya Bonilla](https://github.com/MiguelABoni "Miguel Ángel Bedoya Bonilla")
- [Juan Esteban Galvis](https://github.com/JuanesGalvis "Juan Esteban Galvis")
