
class ClienteEspecial extends Cliente{
    constructor(nome,cpf,conta,numero,saldo){
        super(nome, cpf, conta)
        this.contaEspecial =new Conta(numero,saldo);
    }
    get numero(){
        return this.contaEspecial._numero;
    }
    set numero(novo_numero){
        this.contaEspecial._numero = novo_numero;

    }
    get saldo(){
        return this.contaEspecial._saldo;
    }
    SaldoTotal(){
        return this.conta._saldo + this.contaEspecial._saldo;
    }

}
