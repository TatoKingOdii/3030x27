import { Pipe, PipeTransform } from '@angular/core';
import { addDays } from 'date-fns/addDays';

@Pipe({
  name: 'futureDate',
  standalone: true,
})
export class FutureDatePipe implements PipeTransform {
  transform(date: Date, days: string): Date {
    return addDays(date, Number(days));
  }
}
