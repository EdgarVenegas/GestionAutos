import { Component } from '@angular/core';


// Un componente esta conformado por tres archivos:
// 1. Archivo TypeScript (.ts)
// 2. Archivo HTML
// 3. Archvio SCSS

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-demo-auto',
    templateUrl: './auto.component.html',
    styleUrls: ['./auto.component.scss']
})

// Buenas Prácticas: Todas las varibales estén tipeadas. (var: type)
export class DemoAutoComponent {
    nombreAuto: string;                                          // Instancia de la Variable
    listaAutos: string[];
    constructor(){
        this.nombreAuto = '';                              // Asignación de la Variable
        this.listaAutos = ['Altima', 'Sentra', 'Versa'];
    }
}
