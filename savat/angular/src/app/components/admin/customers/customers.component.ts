import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Customers} from '../../../models/customers';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {
  displayedColumns = ['customer_id', 'first_name', 'last_name', 'email',
    'phone', 'postal_code', 'city_name'];

  customers: Customers;
  dataSource = new MatTableDataSource<Customers>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getCustomers() {
    this.adminService.getCustomerList().subscribe(data => {
      this.dataSource.data = data as Customers[];
    });
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
