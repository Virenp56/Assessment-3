import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  public showForm: boolean = false;
  public searchText: string = "";
  public option: string = "";
  public status = [{ value: "", name: "Status" }, { value: "open", name: "open" }, { value: "inactive", name: "inactive" }, { value: "error", name: "error" }, { value: "success", name: "success" }]
  @Input() customerData: any
  @Output() toggleFormEvent = new EventEmitter<boolean>()
  @Output() deleteCustomerEvent = new EventEmitter();
  @Output() editCustomerEvent = new EventEmitter();
  constructor() { }

  toggleForm() {
    this.toggleFormEvent.emit(this.showForm)
  }

  deleteCutomer(id: any) {
    this.deleteCustomerEvent.emit(id)
  }

  editCutomer(id: any) {
    this.editCustomerEvent.emit(id)
  }
}
