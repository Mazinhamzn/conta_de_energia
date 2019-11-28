var enderecoContrato = "0x6023900dd6bda8cf39f0a009d53ec662a400a2f2";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

function registrarPagamentoContaEnergia() {
    var textoCampo = document.frmStatus.txtPagamentocontaEnergia.value;
    var caixaPagamentocontaEnergiaTx = document.getElementById("caixaPagamentocontaEnergiaTx");
    if (textoCampo.length === 8) {
        caixaPagamentocontaEnergiaTx.innerHTML = "Enviando transação...";
        contrato.mudaStatusPagamento(textoCampo)
        .then( (transacao) => {
            console.log("registrarPagamentoContaEnergia - Transacao ", transacao);   
            caixaPagamentocontaEnergiaTx.innerHTML = "Transação enviada. Aguardando processamento...";
            transacao.wait()
            .then( (resultado) => {
                buscaStatusContrato();
                caixaPagamentocontaEnergiaTx.innerHTML = "Transação realizada.";
            })       
            .catch( (err) => {
                console.error("registrarPagamentoContaEnergia - Aguardando tx ser minerada");
                console.error(err);
                caixaPagamentocontaEnergiaTx.innerHTML = "Algo saiu errado: " + err.message;
            });
        })
            .catch( (err) => {
                 console.error("registrarPagamentoContaEnergia");
                console.error(err);
                caixaPagamentocontaEnergiaTx.innerHTML = "Algo saiu errado: " + err.message;
        });
    }
}
 
function buscaContaEnergia() {
    var campoContaEnergia = document.getElementById("campoContaEnergia");     
    contrato.contaEnergia()
    .then( (contaEnergia) => {
        campoContaEnergia.innerHTML = contaEnergia;
    })
    .catch( (err) => {
        console.error(err);
        campoContaEnergia.innerHTML = err;
    });

function buscaCalculoConsumo () {
    var campoConsumoMensal = document.getElementById("campoConsumoMensal");     
    contrato.consumoMensal()
    .then( (consumoMensal) => {
        campoConsumoMensal.innerHTML = consumoMensal;
    })
    .catch( (err) => {
        console.error(err);
        campoConsumoMensal.innerHTML = err;
    });
}
}
