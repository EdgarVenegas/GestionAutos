import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoEditModel } from '@core/models/autoEdit.model';

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrls: ['./editar-auto.component.scss']
})
export class EditarAutoComponent implements OnInit {
  @Input() editarAutoModel: AutoEditModel;
  @Output() editClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  edit(): void {
    this.editClicked.emit();
  }

}
