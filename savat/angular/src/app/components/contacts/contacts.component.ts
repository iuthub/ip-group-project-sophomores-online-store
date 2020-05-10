import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {Feedback_list} from '../../models/feedback_list';

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
      <form (ngSubmit)="sendFeedback()">
        <mat-form-field class="mt-5 w-25">
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

        <div class="mt-3">
          <mat-form-field appearance="outline" style="width: 600px">
            <mat-label>Leave a feedback</mat-label>
            <textarea matInput></textarea>
          </mat-form-field>
        </div>

        <button [disabled]="emailFormControl.hasError('email')"
                mat-raised-button
                color="primary">Send
        </button>

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
export class ContactsComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  feedback: Feedback_list = new Feedback_list();

  constructor(private customerService: CustomerService) {

  }

  sendFeedback() {
    this.customerService.sendFeedback(this.feedback)
      .subscribe(data => console.log(data),
        error => console.log(error));
    this.feedback = new Feedback_list();
  }
}
