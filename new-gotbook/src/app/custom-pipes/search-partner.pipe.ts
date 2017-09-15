import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPartner'
})
export class SearchPartnerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
