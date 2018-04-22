/**
 * Represents a class that responds to api chat commands.
 */
export abstract class Roll20ApiScript {
    /**
     * The api command the script responds to.
     */
    protected readonly apiCommands: string[];
    /**
     * The name of the script.
     */
    protected readonly scriptName: string;

    private _isRegistered = false;

    protected constructor(scriptName: string, ...apiCommands: string[]) {
        this.scriptName = scriptName;
        this.apiCommands = apiCommands;
    }

    public register() {
        if (!this._isRegistered) {
            on("ready", () => {
                on("chat:message", (message) => {
                    if (this.commandFound(message)) { this.apiChatMessageHandler(message as ApiChatEventData); }
                });

                on("change:graphic", (graphic: Graphic, previous: any) => {
                    this.graphicChangeHandler(graphic, previous);
                });

                on("change:campaign:turnorder", (campaign: Campaign, prev) => {
                    this.turnorderChangeHandler(campaign, prev);
                });

                log(`${new Date().toLocaleString()}: ${this.scriptName} loaded.`);
            });

            this._isRegistered = true;
        }
    }

    /**
     * The api message handling event for the script.
     */
    protected abstract apiChatMessageHandler(message: ApiChatEventData): void;
    protected abstract graphicChangeHandler(object: Graphic, previous: any): void;
    protected abstract turnorderChangeHandler(object: Campaign, previous: CampaignImmutableSynchronousGetProperties & CampaignMutableSynchronousGetProperties): void;

    protected handleError<T>(message: string, object: T) {
        sendChat(this.scriptName, message);
        log(`${new Date().toLocaleString()}: ${this.scriptName} - ${message} Value: ${JSON.stringify(object)}`);
    }

    protected sendChatFromScript(message: string, callback?: (operations: ChatEventData[]) => void, options?: ChatMessageHandlingOptions) {
        sendChat(this.scriptName, message, callback, options);
    }

    private commandFound(message: ChatEventData): boolean {
        if (message.type !== "api") { return false; }

        const apiMessage = message as ApiChatEventData;
        let commandFound: boolean = false;
        this.apiCommands.forEach(element => {
            if (apiMessage.content.indexOf(`!${element}`) === 0) { commandFound = true; }
        });
        return commandFound;
    }
}
