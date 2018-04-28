import { Race, RaceExt } from "../enums/race.enum";
import { Gender, GenderExt } from "../enums/gender.enum";
import { NpcName } from "../models/npc-name.model";
import { DwarfName } from "../models/dwarf-name.model";
import { ElfName } from "../models/elf-name.model";
import { HumanName } from "../models/human-name.model";
import { HalflingName } from "../models/halfling-name.model";
import { DragonbornName } from "../models/dragon-born-name.model";
import { GnomeName } from "../models/gnome-name.model";
import { HalfOrcName } from "../models/half-orc-name.model";
import { TieflingName } from "../models/tiefling-name.model";

export class NameGen {
    public static handleCommand(commands: string[]): void {
        commands.shift(); // get rid of command name

        let race: Race = this.getRace(commands);
        let gender: Gender = this.getGender(commands);

        let nameObj = this.getNpcName(race, gender);
        sendChat('GM', nameObj.getName());
    }

    private static getRace(commands: string[]): Race {
        let result;
        commands.forEach(c => {
            if (RaceExt.fromString(c)) {
                result = RaceExt.fromString(c);
            }
        });
        return result == undefined ? Race.Unspecified : result;
    }

    private static getGender(commands: string[]): Gender {
        let result;
        commands.forEach(c => {
            if (GenderExt.fromString(c)) {
                result = GenderExt.fromString(c);
            }
        });
        return result == undefined ? Gender.Unspecified : result;
    }

    private static getNpcName(race: Race, gender: Gender): NpcName {
        let result: NpcName;
        switch (race) {
            case Race.Dwarf:
                result = new DwarfName(gender);
                break;
            case Race.Elf:
                result = new ElfName(gender);
                break;
            case Race.Halfling:
                result = new HalflingName(gender);
                break;
            case Race.Human:
                result = new HumanName(gender);
                break;
            case Race.Dragonborn:
                result = new DragonbornName(gender);
                break;
            case Race.Gnome:
                result = new GnomeName(gender);
                break;
            case Race.HalfOrc:
                result = new HalfOrcName(gender);
                break;
            case Race.Tiefling:
                result = new TieflingName(gender);
                break;
            default:
                result = new HumanName(gender);
                break;
        }
        return result;
    }
}