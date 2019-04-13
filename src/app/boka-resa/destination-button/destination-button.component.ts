import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destination-button',
  templateUrl: './destination-button.component.html',
  styleUrls: ['./destination-button.component.css']
})
export class DestinationButtonComponent implements OnInit {
  @Input() resa:string;
  @Input() resor: string;
  @Input() selectedResa: string;
  @Input() buttonSelected: string;
  @Input() onSelect: string;



  constructor() { }

  ngOnInit() {
  }


}
