import { Component, OnInit , Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  @Input() public idPedidoCompra: number;

  constructor() { }

  ngOnInit() {
  }

}
