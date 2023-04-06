import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit, OnChanges {
  public showForm: boolean = true;
  public customerForm!: FormGroup;
  public toggleFunction: boolean = true;
  btnText = "Submit";
  formTag = "ADD"
  public status = [{ name: "open" }, { name: "inactive" }, { name: "error" }, { name: "success" }]
  @Output() closeFormEvent = new EventEmitter<boolean>()
  @Output() postDataEvent = new EventEmitter<any>();
  @Output() updateDataEvent = new EventEmitter<any>();
  @Input() customerData!: any
  constructor() {
    this.customerForm = new FormGroup(
      {
        name: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,25}$/)]),
        description: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,125}$/)]),
        status: new FormControl(null, Validators.required),
        rate: new FormControl(null, Validators.required),
        balance: new FormControl(null, Validators.required),
      });
  }


  ngOnInit(): void {

    if (this.customerForm) {
      this.customerForm.setValue({
        name: "",
        description: "",
        status: "",
        rate: "",
        balance: "",
      })
    }

  }
  ngOnChanges(): void {

    if (this.customerData) {
      console.log(this.customerData);
      this.formTag = "UPDATE"
      this.btnText = "Edit";
      this.toggleFunction = false;
      this.customerForm.setValue({
        name: this.customerData.name,
        description: this.customerData.description,
        status: this.customerData.status,
        rate: this.customerData.rate,
        balance: this.customerData.balance,
      })
    }
  }
  closeForm() {
    this.formTag = "ADD"
    this.customerForm.reset({
    })
    this.closeFormEvent.emit(this.showForm)
  }

  onSubmit() {
    this.postDataEvent.emit(this.customerForm.value)
    this.customerForm.reset({
    })
    this.closeFormEvent.emit(this.showForm)
  }

  onEdit() {
    // this.employeeService.updateEmployee(this.id, this.customerForm.value).subscribe((res) => console.log('Data Edited'));
    this.updateDataEvent.emit(this.customerForm.value)
  }
}
