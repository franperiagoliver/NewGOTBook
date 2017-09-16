import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user/user.service';
import { CharacterService } from '../../partner-list/character/character.service';
import { Character } from '../../partner-list/character/character.model';

@Component({
  selector: 'app-dates-character',
  templateUrl: './dates-character.component.html',
  styleUrls: ['./dates-character.component.css']
})
export class DatesCharacterComponent implements OnInit {

  character: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacter().subscribe(character => this.character = character);
  }

  updateDates(character: Character) {
    this.character = character;
    this.characterService.updateCharacter(character).subscribe();
  }

}
