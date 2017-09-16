import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../../partner-home/partner-list/character/character.service';
import { MessagesService } from './messages.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Character } from '../../../partner-home/partner-list/character/character.model';
import { Message } from './messages.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessageComponent implements OnInit {

  formMessage: FormGroup;
  character: Character;
  messages: Message[];
  message = new FormControl('', Validators.required);

  constructor(private characterService: CharacterService, private messagesService: MessagesService,
     fb: FormBuilder) {
       this.formMessage = fb.group({
         'message': this.message
       });
      }

  ngOnInit() {
    this.messagesService.getMessageByCharacter().subscribe(messages => this.messages = messages);
    this.characterService.getCharacter().subscribe(character => this.character = character);
  }

  sentMessage() {
    let message: Message = new Message();
    message.character = this.character;
    message.date = new Date();
    message.text = this.formMessage.value.msg;
    this.messagesService.publishMessage(message).subscribe(msgs => this.messages = msgs);
  }

}
