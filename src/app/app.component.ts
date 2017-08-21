import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forbiddenUsernames = ['ana','john']
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),

      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  genders = ['male', 'female'];
  signupForm: FormGroup;

  onFormSubmit() {
    console.log(this.signupForm);
  }
  onAddHobby(){
    const  control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl):{[s : string]: boolean}{
    if(this.forbiddenUsernames.indexOf(control.value)){
      return{'nameForbuidden' }
    }
  }
}
