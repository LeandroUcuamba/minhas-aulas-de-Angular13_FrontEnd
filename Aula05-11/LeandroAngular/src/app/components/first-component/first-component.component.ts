import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Leandro";
  age: number = 23;
  job = "programador";
  hobbies = ['Jogar','Tocar','Cantar'];
  car = {
    name: 'SantosX',
    year: '2021',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
