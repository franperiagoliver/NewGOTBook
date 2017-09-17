import { Component, OnInit } from '@angular/core';
import { Character } from '../character/character.model';

@Component({
  selector: 'app-search-partner',
  templateUrl: './search-partner.component.html',
  styleUrls: ['./search-partner.component.css']
})
export class SearchPartnerComponent implements OnInit {

  character: Character;

  constructor() { }

  ngOnInit() {
  }

}
