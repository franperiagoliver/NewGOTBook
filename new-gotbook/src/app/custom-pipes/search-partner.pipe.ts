import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../partner-home/partner-list/character/character.model';
import { Relation } from '../partner-home/partner-list/relation.model';

@Pipe({
  name: 'searchPartner'
})
export class SearchPartnerPipe implements PipeTransform {

  transform(characters: Character[], attribute: string, search: any): Character[] {
    if (search && search.trim().length > 0) {
      return characters.filter(
        character => {
          if (character[attribute].toUpperCase().indexOf(search.toUpperCase()) !== -1) {
            return character[attribute];
          }
        }
      );
    } else {
      return characters;
    }
  }

}
