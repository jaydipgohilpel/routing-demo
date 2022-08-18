import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-demo';
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

