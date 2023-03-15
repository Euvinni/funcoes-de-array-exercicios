const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function objetoCaixaAlta(obj){
    const novoObjeto = {}
    // novoObjeto[`nome`] = `Top`
    // console.log(novoObjeto);
    for(let obj1 in obj){
    novoObjeto[obj1] = obj[obj1].toUpperCase()    
    
  }     
    return novoObjeto
}

objetoCaixaAlta(objeto)



function textosCorridos(obj){
    

   return `O nome é ${obj.nome}, a profissão é ${obj.profissao}, o username é ${obj.username} e a senha é ${obj.senha}.`

}

textosCorridos(objeto)


function novaFuncao(objeto, callback){
    const valor = callback(objeto)
    console.log(valor);

}

novaFuncao(objeto, objetoCaixaAlta)
novaFuncao(objeto, textosCorridos)