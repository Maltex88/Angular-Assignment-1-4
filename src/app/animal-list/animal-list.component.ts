import { Component, OnInit } from '@angular/core';
import { AnimalDataService } from './animal-data.service'
import { FormControl, Validators, AbstractControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  myAnimalList;
  selectedAnimal;
  showStyle = false;


  constructor(private animalData: AnimalDataService) {}

  addAnimalForm: FormGroup = new FormGroup({

  animalNameControl: new FormControl('', [Validators.required,  Validators.pattern("[a-zA-Z äåöÅÄÖ ]+")]),
  animalColorControl: new FormControl('', [Validators.required,  Validators.pattern("[a-zA-Z äåöÅÄÖ ]+")]),

  },
  {  }
);

  ngOnInit() {
    this.animalNameControl = this.addAnimalForm.controls['animalNameControl'];
    this.animalColorControl = this.addAnimalForm.controls['animalColorControl'];
    this.myAnimalList = this.animalData.fetchAnimalList()
  }



animalNameControl: AbstractControl;
animalColorControl: AbstractControl
  addAnimal() {
    let name = this.animalNameControl.value
    let color = this.animalColorControl.value
    this.animalData.addAnimalToList({name: `${name}`, color: `${color}`})

  }
  onSelect(animal){
    this.selectedAnimal = animal;
  }

}
