pragma solidity 0.5.13;
    
 contract Energia {
    
    address payable public consumidorEnergia;
    address payable public distribuidorEnergia;
    uint256 public contaEnergia;
    uint public medidaConsumokWh;
    uint public consumoMensal;
    bool public pago;
  
    event pagamentoRealizado (uint valor);
    
    modifier autorizadoPagamento () {
        require (msg.sender == consumidorEnergia, "Operaçao exclusiva do consumidor");
        _;    
    }
    
    constructor (address payable carteiraConsumidorEnergia, address payable carteiraDistribuidorEnergia) public {
        consumidorEnergia = carteiraConsumidorEnergia;
        distribuidorEnergia = carteiraDistribuidorEnergia;
        
    }
    
   function registrarConsumoMensal (uint256 medidaConsumocalculado) public {
        consumoMensal = medidaConsumocalculado;
   } 
   
    function calculoConsumo () public returns (uint256) {
        if (consumoMensal <= 30) {
            contaEnergia = 1 ether;
        }
        if (consumoMensal > 31 && consumoMensal < 100) {
            contaEnergia = 2 ether;
        }
        if (consumoMensal > 101 && consumoMensal < 220) {
            contaEnergia = 3 ether;
        }    
        if (consumoMensal > 220) {
            contaEnergia = 4 ether;
        } 
        return contaEnergia;
    }

    function pagamentoContaEnergia () public payable autorizadoPagamento {
        require(pago == false, "Pagamento já realizado");
        require(msg.value == contaEnergia, "Valor enviado inválido");
        distribuidorEnergia.transfer(address(this).balance);
        pago = true;
    }
    
    function enviaEther() public returns(bool) {
        require(msg.sender==consumidorEnergia, "Somente o consumidor de Energia tem permissão para enviar Ether para este contrato");
        require(address(this).balance>0, "O contrato não tem saldo");
        consumidorEnergia.transfer(address(this).balance);
        return true;
    }
    
   

 }
