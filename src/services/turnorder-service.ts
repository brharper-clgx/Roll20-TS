export class TurnorderService {

    public static get(): TurnOrdering[]
    {
        const turnOrderStr = Campaign().get("turnorder");
        return JSON.parse(turnOrderStr || "[]") as TurnOrdering[];
    }

    public static set(turnorder: TurnOrdering[]): void {
        Campaign().set("turnorder", JSON.stringify(turnorder));
    }

    public static clear(): void {
        Campaign().set("turnorder", "[]");
    }

    public static show(shouldShow = true): void {
        Campaign().set("initiativepage", shouldShow);
    }

    public static add(turn: TurnOrdering): void {
        let turnorder: TurnOrdering[] = TurnorderService.get();
        turnorder.push(turn);
        TurnorderService.set(turnorder);
    }

    public static order(): void {
        let turnorder = TurnorderService.get() as TurnOrdering[];
        let last = 100000;
        turnorder = _.sortBy(turnorder,function(i){
            let val=(-(parseFloat(i.pr.toString())));
            val = _.isNaN(val) ? last : val;
            last=val;
            return val;
        }); 
        TurnorderService.set(turnorder);
    }
}