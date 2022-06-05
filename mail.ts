
export class mail{
    private _type: string; 
    private _direction: string;

    public constructor (type: string, direction: string){
        this._type = type;
        this._direction = direction;
    }

    public getType(): string {
        return this._type;
    }
    public setType(value: string) {
        this._type = value;
    }
    public getDirection(): string {
        return this._direction;
    }
    public setDirection(value: string) {
        this._direction = value;
    }
}