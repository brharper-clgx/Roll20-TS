export class DiceService {
    
    public static d20() {
        return this.arbitraryDiceRoll(20);
    }

    private static arbitraryDiceRoll(sides: number): number {
        return Math.floor(Math.random() * sides) + 1;
    }

}