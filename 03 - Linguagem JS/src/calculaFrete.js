/*---------------------------------------
function: calculaFrete
description: Arquivo JavaScript contendo uma função calculaFrete, 
            que recebe o endereço e node do produto e faz um log
            no console com texto desejado.

Author: Leonardo Espinosa Vicente
Aula 03 - Backend JS
---------------------------------------*/

const calculaFrete = (enderecoEntrega, nodeProduto) => {

    let message = ""

    //Guard Clauses
    if (enderecoEntrega === undefined || enderecoEntrega === "") {
        throw "invalidAddress"
    }

    if (nodeProduto === undefined || nodeProduto === "") {
        throw "invalidProduct"
    }

    message = 'Olá, boas vindas à nossa Loja.\n'
    message += `Já recebemos as informações e iremos mandar o produto ${nodeProduto} para ${enderecoEntrega}`

    return message
}

const msg = calculaFrete("São José dos Campos, SP","Camiseta Star Wars")

console.log(msg)
