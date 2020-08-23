import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  imagenes: string[] = [
    '../../../assets/images/imagen1.jpg',
    '../../../assets/images/imagen2.jpg'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
