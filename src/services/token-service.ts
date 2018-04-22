export class TokenService {
    public static aura1(id: string, radius: string): void {
        let token = getObj('graphic', id) as Graphic;
        if(token){
            token.set('aura1_radius', radius);
        }
    }
}