import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = "http://localhost:3000/customer"
  constructor(private http: HttpClient) { }

  getCustomerData() {
    return this.http.get(this.url);
  }

  getSingleCustomer(id: any) {
    let url = `${this.url}/${id}`;
    return this.http.get(url);
  }

  addCustomer(item: any) {
    return this.http.post(this.url, item);
  }

  deleteCustomer(id: any) {
    let url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  updateCustomer(id: any, item: any) {
    let url = `${this.url}/${id}`;
    return this.http.put(url, item);
  }
}
