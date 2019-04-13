import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { listOfWork } from './prevEmployers';
import { EmployersService } from '../../employers.service'
@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html',
  styleUrls: ['./employer-form.component.css']
})
export class EmployerFormComponent implements OnInit {
  ListOfWork = listOfWork;
  lister = []
  constructor(public employService: EmployersService) { }
  addEmployerFormGrp: FormGroup = new FormGroup({

  companyNameControl: new FormControl('', [Validators.required]),
  jobTitleControl: new FormControl('', [Validators.required,  Validators.pattern("[a-zA-Z äåöÅÄÖ ]+")]),
  hireControl: new FormControl('', [Validators.required, Validators.pattern('[1-2]{1}[0-9]{1}[0-9]{2}')]),
  workEndedControl: new FormControl('', [Validators.required, Validators.pattern('[1-2]{1}[0-9]{1}[0-9]{2}')]),
  },
  {  }
);

companyNameControl: AbstractControl;
jobTitleControl: AbstractControl;
hireControl: AbstractControl;
workEndedControl: AbstractControl;



  ngOnInit() {
    this.companyNameControl = this.addEmployerFormGrp.controls['companyNameControl'];
    this.jobTitleControl = this.addEmployerFormGrp.controls['jobTitleControl'];
    this.hireControl = this.addEmployerFormGrp.controls['hireControl'];
    this.workEndedControl = this.addEmployerFormGrp.controls['workEndedControl'];
  }

  addWorkToForm() {
    console.log(this.companyNameControl.value)
    let workName = this.companyNameControl.value
    let jobTitle = this.jobTitleControl.value
    let hire = this.hireControl.value
    let hireEnded = this.workEndedControl.value
    this.employService.lister.push({WorkName: `${workName}`, WorkTitle: `${jobTitle}`, WorkStart: `${hire}`, WorkEnd: `${hireEnded}`})
}
}
