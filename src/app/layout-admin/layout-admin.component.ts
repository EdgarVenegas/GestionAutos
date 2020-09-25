import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '@core/models/loginresponse.model';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {

  user: LoginResponse;

  constructor(
    private userService: UserService
  ) { }
  title = 'GestionAutos';
  userName: string;
  isMaps(path): boolean {
    return false;
  }

  // tslint:disable-next-line: ban-types
  click(texto: String): void {
    console.log(texto);
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

}
