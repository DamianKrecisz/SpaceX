import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DatePipe implements PipeTransform {
  transform(date: any): any {
    if (date !== null) {
      return date.substring(0, 10);
    }
  }
}
