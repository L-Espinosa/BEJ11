

    /*
    http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx
      ?nCdEmpresa=
      &sDsSenha=
      &nCdServico=41106
      &sCepOrigem=<CEP DE ORIGEM>
      &sCepDestino=<CEP DE DESTINO>
      &nVlPeso=1
      &nCdFormato=1
      &nVlComprimento=20
      &nVlAltura=20
      &nVlLargura=20
      &nVlDiametro=0
      &sCdMaoPropria=n
      &nVlValorDeclarado=0
      &sCdAvisoRecebimento=n
      &StrRetorno=xml
      &nIndicaCalculo=3
    */
const converter = require("xml-js")

const consultaCEP = async (cepDestino) => {
    const cepOrigem = "12235649"
    
    const url = new URL("http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx")

    const Params =new URLSearchParams({
        nCdEmpresa: "",
        sDsSenha: "",
        nCdServico: "41106",
        sCepOrigem: cepOrigem,
        sCepDestino: cepDestino,
        nVlPeso: "1",
        nCdFormato: "1",
        nVlComprimento: "20",
        nVlAltura: "20",
        nVlLargura: "20",
        nVlDiametro: "0",
        sCdMaoPropria: "n",
        nVlValorDeclarado: "0",
        sCdAvisoRecebimento: "n",
        StrRetorno: "xml",
        nIndicaCalculo: "3"
    })

    url.search = Params.toString()
    const response = await fetch(url.href)
                    .then(response => response.text())                   
    
    const options = {compact: true, ignoreComment: true, spaces: 4}
    const objConvertido = JSON.parse(converter.xml2json(response, options))
   
    const result = {
        prazoEntrega: objConvertido.Servicos.cServico.PrazoEntrega._text,
        valorFrete: objConvertido.Servicos.cServico.Valor._text,
        entregaSabado: objConvertido.Servicos.cServico.EntregaSabado._text
    }

    return result
}

const consultaEndereco = async(cepDestino) => {

    //Guard Clause
    if (cepDestino === undefined || cepDestino === ""){
        return ""
    }

    const url = `https://viacep.com.br/ws/${cepDestino}/json/`

    const result = await fetch(url)
                    .then(response => response.text())       
                    .then(response => JSON.parse(response) )

    return result
}
module.exports = { consultaCEP, consultaEndereco }