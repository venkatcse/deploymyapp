import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerNumber'
})
export class CustomerNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var customerNumber:any = value;
    return 'CNO'+customerNumber;
  }

}
