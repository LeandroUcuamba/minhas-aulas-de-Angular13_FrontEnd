import { Component, OnInit } from '@angular/core';

import { Animal } from '../Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
      { name: "Turca", type: "Dog", age: 4 },
      { name: 'Tom', type: 'Cat', age: 6 },
      { name: 'Frida', type: 'Dog', age: 11 },
      { name: 'Bob', type: 'Horse', age: 6 },
  ];

  constructor(private listService: ListService) { }

  animalDetails = '';

  showAge(animal: Animal){
      this.animalDetails = `O pet ${animal.name} tem ${animal.age}`;
  }

  removeAnimal(animal: Animal){
    this.animals = this.listService.remove(this.animals, animal);
  }

  ngOnInit(): void {}

}
