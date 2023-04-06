import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {




  transform(value: any, str: any): any {
    if (str == "") {
      return value;
    }
    let newValues = value.filter((item: {
      id: any;
      balance: any;
      rate: any;
      description: any;
      status: any;
      name: any;
    }) => item.name.toLowerCase().includes(str.toLowerCase()) || item.status.toLowerCase().includes(str.toLowerCase())
    || item.description.toLowerCase().includes(str.toLowerCase()) || item.rate.toString().toLowerCase().includes(str.toLowerCase())
    || item.balance.toString().toLowerCase().includes(str.toLowerCase()) ||
      item.id.toString().toLowerCase().includes(str.toLowerCase()));
    return newValues
  }

}
