import { TokenService } from "../services/token-service";

export class HpMarker {
    private static readonly ratio = 0.5;
    private static readonly halfHealthStatus = StatusMarker.Pummeled;
    private static readonly deathStatus = StatusMarker.Dead;

    public static handleGraphicChange(graphic: Graphic): void {
        let max = graphic.get('bar3_max') as string | number;
        if(max == '') return;
        else max = +max;
        var current: number = +graphic.get('bar3_value');

        if (!isNaN(max) && !isNaN(current)) {
            if (current <= 0) {
                TokenService.removeStatus(graphic, this.halfHealthStatus);
                TokenService.addStatus(graphic, this.deathStatus);
            } else if (current <= (max * this.ratio)) {
                TokenService.addStatus(graphic, this.halfHealthStatus);
                TokenService.removeStatus(graphic, this.deathStatus);
            } else {
                TokenService.removeStatus(graphic, this.halfHealthStatus);
                TokenService.removeStatus(graphic, this.deathStatus);
            }
        }
    }
}

