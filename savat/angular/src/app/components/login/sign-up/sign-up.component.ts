import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../services/customer.service';
import { Customers } from 'src/app/models/customers';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  registration = new FormGroup({});
  customers: Customers = new Customers();

  constructor(private customerService: CustomerService,
              private fb: FormBuilder) {

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

  signUp() {
    this.customerService.register(this.customers)
      .subscribe(data => console.log(data),
        error => console.log(error));
    this.customers = new Customers();
  }
}
