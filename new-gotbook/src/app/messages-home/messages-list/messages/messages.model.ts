import { Character } from '../../../partner-home/partner-list/character/character.model';

export class Message {
    id: number;
    character: Character;
    text: string;
    date: Date;
}
