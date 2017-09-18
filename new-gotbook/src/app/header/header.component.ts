import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { CharacterService } from '../partner-home/partner-list/character/character.service';
import { Character } from '../partner-home/partner-list/character/character.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  character: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacter().subscribe(character => this.character = character);
  }

  getCharacterPicture() {
    if ( this.character ) {
      return '../../../assets/characts/' + this.character.picture;
    } else {
      return '../../../assets/characts/arya.jpg';
    }
  }

}
