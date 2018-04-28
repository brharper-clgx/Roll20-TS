import { TurnorderService } from '../services/turnorder-service';
import { TokenService } from '../services/token-service';

export class TurnMarker {    
    public static handleTurnChange(): void {
        const turnorder = TurnorderService.get() as TurnOrdering[];
        TokenService.aura1(turnorder[0].id, '0');
        TokenService.aura1(turnorder[turnorder.length-1].id, '');
    }
}