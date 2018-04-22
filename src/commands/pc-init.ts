import { TurnorderService } from "../services/turnorder-service";

export class PcInit {
    private static readonly players: string[] = ["Red", "Rosco", "Shirra", "Yack"];

    public static handleCommand(commands: string[]): void {
        if (commands[1] === '--clear') {
            PcInit.clearInitiative();
        } else {
            PcInit.addPlayers();
        }
    }

    public static addPlayers(): void {
        PcInit.players.forEach(player => {
            TurnorderService.add({
                id: "-1",
                pr: 0,
                custom: player,
                _pageid: "",
            });
        });
        TurnorderService.show();
    }

    public static clearInitiative(): void {
        TurnorderService.clear();
        TurnorderService.show(false);
    }
}