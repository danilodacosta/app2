import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import '../util/rxjs-extensions';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>(); // serve como proxy

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa // retorno Oferta[]
    .debounceTime(1000) // executa a ação do swicthMap após 1s.
    .distinctUntilChanged() // executa o metodo somente se tiver uma alteração no termo de pesquisa , evitando chamadas duplicadas.
    .switchMap((termo: string) => {

      if (termo.trim() === '') {
        // retornar um observable de array de ofertas vazio.
        return Observable.of<Oferta[]>([]);
      }
        return this.ofertasService.pesquisaOfertas(termo);
    })

    .catch((err: any) => {
        console.log(err);
        return Observable.of<Oferta[]>([]);
    });
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }
}
