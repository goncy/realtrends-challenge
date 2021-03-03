![RealTrends](./logo.svg "RealTrends")

# RealTrends challenge
Se debe crear una aplicación de votación realtime.

## API
* Debe exponer un servidor de websocket al que se pueda subscribir.
* Debe emitir eventos cuando haya votos nuevos.

## Cliente
* Debe haber dos cajas que permita seleccionar productos desde Mercado Libre.
* Debe haber un botón para iniciar y terminar la votación.
* Se deben reiniciar los votos al comenzar una nueva votación.
* Se debe mostrar un indicador de quien va ganando la votación.
* Se debe poder ver quienes fueron los votantes y sus respectivas valoraciónes.
* Cada usuario puede votar una vez, si vota más de una, el voto se actualiza.

## Definiciones técnicas
* La aplicación debe estar publicada y debe ser accesible mediante un link.
* El código de la aplicación debe estar subida a un repositorio de público acceso.

## Correr el proyecto
```bash
## Instalar las dependencias del proyecto
npm install

## Instalar las dependencias de los paquetes
npm run bootstrap

## Correr los paquetes
npm run dev
```