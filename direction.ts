export class direction {
    private _street: string; 
    private _streetNumber: number; 
    private _flat: string; 
    private _leter: string; 
    private _postCode: number; 
    private _population: string; 
    private _province: string;
    
    public constructor(street: string, streetNumber: number, postCode: number, population: string, province: string, flat:string, leter:string){
        this._street = street;
        this._streetNumber = streetNumber;
        this._postCode = postCode;
        this._population = population;
        this._province = province;
        this._flat = flat;
        this._leter = leter;
    }
    
    public getStreet(): string {
        return this._street;
    }
    public setStreet(value: string) {
        this._street = value;
    }
    public getStreetNumber(): number {
        return this._streetNumber;
    }
    public setStreetNumber(value: number) {
        this._streetNumber = value;
    }
    public getFlat(): string {
        return this._flat;
    }
    public setFlat(value: string) {
        this._flat = value;
    }
    public getLeter(): string {
        return this._leter;
    }
    public setLeter(value: string) {
        this._leter = value;
    }
    public getPostCode(): number {
        return this._postCode;
    }
    public setPostCode(value: number) {
        this._postCode = value;
    }
    public getPopulation(): string {
        return this._population;
    }
    public setPopulation(value: string) {
        this._population = value;
    }
    public getProvince(): string {
        return this._province;
    }
    public setProvince(value: string) {
        this._province = value;
    }
}