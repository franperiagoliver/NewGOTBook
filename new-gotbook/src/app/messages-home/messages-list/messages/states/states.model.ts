import { Message } from '../messages.model';
import { Character } from '../../../../partner-home/partner-list/character/character.model';
import { Opinion } from './opinion.enum';

export class State {
    message: Message;
    character: Character;
    opinion: Opinion;
}
