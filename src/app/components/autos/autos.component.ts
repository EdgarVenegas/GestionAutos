import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Auto } from '../../auto.model';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit, OnChanges {
  autos: Auto[] = [
    {
      id : '1',
      nombre: 'BMW',
      modelo : 'Modelo Advance',
      año : 2020,
      descripcion : 'Es un auto Veloz',
      imagen: '../../../assets/images/imagen1.jpg'
    },
    {
      id : '2',
      nombre: 'Bentley',
      modelo : 'Modelo Advance',
      año : 2020,
      descripcion : 'Es un auto Veloz',
      imagen: '../../../assets/images/imagen2.jpg'
    }
  ];
  @Input() title: string;
  contador = 0;
  constructor() {
    console.log('1.Constructor');
   }

   ngOnChanges(changes: SimpleChanges): void{
    console.log('2.OnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('3.Ng on Init');
  }
  addCarrosVendidos(): void{
    this.contador++;
  }
}
