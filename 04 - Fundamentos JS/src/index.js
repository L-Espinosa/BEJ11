/*---------------------------------------
function: calculaFrete
description: Arquivo JavaScript contendo uma função calculaFrete, 
            que recebe a cidade e o estado e retorna o valor do frete.

Author: Leonardo Espinosa Vicente
Aula 04 - Backend JS
---------------------------------------*/
const calculaFrete = (cidade, estado) => {
    const tabelaFretePorEstado = []

    //Guard Clauses
    if (cidade === undefined || cidade === "") {
        throw 'invalidCity'
    }

    if (estado === undefined || estado === "") {
        throw 'invalidState'
    }
    
    //tabela de fretes com valores pré-definidos no escopo
    tabelaFretePorEstado.push({estado: "SP", valor: 5, regiao: "Sudeste"     })
    tabelaFretePorEstado.push({estado: "RJ", valor: 6.50, regiao: "Sudeste"  })
    tabelaFretePorEstado.push({estado: "MG", valor: 7.20, regiao: "Sudeste"  })
    tabelaFretePorEstado.push({estado: "PR", valor: 8, regiao: "Sul"         })
    tabelaFretePorEstado.push({estado: "AM", valor: 23.50, regiao: "Norte"   })
    tabelaFretePorEstado.push({estado: "AC", valor: 23.50, regiao: "Norte"   })
    tabelaFretePorEstado.push({estado: "RO", valor: 22, regiao: "Norte"      })
    tabelaFretePorEstado.push({estado: "RR", valor: 22, regiao: "Norte"      })

    //Outros estados - Valor por regiao
    tabelaFretePorEstado.push({estado: "AL", valor: 15, regiao: "Nordeste"   })
    tabelaFretePorEstado.push({estado: "AP", valor: 20, regiao: "Norte"      })
    tabelaFretePorEstado.push({estado: "BA", valor: 15, regiao: "Nordeste"   })
    tabelaFretePorEstado.push({estado: "CE", valor: 15, regiao: "Nordeste"   })
    tabelaFretePorEstado.push({estado: "DF", valor: 11.50, regiao: "Centro-Oeste"})
    tabelaFretePorEstado.push({estado: "ES", valor: 8, regiao: "Sudeste"     })
    tabelaFretePorEstado.push({estado: "GO", valor: 11.50, regiao: "Centro-Oeste"})
    tabelaFretePorEstado.push({estado: "MA", valor: 15, regiao: "Nordeste"   })
    tabelaFretePorEstado.push({estado: "MT", valor: 11.50, regiao: "Centro-Oeste"})
    tabelaFretePorEstado.push({estado: "MS", valor: 11.50, regiao: "Centro-Oeste"})
    tabelaFretePorEstado.push({estado: "PA", valor: 20, regiao: "Norte"      })
    tabelaFretePorEstado.push({estado: "PB", valor: 15, regiao: "Nordeste"      })
    tabelaFretePorEstado.push({estado: "PE", valor: 15, regiao: "Nordeste"      })
    tabelaFretePorEstado.push({estado: "PI", valor: 15, regiao: "Nordeste"      })
    tabelaFretePorEstado.push({estado: "RN", valor: 15, regiao: "Nordeste"      })
    tabelaFretePorEstado.push({estado: "RS", valor: 10, regiao: "Sul"      })
    tabelaFretePorEstado.push({estado: "SC", valor: 10, regiao: "Sul"      })
    tabelaFretePorEstado.push({estado: "SE", valor: 15, regiao: "Nordeste"      })
    tabelaFretePorEstado.push({estado: "TO", valor: 20, regiao: "Norte"      })
    

    if (estado === "SP" && cidade === "São Paulo") {
        return 0
    } else {
        for (let key in tabelaFretePorEstado) {
            const obj = tabelaFretePorEstado[key]

            if (obj.estado === estado) {
                return obj.valor
            }
        }
    }
}

const city = "São José dos Campos"
const state = "SP"

const message = `O frete para ${city}/${state} é de R$ ${calculaFrete(city,state)}`

console.log(message)