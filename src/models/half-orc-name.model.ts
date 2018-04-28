import { NpcName } from "./npc-name.model";
import { Gender } from "../enums/gender.enum";
import { Race } from "../enums/race.enum";

export class HalfOrcName extends NpcName {

    constructor(gender: Gender) {
        super(Race.HalfOrc, gender);
    }

    protected last: string[] = [
        ''
    ];

    protected male: string[] = [
        'Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Keth', 'Krusk', 'Mhurren', 'Ront', 'Shump', 'Thokk'
    ];

    protected female: string[] = [
        'Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega', 'Ovak', 'Ownka', 'Shautha', 'Sutha', 'Vola', 'Volen', 'Yevelda'
    ];

}