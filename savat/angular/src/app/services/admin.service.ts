import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  addProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.url}/api/createProducts.php`, product);
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.url}/api/readProducts.php`);
  }

  getCustomerList(): Observable<any> {
    return this.http.get(`${this.url}/api/readCustomers.php`);
  }

  getOrderList(): Observable<any> {
    return this.http.get(`${this.url}/api/readOrderItems.php`);
  }

  getFeedbackList(): Observable<any> {
    return this.http.get(`${this.url}/api/readFeedback.php`);
  }

  verifyOrder(id: number): Observable<any> {
    return this.http.delete(`${this.url}/api/verifyOrder.php`);
  }
}
