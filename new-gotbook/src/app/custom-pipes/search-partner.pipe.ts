import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../partner-home/partner-list/character/character.model';
import { Relation } from '../partner-home/partner-list/relation.model';

@Pipe({
  name: 'searchPartner'
})
export class SearchPartnerPipe implements PipeTransform {

  transform(partners: Relation[], attribute: string, search: any): Relation[] {
    if (search && search.trim().length > 0) {
      return partners.filter(
        partner => {
          if (partner[attribute].toUpperCase().indexOf(search.toUpperCase()) !== -1) {
            return partner[attribute];
          }
        }
      );
    } else {
      return partners;
    }
  }

}
