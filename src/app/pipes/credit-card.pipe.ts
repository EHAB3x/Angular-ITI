import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: true
})
export class CreditCardPipe implements PipeTransform {
  newFormat: string = '';

  transform(value: number): string {

    if(!value){
      return "";
    }

    const valueStr = value.toString();
    const parts : string[] = [];

    for (let i = 0; i < valueStr.length; i += 4) {
      parts.push(valueStr.slice(i, i + 4));
    }

    return parts.join('-');
  }

}
