var enderecoContrato = "0xe5c89c66a7b3976082b14a22242e56500925ec12";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

function enviaEther() {
    var textoCampo = document.frmStatus.txtPagamentocontaEnergia.value;
    var enviaEthertx = document.getElementById("enviaEthertx");
    if (textoCampo.length === 8) {
        enviaEthertx.innerHTML = "Enviando transação...";
        contrato.enviaEther(textoCampo)
        .then( (transacao) => {
            console.log("enviaEther - Transacao ", transacao);   
            enviaEthertx.innerHTML = "Transação enviada. Aguardando processamento...";
            transacao.wait()
            .then( (resultado) => {
                enviaEther();
                enviaEthertx.innerHTML = "Transação realizada.";
            })       
            .catch( (err) => {
                console.error("enviaEther - Aguardando tx ser minerada");
                console.error(err);
                enviaEthertx.innerHTML = "Algo saiu errado: " + err.message;
            });
        })
            .catch( (err) => {
                 console.error("enviaEther");
                console.error(err);
                enviaEthertx.innerHTML = "Algo saiu errado: " + err.message;
        });
    }

    
function registrarConsumoMensal () {
    var caixaConsumoMensalTx = document.getElementById("caixaConsumoMensalTx");     
    contrato.consumoMensal()
    .then( (consumoMensal) => {
        caixaConsumoMensalTx.innerHTML = consumoMensal;
    })
    .catch( (err) => {
        console.error(err);
        caixaConsumoMensalTx.innerHTML = err;
    });
}
}
