export class phone{
    private _type: string; 
    private _phoneNumber: number; 

    public constructor(type: string, phoneNumber: number){
        this._type = type;
        this._phoneNumber = phoneNumber;
    }

    public getType(): string {
        return this._type;
    }
    public setType(value: string) {
        this._type = value;
    }
    public getPhoneNumber(): number {
        return this._phoneNumber;
    }
    public setPhoneNumber(value: number) {
        this._phoneNumber = value;
    }
}