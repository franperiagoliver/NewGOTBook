import { Character } from './character/character.model';

export class Relation {
    id: number;
    requester: Character;
    requested: Character;
    accepted: boolean;
}
