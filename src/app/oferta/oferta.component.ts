import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, Observer } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})

export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  // rota ativa
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
      this.oferta = oferta;
    });
    // this.route.params.subscribe((parametro: any) => {});
    // this.route.params.subscribe((parametro:any) => {})

    /*
    const tempo = Observable.interval(500);
    tempo.subscribe((intervalo: number) => {
      console.log(intervalo);
    });
    */

    // observable(observável)
    const meuObservableTeste = Observable.create((observer: Observer<string>) => {
        observer.next('Primeiro evento da strem');
        observer.error('algum erro encontrado na strem do evento');
    });

    // observable(observador)
    meuObservableTeste.subscribe(
      (resultado: any) => console.log(resultado),
      (erro: string) => console.log(erro)
      );
  }
}
