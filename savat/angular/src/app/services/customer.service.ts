import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) {
  }

  orderProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.url}/api/createOderItems`, product);
  }

  sendFeedback(feedback: Object): Observable<Object> {
    return this.http.post(`${this.url}/api/createFeedback_list.php`, feedback);
  }

  register(customer: Object): Observable<Object> {
    return this.http.post(`${this.url}/api/createCustomers.php`, customer);
  }
}
