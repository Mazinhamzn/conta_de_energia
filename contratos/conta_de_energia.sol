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
    
    constructor (address payable carteiraconsumidorEnergia, address payable carteiradistribuidorEnergia) public {
        consumidorEnergia = carteiraconsumidorEnergia;
        distribuidorEnergia = carteiradistribuidorEnergia;
        
    }
  
    function calculoConsumo (uint256 medidaConsumocalculado) public returns (uint256) {
        consumoMensal = medidaConsumocalculado;
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
    
    
    function pagamentocontaEnergia () public payable autorizadoPagamento {
        require(pago == false, "Pagamento não realizado");
        require(msg.value == contaEnergia, "Valor enviado inválido");
        distribuidorEnergia.transfer(address(this).balance);
    }

 }
