const {consultaEndereco,consultaCEP} = require('../services/viaCEP')

describe('when CEP is 12235649', () => {
    test('returns Rua Icatu', () => {
        const result = consultaEndereco("12235649")

        expect(result).toBe('Rua Icatu') //matcher
    })
})