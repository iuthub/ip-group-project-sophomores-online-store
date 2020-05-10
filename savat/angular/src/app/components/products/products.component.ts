import {Component, OnInit, ViewChild} from '@angular/core';
import {Products} from '../../models/products';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

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

        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>
          <mat-cell *matCellDef="let doctors"> {{doctors.doctor_id}} </mat-cell>
        </ng-container>

        <ng-container matColumnDef="price">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Price</mat-header-cell>
          <mat-cell *matCellDef="let doctors"> {{doctors.first_name}} </mat-cell>
        </ng-container>

        <ng-container matColumnDef="units">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Units</mat-header-cell>
          <mat-cell *matCellDef="let doctors"> {{doctors.last_name}} </mat-cell>
        </ng-container>

        <ng-container matColumnDef="actions">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Actions</mat-header-cell>
          <mat-cell *matCellDef="let doctors">

            <!--            <button mat-icon-button color="primary" matTooltip="Update Doctor"-->
            <!--                    (click)="openModal(editProfileModal, doctors)">-->
            <!--              <mat-icon>edit</mat-icon>-->
            <!--            </button>-->

            <!--            <button mat-icon-button color="warn" matTooltip="Delete Doctor"-->
            <!--                    (click)="deleteDoctor(doctors.doctor_id)">-->
            <!--              <mat-icon>delete</mat-icon>-->
            <!--            </button>-->
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
export class ProductsComponent implements OnInit {
  displayedColumns = ['name', 'price', 'units', 'actions'];
  products: Products[];
  dataSource = new MatTableDataSource<Products>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit() {
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }


  // getProducts() {
  //   this.productService.getProductList().subscribe(data => {
  //     this.dataSource.data = data as Products[];
  //   });
  // }
}
