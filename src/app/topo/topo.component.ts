import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { error } from '@angular/compiler/src/util';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofetas: Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
  }

  public pesquisa(termoDaBusca: string): void {
    this.ofetas =  this.ofertasService.pesquisaOfertas(termoDaBusca);
    this.ofetas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log(erro),
      () => console.log('Fluxo de eventos completo'));
  }
}
