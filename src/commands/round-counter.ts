import { TurnorderService } from "../services/turnorder-service";


export class RoundCounter {
    private static readonly roundStr = "-- Round --";
    private static readonly speakingAs = "GM";

    public static handleEvent(): void {
        const turnorder = TurnorderService.get() as TurnOrdering[];

        let roundObj = turnorder.find(t => t.custom === this.roundStr) as TurnOrdering;
        if (!roundObj) {
            turnorder.splice(turnorder.length - 1, 0, this.createTurnOrdering(1));
            sendChat(this.speakingAs, this.chatMessage(1));
        }

        if (turnorder[0].custom === this.roundStr) {
            let roundNum: number = turnorder[0].pr + 1;
            turnorder[0] = this.createTurnOrdering(roundNum);
            sendChat(this.speakingAs, this.chatMessage(roundNum));
        }

        TurnorderService.set(turnorder);
    }

    private static chatMessage(roundNum: number): string {
        return `<h2>Round ${roundNum}</h2>`;
    }

    private static createTurnOrdering(roundNum: number): TurnOrdering {
        return { id: "-1", pr: roundNum, custom: this.roundStr, _pageid: "" };
    }
}