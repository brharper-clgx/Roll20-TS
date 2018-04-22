import { Roll20ApiScript } from "./roll20-api/roll20ApiScript";
import { PcInit } from "./commands/pc-init";
import { RoundCounter } from "./commands/round-counter";

class Entry extends Roll20ApiScript {
    constructor() {
        super('Custom', 'pc-init');
    }
    
    protected apiChatMessageHandler(message: ApiChatEventData): void {
        const commands = message.content.split(" ");
        if (commands[0] === '!pc-init') {
            PcInit.handleCommand(commands);
        }
    }
    protected graphicChangeHandler(graphic: Graphic, previous: any): void {
        
    }
    protected turnorderChangeHandler(object: Campaign, previous: CampaignImmutableSynchronousGetProperties & CampaignMutableSynchronousGetProperties): void {
        RoundCounter.handleEvent();
    }
}

new Entry().register();