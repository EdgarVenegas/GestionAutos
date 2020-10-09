import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarcaInputModel } from '@core/models/marcaInput.model';

@Component({
  selector: 'app-registrar-marca',
  templateUrl: './registrar-marca.component.html',
  styleUrls: ['./registrar-marca.component.scss']
})
export class RegistrarMarcaComponent implements OnInit {
  @Input() marcaModel: MarcaInputModel;
  @Output() registrarMarcaClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  registrarMarcaClicked(): void {
    this.registrarMarcaClick.emit();
  }

}
