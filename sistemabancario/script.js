class ContaBancaria {
    constructor() {
        this.saldo = 0.00;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            alert("Saldo insuficiente!");
        }
    }
}

const conta = new ContaBancaria();
const valorInput = document.getElementById('valor');
const saldoSpan = document.getElementById('saldo-atual');

document.getElementById('deposito').addEventListener('click', () => {
    const valor = parseFloat(valorInput.value);
    if (!isNaN(valor) && valor > 0) {
        conta.depositar(valor);
        atualizarSaldo();
        valorInput.value = '';
    } else {
        alert("Insira um valor válido para depósito!");
    }
});

document.getElementById('saque').addEventListener('click', () => {
    const valor = parseFloat(valorInput.value);
    if (!isNaN(valor) && valor > 0) {
        conta.sacar(valor);
        atualizarSaldo();
        valorInput.value = '';
    } else {
        alert("Insira um valor válido para saque!");
    }
});

function atualizarSaldo() {
    saldoSpan.textContent = conta.saldo.toFixed(2);
}
