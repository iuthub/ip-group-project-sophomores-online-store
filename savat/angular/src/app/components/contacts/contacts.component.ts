import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  template: `
    <div class="container">
      <div class="col mt-3">
        <div class="row">
          Technical Support: <span> +998 71 200-90-90</span>
        </div>
        <div class="row">
          Head Office: <span> +998 71 290-90-90</span>
        </div>
      </div>
      <form>
        <div>
          <div>
            <mat-form-field class="mt-5">
              <input matInput type="email"
                     [formControl]="emailFormControl"
                     placeholder="Ex. inha@mail.com">
              <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
                Please enter a valid email address
              </mat-error>
              <mat-error *ngIf="emailFormControl.hasError('required')">
                Email is <strong>required</strong>
              </mat-error>
            </mat-form-field>
          </div>

          <div class="mt-3" >
            <mat-form-field appearance="outline" style="width: 600px">
              <mat-label>Leave a feedback</mat-label>
              <textarea matInput></textarea>
            </mat-form-field>
          </div>

          <button mat-raised-button color="primary">Send</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    span {
      font-weight: bold;
      margin-left: 5px;
    }

    button {
      outline: none;
    }
  `
  ]
})
export class ContactsComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor() {

  }

  ngOnInit() {
  }
}
