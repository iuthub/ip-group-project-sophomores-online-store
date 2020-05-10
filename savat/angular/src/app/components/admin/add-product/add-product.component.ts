import {Component, OnInit} from '@angular/core';
import {Products} from '../../../models/products';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  products: Products = new Products();

  constructor(private adminService: AdminService) {
  }

  addProduct() {
    this.adminService.addProduct(this.products)
      .subscribe(data => console.log(data),
        error => console.log(error));
    this.products = new Products();
  }
}
