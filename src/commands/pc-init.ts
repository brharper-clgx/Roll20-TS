export class PcInit {
    private static players: string[] = ["Red", "Rosco", "Shirra", "Yack"];

    public static handleCommand(commands: string[]): void {
        if (commands[1] === '--clear') {
            PcInit.clearInitiative();
        } else {
            PcInit.addPlayers();
        }
    }

    public static addPlayers(): void {
        const campaign = Campaign();
        const pageId = campaign.get('playerpageid');
        const turnOrderStr = campaign.get("turnorder");

        let turnOrder: TurnOrdering[] = JSON.parse(turnOrderStr || "[]") as TurnOrdering[];
        PcInit.players.forEach(player => {
            turnOrder.push({
                id: "-1",
                pr: 0,
                custom: player,
                _pageid: "",
            });
        });

        campaign.set("turnorder", JSON.stringify(turnOrder));
        campaign.set("initiativepage", true);
    }

    public static clearInitiative(): void {
        const campaign = Campaign();
        campaign.set("turnorder", "[]");
        campaign.set("initiativepage", false);
    }
}