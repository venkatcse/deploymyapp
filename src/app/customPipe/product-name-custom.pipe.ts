import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productNameCustom'
})
export class ProductNameCustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var arg1:any = args[0];
    var arg2:any = args[1];
    return arg1 + value + arg2;
  }

}
