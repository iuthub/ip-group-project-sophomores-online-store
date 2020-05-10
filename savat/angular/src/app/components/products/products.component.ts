import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Products} from '../../models/products';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {AdminService} from '../../services/admin.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../../services/customer.service';
import {Orders} from '../../models/orders';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-products',
  template: `
    <div class="mt-3 d-flex justify-content-center">
      <mat-form-field class="col-3">
        <input matInput type="text" (keyup)="doFilter($event.target.value)" placeholder="Search...">
      </mat-form-field>
    </div>

    <div class="container">
      <mat-table [dataSource]="dataSource" matSort matSortStart="asc">

        <ng-container matColumnDef="product_id">
          <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>
          <mat-cell *matCellDef="let products"> {{products.product_id}} </mat-cell>
        </ng-container>

        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>
          <mat-cell *matCellDef="let products"> {{products.name}} </mat-cell>
        </ng-container>

        <ng-container matColumnDef="price">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Price</mat-header-cell>
          <mat-cell *matCellDef="let products"> {{products.price}} </mat-cell>
        </ng-container>

        <ng-container matColumnDef="actions">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>
          <mat-cell *matCellDef="let products">

            <button mat-icon-button color="accent" matTooltip="Order This Product"
                    (click)="openOrderModal()">
              <mat-icon>shopping_basket</mat-icon>
            </button>

          </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns; let i = index"></mat-row>
      </mat-table>
      <mat-paginator [pageSize]="3" [pageSizeOptions]="[3, 5, 10, 15]">
      </mat-paginator>
    </div>

  `,
  styles: [`

  `]
})
export class ProductsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['product_id', 'name', 'price', 'actions'];
  products: Products[];
  dataSource = new MatTableDataSource<Products>();
  product_id: number; //for sending id of product to Modal

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private adminService: AdminService,
              private modal: MatDialog,) {

  }

  ngOnInit() {
    this.getProducts();
  }

  openOrderModal() {
    const modal = this.modal.open(ModalOrder, {
      width: '500px',
      data: {product_id: this.product_id} //getting id of product for modal
    });

    modal.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getProducts() {
    this.adminService.getProductList().subscribe(data => {
      this.dataSource.data = data as Products[];
    });
  }
}

@Component({
  template: `
    <div>

      <div class="modal-header">
        <h5 class="modal-title">Verify Phone Number</h5>
        <button type="button" class="close" (click)="close()">
          <span>&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <form [formGroup]="validate" (ngSubmit)="orderProduct()">

          <mat-form-field appearance="legacy" class="col-md-10">
            <mat-label>Phone number</mat-label>
            <input matInput type="text" formControlName="phone_number" name="phone_number">
            <mat-error>
              Ex. 998901234567
            </mat-error>
          </mat-form-field>

          <div class="modal-footer">

            <button mat-raised-button (click)="close()">Cancel</button>

            <button
              (click)="close()"
              [disabled]="!validate.valid"
              mat-raised-button
              color="primary"
              type="submit"
              class="float-right ml-3">Order
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class ModalOrder {
  order: Orders = new Orders();
  submitted = false;
  validate = new FormGroup({});

  constructor(private adminService: AdminService,
              private customerService: CustomerService,
              private fb: FormBuilder,
              private modal: MatDialogRef<ModalOrder>,
              @Inject(MAT_DIALOG_DATA) public data: Products) {

    this.validate = fb.group({
      'phone_number': ['', [Validators.pattern('[6-9]\\d{11}')]],
    })
  }

  orderProduct() {
    this.submitted = true;
    this.customerService.orderProduct(this.order)
      .subscribe(data => console.log(data),
        error => console.log(error));
    this.order = new Orders();
  }

  close() {
    this.modal.close();
  }
}
