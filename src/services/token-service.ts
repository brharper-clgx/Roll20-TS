import { Status } from "../models/status";
import { isNullOrWhitespace } from "../utils/string-util";

export class TokenService {
    public static aura1(id: string, radius: string): void {
        let token = getObj(ObjectType.Graphic, id) as Graphic;
        if (token) {
            token.set('aura1_radius', radius);
        }
    }

    public static addStatus(token: Graphic, status: StatusMarker, subscript: string = ''): void {
        let statusStr: string = token.get('statusmarkers');
        if(statusStr.includes(status)) return;

        let statusesArray = this.extractStatuses(statusStr) as Status[];
        statusesArray.push(new Status(status, subscript));

        token.set('statusmarkers', this.statusesToString(statusesArray));
    }

    public static removeStatus(token: Graphic, status: StatusMarker): void {
        let statusStr: string = token.get('statusmarkers');
        if(!statusStr.includes(status)) return;

        let statusesArray = this.extractStatuses(statusStr) as Status[];
        statusesArray = statusesArray.filter(s => s.name != status);

        token.set('statusmarkers', this.statusesToString(statusesArray));
    }

    private static extractStatuses(statusStr: string): Status[] {
        let statusArray: Status[] = [];
        let stringStatusArray = statusStr.split(',') as string[];
        stringStatusArray.forEach(s => {
            if(!isNullOrWhitespace(s))
            {
                let statusPartArray = s.split('@') as string[];
                if (statusPartArray.length == 1) {
                    statusArray.push(new Status(statusPartArray[0], ''));
                } else if (statusPartArray.length == 2) {
                    statusArray.push(new Status(statusPartArray[0], statusPartArray[1]));
                }
            }
        });
        return statusArray;
    }

    private static statusesToString(statusArray: Status[]): string {
        let result: string = '';
        statusArray.forEach(s => {
            if (isNullOrWhitespace(s.value)) {
                result = result.concat(s.name, ',');
            } else {
                result = result.concat(s.name, ',', '@', s.value, ',');
            }
        });
        return result.substring(0, result.length - 1); // rm comma
    }
}