import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'catUrl'
})
export class CatUrlPipe implements PipeTransform {
    transform(size: number) {
      return `https://placekitten.com/${size}/${size}`;
    }
}
