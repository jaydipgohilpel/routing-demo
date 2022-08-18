import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

export interface User {
  id: number;
  name: string;
}
@Component({
  selector: 'app-pipepractice',
  templateUrl: './pipepractice.component.html',
  styleUrls: ['./pipepractice.component.scss']
})
export class PipepracticeComponent implements OnInit {

  constructor() { }



  // main = [

  // ]
  search() {

  }

  myControl = new FormControl < string | User > ('');
  options: User[] = [{
    id: 1,
    name: "jaydip"
  },
  {
    id: 2,
    name: "gohil"
  },
  {
    id: 3,
    name: "jay"
  },
  {
    id: 4,
    name: "goutam"
  },
  {
    id: 5,
    name: "dhaval"
  },
  {
    id: 6,
    name: "ankit"
  },
  {
    id: 7,
    name: "piyush"
  },
  {
    id: 8,
    name: "arpit"
  },];
  filteredOptions: Observable<User[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
