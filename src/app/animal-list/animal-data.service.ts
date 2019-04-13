import { Injectable } from '@angular/core';
import { Animal } from './animal';
@Injectable({
  providedIn: 'root'
})

export class AnimalDataService {
  animalList: Animal[] = [
    {name: 'Hippo', color: 'Grey'},
    {name: 'Doggy', color: 'White'},
    {name: 'Kitty', color: 'Orange'},
    {name: 'Unicorn', color: 'White'},
    {name: 'Fishy', color: 'Silver'},
    {name: 'Bully', color: 'Black'},
  ]


  constructor() { }

  fetchAnimalList() {
    return this.animalList;
  }
  addAnimalToList(Animal) {
    this.animalList.push(Animal)
  }
}
