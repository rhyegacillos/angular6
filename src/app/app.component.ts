import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm;
  defaultQuestion = 'pet';
  defaultGender = 'male';
  answer: '';
  genders = ['male', 'female'];
  index: number;
  id = 'radio';

  suggestUsername() {
    const suggestedName = 'Superuser';
  }
  //
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
  }

  getName(i: number) {
    return this.id + i;
  }
}
