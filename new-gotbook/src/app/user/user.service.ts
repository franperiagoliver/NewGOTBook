import { Injectable } from '@angular/core';
import { CharacterService } from '../partner-home/partner-list/character/character.service';
import { RelationService } from '../partner-home/partner-list/relation.service';
import { MessagesService } from '../messages-home/messages-list/messages/messages.service';
import { Character } from '../partner-home/partner-list/character/character.model';
import { House } from '../partner-home/partner-list/character/houses.enum';

@Injectable()
export class UserService {

  character: Character;

  constructor() {
      this.character = new Character;
      this.character.id = 0;
      this.character.house = House.Targaryen;
      this.character.name = 'Daenerys';
      this.character.surname = 'Targaryen';
      this.character.picture = '../assets/characts/danny.png';
     }

}
