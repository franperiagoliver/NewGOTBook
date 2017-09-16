import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessagesHomeComponent } from './messages-home/messages-home.component';
import { PartnerHomeComponent } from './partner-home/partner-home.component';
import { MessagesListComponent } from './messages-home/messages-list/messages-list.component';
import { MessageComponent } from './messages-home/messages-list/messages/messages.component';
import { PartnerListComponent } from './partner-home/partner-list/partner-list.component';
import { CharacterComponent } from './partner-home/partner-list/character/character.component';
import { StatesComponent } from './messages-home/messages-list/messages/states/states.component';
import { SearchPartnerPipe } from './custom-pipes/search-partner.pipe';
import { DatesCharacterHomeComponent } from './partner-home/dates-character-home/dates-character-home.component';
import { DatesCharacterComponent } from './partner-home/dates-character-home/dates-character/dates-character.component';
import { CharacterService } from './partner-home/partner-list/character/character.service';
import { UserService } from './user/user.service';
import { MessagesService } from './messages-home/messages-list/messages/messages.service';
import { RelationService } from './partner-home/partner-list/relation.service';
import { StatesService } from './messages-home/messages-list/messages/states/states.service';

const appRoutes: Routes = [
  {path: 'messages', component: MessagesHomeComponent, pathMatch: 'full'},
  {path: 'things', component: DatesCharacterHomeComponent},
  {path: 'partners', component:  PartnerHomeComponent},
  { path: '',
  redirectTo: '/messages',
  pathMatch: 'full'
}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessagesHomeComponent,
    PartnerHomeComponent,
    MessagesListComponent,
    MessageComponent,
    PartnerListComponent,
    CharacterComponent,
    DatesCharacterComponent,
    StatesComponent,
    SearchPartnerPipe,
    DatesCharacterHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    CharacterService,
    UserService,
    MessagesService,
    RelationService,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
