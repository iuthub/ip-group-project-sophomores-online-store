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


  constructor() {


  }

  ngOnInit() {
  }


}
