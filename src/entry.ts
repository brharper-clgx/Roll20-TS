import { Roll20ApiScript } from "./roll20-api/roll20ApiScript";
import { PcInit } from "./commands/pc-init";
import { RoundCounter } from "./commands/round-counter";
import { TurnMarker } from "./commands/turn-marker";
import { EndCombat } from "./commands/end-combat";

class Entry extends Roll20ApiScript {
    constructor() {
        super('Entry', 'pc-init', 'end-combat');
    }
    
    protected apiChatMessageHandler(message: ApiChatEventData): void {
        const commands = message.content.split(" ");
        if (commands[0] === '!pc-init') {
            PcInit.handleCommand(commands);
        }
        else if(commands[0] === '!end-combat') {
            EndCombat.handleCommand();
        }
    }
    protected graphicChangeHandler(graphic: Graphic, previous: any): void {
        
    }
    protected turnorderChangeHandler(object: Campaign, previous: CampaignImmutableSynchronousGetProperties & CampaignMutableSynchronousGetProperties): void {
        RoundCounter.handleTurnChange();
        TurnMarker.handleTurnChange();
    }
}

new Entry().register();