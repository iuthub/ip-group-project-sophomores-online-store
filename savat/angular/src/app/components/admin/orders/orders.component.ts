import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Orders} from '../../../models/orders';
import {AdminService} from '../../../services/admin.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, AfterViewInit {
  displayedColumns = ['customer_id', 'phone', 'product', 'price'];
  orders: Orders;
  dataSource = new MatTableDataSource<Orders>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.getOrderList();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getOrderList() {
    this.adminService.getOrderList().subscribe(data => {
      this.dataSource.data = data as Orders[];
    });
  }

  verify(id: number) {
    this.adminService.verifyOrder(id).subscribe(data => {
      this.getOrderList();
    })
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
