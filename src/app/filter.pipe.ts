import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cars: any, term: any): any {
    if (term === undefined) return cars;
    return cars.filter( car => car.name.toLowerCase().includes(term.toLowerCase()) );
  }

}
