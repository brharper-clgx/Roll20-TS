export enum Race {
    Unspecified,
    Dwarf,
    Elf,
    Drow,
    Halfling,
    Human,
    Dragonborn,
    Gnome,
    HalfOrc,
    Tiefling,
}

export class RaceExt {
    public static fromString(str: string) : Race | boolean {
        let result: any = false;
        switch (str.toLowerCase()) {
            case 'dwarf':
                result = Race.Dwarf;
                break;
            case 'elf':
                result = Race.Elf;
                break;
            case 'drow':
                result = Race.Drow;
                break;
            case 'halfling':
                result = Race.Halfling;
                break;
            case 'human':
                result = Race.Human;
                break;
            case 'dragonborn':
                result = Race.Dragonborn;
                break;
            case 'gnome':
                result = Race.Gnome;
                break;
            case 'halforc':
                result = Race.HalfOrc;
                break;
            case 'tiefling':
                result = Race.Tiefling;
                break;
        }
        return result;
    }
}