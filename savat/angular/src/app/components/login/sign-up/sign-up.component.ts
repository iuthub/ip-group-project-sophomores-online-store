import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  registration = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.registration = fb.group({
      'login': ['', [Validators.min(5), Validators.max(16)]],
      'password': ['', [Validators.min(5), Validators.max(16)]],
      'email': ['', [Validators.email]],
      'phone_number': ['', [Validators.pattern('[6-9]\\d{11}')]],
      'postal_code': ['', [Validators.pattern('[0-9]{7}')]],
      'passport_number': ['', [Validators.pattern('[A-Z]{2}[0-9]{7}')]]

    })
  }


  ngOnInit() {
  }

}
