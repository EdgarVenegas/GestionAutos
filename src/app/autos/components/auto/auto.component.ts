import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '@core/models/auto.model';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {
  @Input() auto: Auto;
  @Output() seVendidoAuto: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  comprar(id: string): void {
    console.log(`Se vendio el auto con el id: ${id}` );
    this.seVendidoAuto.emit();
  }

}
