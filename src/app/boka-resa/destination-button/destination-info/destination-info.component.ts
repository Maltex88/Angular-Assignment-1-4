import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.css']
})
export class DestinationInfoComponent implements OnInit {
  @Input() resa:string;
  @Input() selectedResa: string;
  @Input() buttonSelected: string;
  @Input() onSelect: string;

  @Output() onAction = new EventEmitter<any>();
  triggerAction() {
  this.onAction.emit(this.selectedResa);
  console.log('test')
}


  constructor() { }

  ngOnInit() {
  }

}
