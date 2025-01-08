import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalId',
  standalone: true
})
export class NationalIdPipe implements PipeTransform {

  transform(value: number): string {
    let days= value.toString().slice(1,3);
    let month = value.toString().slice(3,5);
    let year = value.toString().slice(5,7);
    
    return `${days}-${month}-${year}`;
  }

}
