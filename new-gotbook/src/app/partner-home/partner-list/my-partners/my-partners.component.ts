import { Component, OnInit } from '@angular/core';
import { Relation } from '../relation.model';
import { Character } from '../character/character.model';
import { RelationService } from '../relation.service';
import { CharacterService } from '../character/character.service';
import { SearchPartnerPipe } from '../../../custom-pipes/search-partner.pipe';

@Component({
  selector: 'app-my-partners',
  templateUrl: './my-partners.component.html',
  styleUrls: ['./my-partners.component.css']
})
export class MyPartnersComponent implements OnInit {

  searchPipe: SearchPartnerPipe;
  relaters: Relation[];
  relateds: Relation[];
  characters: Character[];
  character: Character;
  charactersSelected: Character[];

  constructor(private relationService: RelationService, private characterService: CharacterService) { }

  ngOnInit() {
    this.relationService.getRequester()
      .subscribe(relations => this.relaters = relations);
    this.relationService.getRequested()
      .subscribe(relates => {
        this.relateds = relates;
        this.relateds.forEach(relation => {
          this.relaters.push(relation);
        });
      });
    this.characterService.getCharacter()
      .subscribe(character => this.character = character);
    this.characterService.getCharacters()
      .subscribe(characters => {
        this.characters = characters;
      });
    this.charactersSelected = new Array();
  }

  isFriend(character: Character): boolean {
    for (let i = 0; i < this.relaters.length; i++) {
      if (this.relaters[i].requested.id === character.id && this.relaters[i].accepted === true &&
        this.relaters[i].requested.id !== 1) {
        return true;
      } else if (this.relaters[i].requester.id === character.id &&
        this.relaters[i].accepted === true &&
        this.relaters[i].requester.id !== 1) {
        return true;
      }
    }
    return false;
  }

  selectPerson(character: Character) {
    if (character.selected === true) {
      character.selected = false;
    } else {
      this.characters.forEach(charact => charact.selected = false);
      character.selected = true;
      this.charactersSelected = new Array();
      this.charactersSelected.push(character);
    }
  }


}
