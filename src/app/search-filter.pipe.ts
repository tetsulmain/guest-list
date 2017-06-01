import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], criteria: any): any {

    return items.filter(item =>{
      criteria.toLowerCase();
      for (let key in item ) {
        if((""+item[key]).includes(criteria)||(""+item[key]).toLowerCase().includes(criteria)){
          return true;
        }
      }
      return false;
    });
  }

}
