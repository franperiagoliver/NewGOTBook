import { Component, OnInit } from '@angular/core';
import { Relation } from '../relation.model';
import { Character } from './character.model';
import { RelationService } from '../relation.service';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  relations: Relation[];
  character: Character;

  constructor(private relationService: RelationService, private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacter().subscribe(character => this.character = character);
    this.relationService.getRelation().subscribe(relation => this.relations = relation);
  }

  getCharacterPicture(relation: Relation) {
    return '../../../assets/characts/jon.png' + relation.requested.picture;
  }

  acceptRelation(relation: Relation) {
    if (relation.accepted) {
      relation.accepted = false;
    } else {
      relation.accepted = true;
    }
    this.relationService.updateRelation(relation).subscribe();
  }
}
