import { Component, OnInit } from '@angular/core';
import { Resa } from '../resa';
import { Resor } from '../resor';

@Component({
  selector: 'app-boka-resa',
  templateUrl: './boka-resa.component.html',
  styleUrls: ['./boka-resa.component.css']
})
export class BokaResaComponent implements OnInit {
  resa = Resa;
  resor = Resor;
  selectedResa: Resa;
  buttonSelected: boolean = false;

  onSelect(resa: Resa): void {
  this.selectedResa = resa;
  }
  unMark() {
    console.log(this.selectedResa)
    this.selectedResa = {id: null, name: '', reseinfo: ''};

  }


  constructor() {

  }

  ngOnInit() {

  }


}
