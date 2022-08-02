import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {
  }
  passdata = "";
  setValue(data: any) {
    this.passdata = data;
    console.log(data);
  }

  userData = ""
  parentcomponent(data: any) {
    console.log(data);
    this.userData = data;
  }


}

