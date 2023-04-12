alert("Bienvenido a el simulador de asociaciones de cultivo! Cargando tu cultivo podras determinar con cuales otros es compatible para que crezcan juntos, sanos y fuertes")



//Se declaran las variables

let asociacionesCultivos = {
ajo: ['lechuga', 'cebolla', 'zanahoria', 'tomate'],
acelga: ['zanahoria', 'rábano', 'frijoles', 'maíz', 'remolacha'],
achicoria: ['zanahoria', 'rábano', 'cebolla', 'apio', 'frijoles', 'maíz', 'calabaza'],
ají: ['tomate', 'berenjena', 'cebolla', 'zanahoria', 'remolacha', 'lechuga'],
aji: ['tomate', 'berenjena', 'cebolla', 'zanahoria', 'remolacha', 'lechuga'],
albahaca: ['tomate', 'berenjena', 'pimiento', 'calabacín', 'judía'],
alcachofa: ['tomate', 'cebolla', 'zanahoria', 'perejil'],
apio: ['zanahoria', 'cebolla', 'perejil', 'frijol'],
arveja: ['zanahoria', 'maíz', 'pepino', 'rábano', 'repollo', 'lechuga'],
berenjena: ['tomate', 'albahaca', 'cebolla', 'frijol'],
berro: ['lechuga', 'rábano', 'cebolla', 'zanahoria'],
brócoli: ['zanahoria', 'rábano', 'cebolla', 'espinaca'],
brocoli: ['zanahoria', 'rábano', 'cebolla', 'espinaca'],
calabaza: ['maíz', 'frijol', 'menta', 'romero'],
calabacín: ['maíz', 'frijol', 'menta'],
canela: ['nuez moscada', 'jengibre', 'clavo', 'cardamomo'],
cardamomo: ['canela', 'clavo', 'jengibre', 'pimienta negra'],
cayena: ['tomates', 'cebollas', 'ajo', 'zanahorias', 'lechugas'],
cebolla: ['tomate', 'zanahoria', 'lechuga'],
cherry: ['lechugas', 'cebollas', 'zanahorias', 'apio', 'pepinos'],
chile: ['tomate', 'cebolla', 'zanahoria', 'frijol'],
ciboulette: ['zanahorias', 'tomates', 'pimientos', 'lechugas', 'repollo'],
cilantro: ['frijol', 'rábano', 'tomate', 'pepino'],
clavo: ['tomillo', 'romero', 'orégano', 'menta'],
col: ['zanahoria', 'rábano', 'cebolla', 'pepino'],
coliflor: ['zanahoria', 'rábano', 'cebolla', 'pepino'],
coriandro: ['frijol', 'rábano', 'tomate', 'pepino'],
eneldo: ['zanahorias', 'pepinos', 'coles', 'lechugas', 'cebollas'],
escarola: ['zanahoria', 'maíz', 'frijoles', 'remolacha', 'berenjena', 'pimiento'],
espárragos: ['tomate', 'cebolla', 'zanahoria', 'perejil'],
esparragos: ['tomate', 'cebolla', 'zanahoria', 'perejil'],
espinaca: ['lechuga', 'brócoli', 'cebolla', 'fresa'],
estragon: ['tomates', 'frijoles', 'guisantes', 'espinacas', 'lechugas'],
estragón: ['tomates', 'frijoles', 'guisantes', 'espinacas', 'lechugas'],
fresa: ['espinaca', 'zanahoria', 'cebolla', 'menta'],
frijol: ['maíz', 'calabaza', 'tomate', 'cebolla', 'zanahoria', 'pepino', 'apio'],
frijoles: ['maíz', 'calabaza', 'tomate', 'cebolla', 'zanahoria', 'pepino', 'apio'],
girasol: ['maíz', 'frijoles', 'pepinos', 'calabacín', 'calabaza'],
guisante: ['zanahoria', 'cebolla', 'espinaca', 'frijol'],
guisantes: ['zanahoria', 'cebolla', 'espinaca', 'frijol'],
habas: ['cebolla', 'zanahoria', 'espinaca', 'frijol'],
hinojo: ['col', 'zanahoria', 'pepinos', 'cebolla', 'perejil'],
jalapeno: ['tomates', 'cebollas', 'ajo', 'zanahorias', 'lechugas'],
jalapeño: ['tomates', 'cebollas', 'ajo', 'zanahorias', 'lechugas'],
judias: ['zanahorias', 'apio', 'maíz', 'pepinillos', 'patatas', 'fresas', 'frutillas'],
judías: ['zanahorias', 'apio', 'maíz', 'pepinillos', 'patatas', 'fresas', 'frutillas'],
kale: ['zanahoria', 'rábano', 'frijoles', 'remolacha', 'pepinos', 'perejil'],
lavanda: ['zanahorias', 'cebollas', 'lechugas', 'fresas', 'tomates'],
lechuga: ['zanahoria', 'rábano', 'cebolla'],
maíz: ['calabacín', 'frijol', 'pepino', 'rábano'],
maiz: ['calabacín', 'frijol', 'pepino', 'rábano'],
manzanilla: ['zanahorias', 'brócoli', 'coliflor', 'pepinos', 'tomates'],
mejorana: ['tomates', 'pimientos', 'berenjenas', 'calabacines', 'calabazas'],
melisa: ['coliflor', 'repollo', 'tomates', 'pepinos', 'calabacines'],
melón: ['maíz', 'frijol', 'rábano', 'espinaca'],
melon: ['maíz', 'frijol', 'rábano', 'espinaca'],
menta: ['repollo', 'coliflor', 'tomates', 'pimientos', 'pepinos'],
morron: ['tomate', 'albahaca', 'cebolla', 'frijol'],
morrón: ['tomate', 'albahaca', 'cebolla', 'frijol'],
mostaza: ['zanahoria', 'rábano', 'coliflor', 'repollo', 'espinacas', 'cebolla'],
nabo: ['lechuga', 'zanahoria', 'cebolla', 'perejil'],
oregano: ['tomates', 'berenjenas', 'pimientos', 'calabacines', 'calabazas'],
orégano: ['tomates', 'berenjenas', 'pimientos', 'calabacines', 'calabazas'],
papa: ['judías', 'maíz', 'guisantes', 'repollo', 'cebolla', 'zanahoria', 'col', 'apio'],
pakchoi: ['lechuga', 'espinacas', 'repollo', 'zanahorias', 'cebollas', 'rábanos'],
pepinillos: ['eneldo', 'maíz', 'lechuga', 'guisantes', 'fresas', 'frutillas'],
pepino: ['maíz', 'frijol', 'rábano', 'girasol'],
perejil: ['zanahoria', 'cebolla', 'apio', 'romero'],
pimienta: ['cardamomo', 'clavo', 'canela', 'jengibre'],
pimiento: ['tomate', 'albahaca', 'cebolla', 'frijol'],
puerro: ['zanahoria', 'apio', 'lechuga', 'frijoles', 'espinacas'],
rabanito: ['espinacas', 'lechuga', 'frijoles', 'col', 'zanahoria'],
rabano: ['lechuga', 'zanahoria', 'cebolla', 'pepino'],
rábano: ['lechuga', 'zanahoria', 'cebolla', 'pepino'],
radicheta: ['zanahoria', 'espinacas', 'frijoles', 'pepinos', 'tomate'],
remolacha: ['lechuga', 'zanahoria', 'cebolla', 'perejil'],
repollo: ['zanahoria', 'pepinos', 'frijoles', 'lechuga', 'tomate', 'cebolla'],
romero: ['zanahorias', 'repollo', 'coliflor', 'pimientos', 'judías verdes'],
rucula: ['fresas', 'pepinos', 'zanahoria', 'remolacha', 'cebolla'],
rúcula: ['fresas', 'pepinos', 'zanahoria', 'remolacha', 'cebolla'],
sandía: ['maíz', 'frijoles', 'calabaza', 'pepino', 'melón', 'girasol'],
tomate: ['albahaca', 'cebolla', 'pimiento', 'zanahoria'],
tomillo: ['berenjenas', 'pimientos', 'tomates', 'cebollas', 'ajo'],
zanahoria: ['apio', 'lechugas', 'perejil'],
zapallito: ['maíz', 'frijoles', 'arvejas', 'pepinos', 'tomates'],
zapallo: ['maíz', 'frijoles', 'arvejas', 'pepinos', 'tomates', 'lechugas'],
zuchini: ['maíz', 'frijol', 'menta', 'cebolla'],
zucchini: ['maíz', 'frijol', 'menta', 'cebolla']
};


//Funcion para buscar las asociaciones de cultivo

function buscarAsociaciones() {
  let planta = document.getElementById('planta').value.toLowerCase();
  if (asociacionesCultivos.hasOwnProperty(planta)) {
    let asociados = asociacionesCultivos[planta];
    document.getElementById('resultado').innerHTML = `Los cultivos que se pueden asociar con ${planta} son: ${asociados}`;
  } else {
    document.getElementById('resultado').innerHTML = 'No se encontraron asociaciones para esta especie de planta';
  }
}

//function: Declara una función con los parámetros especificados.
//let: Asigna nombres a los resultados de los cálculos
//getElementById(): El método permite, como su nombre indica, seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado.
//toLowerCase(): El método devuelve el valor en minúsculas de la cadena que realiza la llamada.
//hasOwnProperty(): El método devuelve un booleano indicando si el objeto tiene la propiedad especificada.
//innerHTML: devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.