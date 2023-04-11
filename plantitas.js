alert("Bienvenido a el simulador de asociaciones de cultivo! Cargando tu cultivo podras determinar con cuales otros es compatible para que crezcan juntos, sanos y fuertes")



//Se declaran las variables

let asociacionesCultivos = {
ajo: ['lechuga', 'cebolla', 'zanahoria', 'tomate'],
alcachofa: ['tomate', 'cebolla', 'zanahoria', 'perejil'],
apio: ['zanahoria', 'cebolla', 'perejil', 'frijol'],
berenjena: ['tomate', 'albahaca', 'cebolla', 'frijol'],
berro: ['lechuga', 'rábano', 'cebolla', 'zanahoria'],
brócoli: ['zanahoria', 'rábano', 'cebolla', 'espinaca'],
calabaza: ['maíz', 'frijol', 'menta', 'romero'],
calabacín: ['maíz', 'frijol', 'menta'],
cebolla: ['tomate', 'zanahoria', 'lechuga'],
chile: ['tomate', 'cebolla', 'zanahoria', 'frijol'],
cilantro: ['frijol', 'rábano', 'tomate', 'pepino'],
col: ['zanahoria', 'rábano', 'cebolla', 'pepino'],
coliflor: ['zanahoria', 'rábano', 'cebolla', 'pepino'],
espárragos: ['tomate', 'cebolla', 'zanahoria', 'perejil'],
esparragos: ['tomate', 'cebolla', 'zanahoria', 'perejil'],
espinaca: ['lechuga', 'brócoli', 'cebolla', 'fresa'],
fresa: ['espinaca', 'zanahoria', 'cebolla', 'menta'],
guisante: ['zanahoria', 'cebolla', 'espinaca', 'frijol'],
habas: ['cebolla', 'zanahoria', 'espinaca', 'frijol'],
lechuga: ['zanahoria', 'rábano', 'cebolla'],
maíz: ['calabacín', 'frijol', 'pepino', 'rábano'],
maiz: ['calabacín', 'frijol', 'pepino', 'rábano'],
melón: ['maíz', 'frijol', 'rábano', 'espinaca'],
melon: ['maíz', 'frijol', 'rábano', 'espinaca'],
nabo: ['lechuga', 'zanahoria', 'cebolla', 'perejil'],
pepino: ['maíz', 'frijol', 'rábano', 'girasol'],
perejil: ['zanahoria', 'cebolla', 'apio', 'romero'],
pimiento: ['tomate', 'albahaca', 'cebolla', 'frijol'],
rabano: ['lechuga', 'zanahoria', 'cebolla', 'pepino'],
rábano: ['lechuga', 'zanahoria', 'cebolla', 'pepino'],
remolacha: ['lechuga', 'zanahoria', 'cebolla', 'perejil'],
tomate: ['albahaca', 'cebolla', 'pimiento', 'zanahoria'],
zanahoria: ['apio', 'lechugas', 'perejil'],
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