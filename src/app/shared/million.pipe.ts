import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'million'
})
export class MillionPipe implements PipeTransform {

  transform(value: any, digits?: any): any {
    const string = value.toString();
    const length = string.length;
    let transformed = '';

    for (let i = 1; i <= length; i++) {
      transformed += string[length - i];
      if (i % 3 === 0 && i !== length) {
        transformed += '\'';
      }
    }

    return transformed.split('').reverse().join('');
  }

}
