import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var phoneNo:any = value;
    return phoneNo.slice(0,5) + ' ' + phoneNo.slice(5,10) ;
  }
}
