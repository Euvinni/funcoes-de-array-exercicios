const arrayNumeros = [52, 68, 45, 5, 12, 19, 999, 1562]

// parte 1))

const quintuplos = arrayNumeros.map((item, indice, arrayOriginal) => {
  const calculo = item * 5
  return calculo
})

console.log(quintuplos);

// parte 2))

const metades = arrayNumeros.map((item, indice, arrayOriginal) => {
    const divisao = item / 2
    return divisao
})

console.log(metades);









