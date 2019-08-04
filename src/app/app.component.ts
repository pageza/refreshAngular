import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'refreshAngular';
  number = 10;
  name = 'Bill Gates';
  user = {
    firstName: 'Darth',
    lastName: 'Vader'
  }

  loggedIn = false;

  numbers = [1,2,3,4,5];

  color = 'green';

  count = 0;
  onclick(data) {
    console.log("Clicked the damned button!", data)
  }

  person = { email: ''}
  persons = [];
  onSubmit(){
    this.persons.push(this.person);
    this.person = { email: ''};
  }
}
