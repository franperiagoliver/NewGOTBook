import { Component, OnInit } from '@angular/core';
import { RelationService } from './relation.service';
import { Relation } from './relation.model';
import { Character } from './character/character.model';
import { CharacterService } from './character/character.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent implements OnInit {

  relations: Relation[];
  character: Character;
  characters: Character[];

  constructor(private relationService: RelationService, private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacter().subscribe(character => this.character = character);
    this.relationService.getRelation().subscribe(relations => this.relations = relations);
  }

  getPartnerPicture() {
    this.relations.forEach(relation => {
      return '../../../assets/characts/' + relation.requested.picture;
    });
  }

  deleteRelation(relation: Relation) {
    this.relationService.deleteRelation(relation).subscribe(relations => this.relations = relations);
  }

  acceptRelation(relation: Relation) {
    if (relation.accepted) {
      relation.accepted = false;
    } else {
      relation.accepted = true;
    }
    this.relationService.updateRelation(relation).subscribe(relations => this.relations = relations);
  }

}
