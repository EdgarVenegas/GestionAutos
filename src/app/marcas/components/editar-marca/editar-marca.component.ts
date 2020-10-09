import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarcaEditModel } from '@core/models/marcaEdit.model';

@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.component.html',
  styleUrls: ['./editar-marca.component.scss']
})
export class EditarMarcaComponent implements OnInit {
  @Input() editarMarcaModel: MarcaEditModel;
  @Output() editClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  edit(): void {
    this.editClicked.emit();
  }

}
