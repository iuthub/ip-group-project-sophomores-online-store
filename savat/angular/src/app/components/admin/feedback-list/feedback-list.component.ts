import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Feedback_list} from '../../../models/feedback_list';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['email', 'comments'];
  feedbacks: Feedback_list;
  dataSource = new MatTableDataSource<Feedback_list>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.getFeedbackList();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getFeedbackList() {
    this.adminService.getFeedbackList().subscribe(data => {
      this.dataSource.data = data as Feedback_list[];
    });
  }
}
