import { Race } from "../enums/race.enum";
import { Gender } from "../enums/gender.enum";

export abstract class NpcName {

    constructor(public race: Race, public gender: Gender) { }

     public getName(): string {
        let first = '';
        switch (this.gender) {
            case Gender.Male:
                first = _.sample(this.male);
                break;
            case Gender.Female:
                first = _.sample(this.female);
                break;
            default:
                first = _.sample(this.male.concat(this.female));
                break;
        }

        return `${first} ${_.sample(this.last)}`;
    }

    protected abstract readonly last: string[];
    protected abstract readonly male: string[];
    protected abstract readonly female: string[];
}