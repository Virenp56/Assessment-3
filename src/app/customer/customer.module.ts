import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerFormComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    NgSelectModule, FormsModule
  ]
})
export class CustomerModule { }
