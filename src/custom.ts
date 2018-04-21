import { Roll20ApiScript } from "./roll20-api/roll20ApiScript";

class Custom extends Roll20ApiScript {
    constructor() {
        super('Custom', 'custom1', 'custom2');
    }

    protected apiChatMessageHandler(message: ApiChatEventData): void {
        const commands = message.content.split(" ");
      
    }
    protected graphicChangeHandler(graphic: Graphic, previous: any): void {

    }
}

new Custom().register();