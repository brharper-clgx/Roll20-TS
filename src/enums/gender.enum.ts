export enum Gender {
    Unspecified,
    Male,
    Female,
}

export class GenderExt {
    public static fromString(str: string) : Gender | boolean {
        let result: any = false;
        switch (str.toLowerCase()) {
            case 'm':
                result = Gender.Male;
                break;
            case 'f':
                result = Gender.Female;
                break;
        }
        return result;
    }
}