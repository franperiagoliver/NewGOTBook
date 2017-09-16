import { Component, OnInit } from '@angular/core';
import { Message } from './messages/messages.model';
import { MessagesService } from './messages/messages.service';
import { StatesService } from './messages/states/states.service';
import { State } from './messages/states/states.model';
import { Opinion } from './messages/states/opinion.enum';
import { CharacterService } from '../../partner-home/partner-list/character/character.service';
import { Character } from '../../partner-home/partner-list/character/character.model';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {

  messages: Message[];
  states: State[];
  character: Character;

  constructor(private messagesService: MessagesService, private statesService: StatesService,
    private characterService: CharacterService) { }

  ngOnInit() {
    this.messagesService.getMessageByCharacter().subscribe(messages => this.messages = messages);
    this.statesService.getAllStates().subscribe(states => this.states = states);
    this.characterService.getCharacter().subscribe(character => this.character = character);
  }

  setCoolState() {
    let state = new State();
    state.character = this.character;
    state.opinion = Opinion.COOL;
    this.statesService.updateState(state).subscribe(states => this.states = states);
  }

  setPsstState() {
    let state = new State();
    state.character = this.character;
    state.opinion = Opinion.PSST;
    this.statesService.updateState(state).subscribe(states => this.states = states);
  }

  setDieState() {
    let state = new State();
    state.character = this.character;
    state.opinion = Opinion.YOU_MUST_DIE;
    this.statesService.updateState(state).subscribe(states => this.states = states);
  }

}
