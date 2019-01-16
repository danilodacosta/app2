import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, Observer, Subscription } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})

export class OfertaComponent implements OnInit , OnDestroy {

  public oferta: Oferta;

  // rota ativa
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
      this.oferta = oferta;
    });
      }

  ngOnDestroy() {
     }
}
