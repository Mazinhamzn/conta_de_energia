var enderecoContrato = "0xe5c89c66a7b3976082b14a22242e56500925ec12";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

function pagamentocontaEnergia() {
    var textoCampo = document.frmStatus.pagamentocontaEnergia.value;
    var pagamentocontaEnergiatx = document.getElementById("pagamentocontaEnergiatx");
    {
    pagamentocontaEnergiatx.innerHTML = "Enviando transação...";
    contrato.pagamentocontaEnergia(textoCampo)
    .then( (transacao) => {
        console.log("pagamentocontaEnergia - Transacao ", transacao);   
        pagamentocontaEnergiatx.innerHTML = "Transação enviada. Aguardando processamento...";
        transacao.wait()
    .then( (resultado) => {
        pagamentocontaEnergia();
        pagamentocontaEnergiatx.innerHTML = "Transação realizada.";
            })       
    .catch( (err) => {
        console.error("pagamentocontaEnergia - Aguardando tx ser minerada");
        console.error(err);
        pagamentocontaEnergiatx.innerHTML = "Algo saiu errado: " + err.message;
            });
        })
    .catch( (err) => {
        console.error("pagamentocontaEnergia");
        console.error(err);
        pagamentocontaEnergiatx.innerHTML = "Algo saiu errado: " + err.message;
        });
    }


function enviaEther() {
    var textoCampo = document.frmStatus.enviaEthertx.value;
    var enviaEthertx = document.getElementById("enviaEthertx");
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
               
}
    
function registrarConsumoMensal () {
    var caixaConsumoMensalTx = document.getElementById("caixaConsumoMensalTx");     
    caixaConsumoMensalTx.value = 20000000000000000;    
}
