import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trafik-ljus',
  templateUrl: './trafik-ljus.component.html',
  styleUrls: ['./trafik-ljus.component.css']
})
export class TrafikLjusComponent implements OnInit {
  redLightsOn: boolean = true;
  greenLightsOn: boolean = false;
  yellowLightsOn: boolean = false;

  lightSwitch() {
    if (this.redLightsOn && this.yellowLightsOn){
      this.greenLightsOn = true;
      this.redLightsOn = false;
      this.yellowLightsOn = false;
    } else if (this.greenLightsOn){
      this.yellowLightsOn = true;
      this.greenLightsOn = false;
    } else if (this.redLightsOn){
      this.yellowLightsOn = true;
    } else if (this.yellowLightsOn) {
      this.redLightsOn = true;
      this.yellowLightsOn = false;
    }

    }

  constructor() { }

  ngOnInit() {
  }

}
