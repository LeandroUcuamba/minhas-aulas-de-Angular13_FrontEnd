import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'LeandroProgramador';

  userData ={
     email: 'leandrodosantos.lc5@gmail.com',
     role: 'Admin',
  };

  title = 'LeandroAngular'; //you may alter data;
}
