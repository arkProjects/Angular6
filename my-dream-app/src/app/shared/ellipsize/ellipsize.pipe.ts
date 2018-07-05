import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsize'
})
export class EllipsizePipe implements PipeTransform {
  transform(value: string, cutoff: number): string {
    if( value.length > 20 ) {
        return value.substring( 0, 20 ) + '...';
    } else {
        return value;
    }
  }
}