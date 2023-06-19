const frete = require('../services/calculaFrete')

describe('when state is SP', () => {
    test('returns R$0.00 (free shiping)', () => {
        const result = frete("São Paulo","SP")

        expect(result).toBe(0) //matcher
    })
})

describe('when state is SC', () => {
    test('returns R$10.00', () => {
        const result = frete("Florianópolis","SC")

        expect(result).toBe(10) //matcher
    })
})