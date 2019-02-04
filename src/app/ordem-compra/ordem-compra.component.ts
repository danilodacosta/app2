import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco = '';
  public numero = '';
  public complemento = '';
  public formaPagamento = '';

  // controle de validação dos campos
  public enderecoValido: boolean;
  public numeroValidp: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  constructor() { }

  ngOnInit() {
  }


  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    // console.log('endereço: ' + this.endereco);

    // se a string for maior que 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    console.log('numero: ' + this.numero);
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    console.log('complemento: ' + this.complemento);
  }

  public atualizaFormaPagamento(formaPagemnto: string): void {
    this.formaPagamento = formaPagemnto;
    console.log('forma de pagamento: ' + this.formaPagamento);
  }

}
