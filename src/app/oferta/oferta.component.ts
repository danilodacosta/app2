import { Oferta } from './../shared/oferta.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Observable, Observer, Subscription } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { CarrinhoService } from '../carrinho.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {
  public oferta: Oferta;

  // rota ativa
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService
        .getOfertasPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        });
    });
  }

  ngOnDestroy() {}

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta);
  }
}
