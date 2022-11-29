# Trabajo Final Integrador

Alumno Romero Muñoz Fernando Mario.

## ¿Como jugar?

Existen dos formas de jugar al "preguntados".

### Online
Puedes acceder al sitio web de este repositorio donde encontrarás una versión plenamente jugable de la aplicación. Para ello solo haz [click aquí](https://ferrommu.github.io/unq-ui-fernando-mario-romero-mu-oz-trabajo-final/).
### Levantarla de manera local
Para levantar el proyecto de manera local deberás seguir varios pasos primero.
#### Clonar el repositorio
Primero tendrás que clonar el repositorio. Para ello puedes hacer click en el botón de "Code" (o código) de la pagina de este repositorio. Luego:
* Si tenes usuario en github, clave ssh y git en tu pc, copia el link de la pestaña "ssh". Luego abre una terminal de tu computadora en una dirección donde quieras crear la carpeta donde ira este repositorio. A continuación ejecuta ```git clone <Link copiado>``` (asegurate de reemplazar < Link copiado> por dicho link).
* Si no tenes alguno de los anteriores podes simplemente descargar la versión comprimida del repositorio. Para ello haz click en download zip. Luego descomprime el archivo .zip donde desees tener el repositorio.

**Aclaración**: Para este paso se da por sentado que estas ubicado en la rama main (la rama que se abre por defecto la primera vez que entras al repositorio). Si haz cambiado a otra rama debes primero volver a la rama [main](https://github.com/FerRomMu/unq-ui-fernando-mario-romero-mu-oz-trabajo-final).
#### Node, npm y dependencias

Ademas del proyecto necesitaras node. Para ello descarga [nvm - Node Version Manager](https://github.com/nvm-sh/nvm).  Toda la información necesaria para su correcta instalación la puedes encontrar allí.

Una vez instalado para confirmar que lo haz instalado correctamente puedes hacer```nvm -v ```, debería indicarte tu versión actual de nvm.

Por último, debes asegurarte de instalar [nodejs y npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) usando nvm. Para ello haz ```nvm install node```.

Finalmente instala las dependencias usando npm:

```bash
npm install
```

#### Listo para correr

Luego de los pasos anteriores ya esta listo para ejecutar. Simplemente levanta la aplicación con el siguiente comando:

```bash
# Esto levantara la aplicación en el browser que tengas por defecto.
npm start
```