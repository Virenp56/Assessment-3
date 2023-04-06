import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public showForm: boolean = true;
  public customerData: any
  singleCustomerData: any
  public id: any

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomerData()
  }

  //toggle Form
  toggleForm(toggle: boolean) {
    this.showForm = toggle
  }

  //closeForm
  closeForm(toggle: boolean) {
    this.showForm = toggle
  }
  //getCustomerData
  getCustomerData() {
    this.customerService.getCustomerData().subscribe(res => this.customerData = res)
  }

  //deleteCutomer
  deleteCutomer(id: any) {
    this.customerService.deleteCustomer(id).subscribe(res => res);
    this.getCustomerData()
  }

  //postData
  postData(data: any) {
    this.customerService.addCustomer(data).subscribe(res => res)
    this.getCustomerData()
  }

  //getCustomerById
  getSingleCutomer(id: any) {
    this.id = id
    this.customerService.getSingleCustomer(id).subscribe(res => this.singleCustomerData = res)
    this.showForm = false
  }

  updateCustomer(data: any) {
    this.customerService.updateCustomer(this.id, data).subscribe(res => res);
    this.getCustomerData()
  }


}
