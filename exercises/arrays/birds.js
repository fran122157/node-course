/* eslint one-var: 0 */

const birds = [
  {
    name: "Hornero",
    family: "Furnaridae"
  },
  {
    name: "Junquero",
    family: "Furnaridae"
  },
  {
    name: "Tachurí Siete Colores",
    family: "Tirannydae"
  },
  {
    name: "Piojito Común",
    family: "Tirannydae"
  },
  {
    name: "Benteveo Común",
    family: "Tirannydae"
  },
  {
    name: "Zorzal Colorado",
    family: "Turdidae"
  }
];

// Imprimir lo siguiente:
// 1. Array de nombres de todos los pájaros ordenados alfabéticamente.

/* console.log("EJ 1: ", birds.sort((a, b) => {
  if (a.name === b.name) {
    return 0;
  }
  return (a.name > b.name) ? 1 : -1;
}));
 */

console.log("EJ 1: ", birds.sort());

// 2. Obtener el objeto completo del que tiene nombre "Zorzal Colorado".
console.log("EJ 2: ", birds.find((a) => a.name === "Zorzal Colorado"));

// 3. Array de nombres de los pájaros de la familia "Tirannydae".
console.log("EJ 3: ", birds.filter((a) => a.family === "Tirannydae"));

// 4. Cantidad de pájaros de la familia "Furnaridae".
console.log("EJ 4: ", birds.reduce((a, b) => {
  return (b.family === "Furnaridae") ? a + 1 : a + 0;
}, 0));