# Markdown Links

Libreria que permite analizar archivos markdown extrayendo sus links, para mostrarte su ruta, texto y el estado de los links.

## Versión
1.1.0

## Homepage
[GitHub Judith Quiñones](https://github.com/JudithCristina/LIM009-fe-md-links)

## Instalación

 Agregue el modulo a su proyecto, instalando:
 ```
 npm install --g judithq-md-links
 ```
## Flujograma

El siguiente flujograma representa el algoritmo que soluciona el problema, mostrando las fases de implementación y los procesos inmersos en cada una de estas. 
 
[Diagrama de flujo Proyecto-Laboratoria(1).pdf](https://github.com/JudithCristina/LIM009-fe-md-links/files/3331762/Diagrama.de.flujo.Proyecto-Laboratoria.1.pdf)
## Guía de uso
 ```
md-links <path> <options>
 ```
- `path` : es la ruta de la carpeta o archivo.
- `option` :
  - `--validate`: estas opción validan si el link funciona o no.
  - `--stats`: estas opción muestran estadísticas de los links(existentes y únicos)
Al combinar las opciones mostrará la cantidad de links que hay, los rotos y  únicos.
****
## CLI (Línea de comandos)
 ```
md-links <path> <options>
 ```
Si desea retornar las propiedades **file, href y text**, ejecute: 

**$ judithq-md-links ./README.md**
```sh
href:https://github.com/JudithCristina/LIM009-fe-md-links
text:[GitHub Judith Quiñones]
file:/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/README.md

href:https://github.com/JudithCristina/LIM009-fe-md-links/files/3331762/Diagrama.de.flujo.Proyecto-Laboratoria.1.pdf
text:[Diagrama de flujo Proyecto-Laboratoria(1).pdf]
file:/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/README.md
```
Si desea retornar las propiedades **file, href, text, status y value**, ejecute:

**$ judithq-md-links ./README.md --validate**
```sh 
href:https://github.com/JudithCristina/LIM009-fe-md-links
text:[GitHub Judith Quiñones]
file:/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/README.md
code:200
status:OK

href:https://github.com/JudithCristina/LIM009-fe-md-links/files/3331762/Diagrama.de.flujo.Proyecto-Laboratoria.1.pdf
text:[Diagrama de flujo Proyecto-Laboratoria(1).pdf]
file:/home/judith-c-q-i/Escritorio/LIM009-fe-md-links/README.md
code:200
status:OK
```
Si desea retornar las propiedades **total**(cantidad total de links) y **unique**(cantidad de links unicos), ejecute:

**$ judithq-md-links ./README.md --stats**
```sh
Total: 2
Unique: 2
```
Si desea retornar las propiedades **total**(cantidad total de links) y **unique**(cantidad de links unicos) y **broken** cantidad de links inactivos), ejecute:

**$ md-links ./some/example.md --s --v**
```sh
Total: 2
Unique: 2
Broken: 0
```
****