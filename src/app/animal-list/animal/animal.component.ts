import { Component, OnInit, Input } from '@angular/core';
import { AnimalDataService } from '../animal-data.service'
import { Animal } from '../animal'
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
    animalDataList;
    isSelected: boolean = false;
    @Input() animal: Animal;

  constructor(private animals: AnimalDataService) { }
  
  ngOnInit() {
    this.animalDataList = this.animals.fetchAnimalList()

  }
  selectYourAnimal(i) {
    this.isSelected = !this.isSelected;
  }
  removeAnimal(i) {
    this.animalDataList.splice(i, 1)
    console.log(i)
  }
}
