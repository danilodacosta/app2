import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { error } from '@angular/compiler/src/util';
import { Subject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofetas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>(); // serve como proxy

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofetas = this.subjectPesquisa // retorno Oferta[]
    .debounceTime(1000) // executa a ação do swicthMap após 1s.
    .distinctUntilChanged() // executa o metodo somente se tiver uma alteração no termo de pesquisa , evitando chamadas duplicadas.
    .switchMap((termo: string) => {

      if (termo.trim() === '') {
        // retornar um observable de array de ofertas vazio.
        return Observable.of<Oferta[]>([]);
      }
        return this.ofertasService.pesquisaOfertas(termo);
    });

    this.ofetas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }
}
