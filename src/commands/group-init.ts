import { DiceService } from '../services/dice-service';
import { TurnorderService } from '../services/turnorder-service';
import { TokenService } from '../services/token-service';

export class GroupInit {
    public static handleCommand(selectedItems: ApiChatEventDataSelectObjectInfo[] | undefined): void {
        if(!selectedItems || !selectedItems.length) return;
        const selectedTokensInfo = selectedItems.filter(i => i._type === 'graphic') as ApiChatEventDataSelectObjectInfo[];

        selectedTokensInfo.forEach((tokenInfo: ApiChatEventDataSelectObjectInfo) => {
            let graphic = getObj(ObjectType.Graphic, tokenInfo._id) as Graphic;
            let character = getObj(ObjectType.Character, graphic.get('represents')) as Character;
            let dexScore: number = +getAttrByName(character.id, 'dexterity');
            let dexMod: number = Math.floor( (dexScore-10) / 2);
            let initRoll: number = DiceService.d20() + dexMod;
            TurnorderService.add({
                id: graphic.id,
                _pageid: '',
                pr: initRoll,
                custom: ''
            });
        });

        TurnorderService.order();
        TurnorderService.show();
        TokenService.aura1(TurnorderService.get()[0].id, '0');
    }
}