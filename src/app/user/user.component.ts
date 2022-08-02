import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() parentcomponent:EventEmitter<any>=new EventEmitter();
@Input() userdata:any;
  constructor() { }

  ngOnInit(): void {
  }
  sendData(data:any) {

    this.parentcomponent.emit(data);
  }
  

}

