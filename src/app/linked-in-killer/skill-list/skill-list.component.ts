import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skill'

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  isSelected: boolean = false;
  isButtonSelected: boolean = false
  @Input() skill: Skill;

  selectedSkills: string[] = []
  constructor() { }

  ngOnInit() {
  }

  selectYourSkills(i) {
    this.isSelected = !this.isSelected;
  }
  selectSkill1(string: string) {
    this.skill.level = string;
    this.isButtonSelected = !this.isButtonSelected
  }
  selectSkill2(string: string) {
    this.skill.level = string;
    this.isButtonSelected = !this.isButtonSelected
  }
  selectSkill3(string: string) {
    this.skill.level = string;
    this.isButtonSelected = !this.isButtonSelected
  }

}
