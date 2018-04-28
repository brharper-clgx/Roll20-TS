import { NpcName } from "./npc-name.model";
import { Gender } from "../enums/gender.enum";
import { Race } from "../enums/race.enum";

export class TieflingName extends NpcName {

    constructor(gender: Gender) {
        super(Race.Tiefling, gender);
    }

    protected last: string[] = [
        ''
    ];

    protected male: string[] = [
        'Akmenos', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai', 'Morthos', 'Pelaios', 'Skamos', 'Therai'
    ];

    protected female: string[] = [
        'Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia', 'Orianna', 'Phelaia', 'Rieta'
    ];

}