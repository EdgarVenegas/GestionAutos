import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoInputModel } from '@core/models/autoInput.model';

@Component({
  selector: 'app-registrar-auto',
  templateUrl: './registrar-auto.component.html',
  styleUrls: ['./registrar-auto.component.scss']
})
export class RegistrarAutoComponent implements OnInit {
  @Input() autoModel: AutoInputModel;
  @Output() registrarAutoClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  registrarAutoClicked(): void {
    this.registrarAutoClick.emit();
  }

}
