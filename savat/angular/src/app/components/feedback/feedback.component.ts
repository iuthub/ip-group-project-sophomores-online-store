// import {Component, OnInit} from '@angular/core';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';
//
// @Component({
//   selector: 'app-feedback',
//   template: `
//
//     <div class="container">
//       <p>
//         You can leave your feedback about our web site or our service.<br>
//         Your words are important for us.
//       </p>
//       <form>
//         <div class="col">
//
//           <div>
//             <mat-form-field>
//               <input matInput type="email"
//                      [formControl]="emailFormControl"
//                      [errorStateMatcher]="matcher"
//                      placeholder="Ex. inha@mail.com">
//               <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
//                 Please enter a valid email address
//               </mat-error>
//               <mat-error *ngIf="emailFormControl.hasError('required')">
//                 Email is <strong>required</strong>
//               </mat-error>
//             </mat-form-field>
//           </div>
//
//           <div class="mt-3">
//             <mat-form-field appearance="outline">
//               <mat-label>Leave a feedback</mat-label>
//               <textarea matInput></textarea>
//             </mat-form-field>
//           </div>
//
//           <button mat-raised-button color="primary">Send</button>
//         </div>
//       </form>
//     </div>
//   `,
//   styles: [`
//     button {
//       margin-left: 10em;
//     }
//     p{
//       margin-top: 10px;
//     }
//
//
//   `]
// })
// export class FeedbackComponent implements OnInit {
//   emailFormControl = new FormControl('', [
//     Validators.required,
//     Validators.email,
//   ]);
//
//   matcher = new MyErrorStateMatcher();
//
//   constructor() {
//   }
//
//   ngOnInit() {
//   }
// }
//
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
