import { TurnorderService } from "../services/turnorder-service";
import { TokenService } from "../services/token-service";

export class EndCombat {
    public static handleCommand(): void {
        const turnorder = TurnorderService.get();
        TokenService.aura1(turnorder[0].id, '');
        TurnorderService.clear();
        TurnorderService.show(false);
    }
}