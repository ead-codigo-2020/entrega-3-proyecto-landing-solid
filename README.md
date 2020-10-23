# bootstrap-starter

Ejemplo de repositorio inicial para usar Bootstrap como dependencia

## Modo de uso

* Instala [node.js](https://nodejs.org/en/download/)
* Clona este repositorio
* Instala las dependencias: `npm install`
* Inicia el proceso para compilar estilos: `npm run start`
* Edita los estilos en `src/scss/style.scs`
* Edita las funcionalidades javascript en `src/js/script.js`

---

## Estructura de archivos

```
/assets/            ---------------- carpeta contenedora de archivos fuente
   /scss/style.scss  ---------------- hoja de estilos principal (@import)
   /js/script.js     ---------------- archivo js principal
   /svg/src/         ---------------- archivos fuente de íconos svg
/public/             ---------------- carpeta raíz pública
   /assets/dist/     ---------------- destino de archivos procesados (compilados)
   /index.html       ---------------- índice del sitio
/node_modules/       ---------------- carpeta de dependencias
/.editorconfig       ---------------- configuración para el editor de texto
/.gitignore          ---------------- archivos que se excluyen del versionamiento
/package.json        ---------------- definición de dependencias (npm)
/package-lock.json   ---------------- versiones específicas de dependencias
/postcss.config.js   ---------------- configuración de PostCSS
/webpack.config.js   ---------------- configuración de WebPack (Encore)
```
