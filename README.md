![RealTrends](./logo.svg "RealTrends")

# RealTrends challenge
Se debe crear una aplicación de votación realtime.

## API
* Debe exponer un servidor de websocket al que se pueda subscribir.
* Debe emitir eventos cuando haya votos nuevos.

## Cliente
* Debe haber al menos dos productos sobre los cuales se pueda votar.
* Se debe mostrar un indicador del porcentaje de votos de cada producto.
* Se debe poder ver quienes fueron los votantes y sus respectivas valoraciónes.
* Cada usuario puede votar una vez, si vota más de una, el voto se transfiere.

## Definiciones técnicas
* El código de la aplicación debe estar subida a un repositorio de público acceso.

## Puntos extra
* El usuario puede seleccionar los productos desde el cliente viendo un modal con productos de Mercado Libre.
* La votación se puede pausar, reanudar y reiniciar desde el cliente.

![Spec](./spec.png)

## Correr el proyecto
```bash
## Instalar las dependencias del proyecto
npm install

## Instalar las dependencias de los paquetes
npm run bootstrap

## Correr los paquetes
npm run dev
```