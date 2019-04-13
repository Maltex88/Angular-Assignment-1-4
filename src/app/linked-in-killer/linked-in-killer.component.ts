import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup } from '@angular/forms';
import {  listOfSkills } from './skills'
import { EmployersService } from '../employers.service'
@Component({
  selector: 'app-linked-in-killer',
  templateUrl: './linked-in-killer.component.html',
  styleUrls: ['./linked-in-killer.component.css']
})
export class LinkedInKillerComponent implements OnInit {
  toggleEmployerDiv: boolean = false;
  ListOfSkills = listOfSkills;
  isSelected: boolean = false;
  buttonToggle: boolean = false;
  lister;
  constructor(public employService: EmployersService) { }


  LinkedInFormGrp: FormGroup = new FormGroup({

  firstNameControl: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z äåöÅÄÖ ]+")]),
  lastNameControl: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z äåöÅÄÖ]+")]),
  locationControl: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z åäöÅÄÖ]+"), Validators.minLength(2), Validators.maxLength(15) ]),
  descriptionControl: new FormControl('', [Validators.required, Validators.minLength(20), Validators.pattern("[a-zA-Z ÅÄÖäåö]+")]),
  educationControl: new FormControl('', [Validators.required, Validators.minLength(5),]),
  educationEndControl: new FormControl('', [Validators.required, Validators.pattern('[1-2]{1}[0-9]{1}[0-9]{2}')]),

  },
  {  validators: [this.profanityFilter]  }
);
firstNameControl: AbstractControl;
lastNameControl: AbstractControl;
locationControl: AbstractControl;
descriptionControl: AbstractControl;
educationControl: AbstractControl;
educationEndControl: AbstractControl;


  ngOnInit() {
    this.lister = this.employService.fetchMyList()
    this.firstNameControl = this.LinkedInFormGrp.controls['firstNameControl'];
    this.lastNameControl = this.LinkedInFormGrp.controls['lastNameControl'];
    this.locationControl = this.LinkedInFormGrp.controls['locationControl'];
    this.descriptionControl = this.LinkedInFormGrp.controls['descriptionControl'];
    this.educationControl = this.LinkedInFormGrp.controls['educationControl'];
    this.educationEndControl = this.LinkedInFormGrp.controls['educationEndControl'];
  }


  toggleEmployerForm(){
    this.toggleEmployerDiv = !this.toggleEmployerDiv
  }
  toggleSkills() {
    this.buttonToggle = !this.buttonToggle
  }
  profanityFilter(group: FormGroup){
    let firstName = group.get('firstNameControl').value;
    if(firstName === 'Fuck') {
      return {profanity: true};
    } else
    return null
  }


}
