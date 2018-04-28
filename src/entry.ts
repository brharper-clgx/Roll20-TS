import { Roll20ApiScript } from './roll20-api/roll20ApiScript';
import { PcInit } from './commands/pc-init';
import { RoundCounter } from './commands/round-counter';
import { TurnMarker } from './commands/turn-marker';
import { EndCombat } from './commands/end-combat';
import { GroupInit } from './commands/group-init';
import { HpMarker } from './commands/hp-markers';
import { NameGen } from './commands/name-gen';

class Entry extends Roll20ApiScript {
    constructor() {
        super('Entry', 'pc-init', 'end-combat', 'group-init', 'ngen');
    }
    
    protected apiChatMessageHandler(message: ApiChatEventData): void {
        const commands = message.content.split(' ');
        if (commands[0] === '!pc-init') {
            PcInit.handleCommand(commands);
        }
        else if(commands[0] === '!end-combat') {
            EndCombat.handleCommand();
        }
        else if(commands[0] === '!group-init') {
            GroupInit.handleCommand(message.selected);
        }
        else if(commands[0] === '!ngen') {
            NameGen.handleCommand(commands);
        }
    }
    protected graphicChangeHandler(graphic: Graphic, previous: any): void {
        HpMarker.handleGraphicChange(graphic);
    }
    protected turnorderChangeHandler(object: Campaign, previous: CampaignImmutableSynchronousGetProperties & CampaignMutableSynchronousGetProperties): void {
        RoundCounter.handleTurnChange();
        TurnMarker.handleTurnChange();
    }
}

new Entry().register();