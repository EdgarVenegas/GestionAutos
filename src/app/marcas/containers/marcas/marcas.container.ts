import { Component, OnInit } from '@angular/core';
import { MarcaModel } from '@core/models/marca.model';
import { MarcaService } from '@core/services/marca.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.container.html',
  styleUrls: ['./marcas.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class MarcasContainer implements OnInit {

  marcas: MarcaModel[];
  constructor(
    private marcaService: MarcaService
  ) { }

  ngOnInit(): void {
    this.marcaService.getAllMarcas().subscribe(x => {
      this.marcas = x;
    });
  }

}
