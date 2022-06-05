import { direction } from "./direction";
import { phone } from "./phone";
import { mail } from "./mail";
export class person {
    private _name: string;
    private _surname: string; 
    private _date: number; 
    private _dni: string; 
    private _birthday: string; 
    private _favouriteColor: string; 
    private _sex: string; 
    private _directions: Array<direction>;
    private _mails: Array<mail>; 
    private _phones: Array<phone>; 
    private _notes: string;
    
    public constructor(name: string, surname: string, dni: string){
        this._directions = new Array<direction>();
        this._mails = new Array<mail>();
        this._phones = new Array<phone>();
        this._name = name;
        this._surname = surname;
        this._dni = dni;
    }
    
    public getName(): string {
        return this._name;
    }
    public setName(value: string) {
        this._name = value;
    }
    public getSurname(): string {
        return this._surname;
    }
    public setSurname(value: string) {
        this._surname = value;
    }
    public getDate(): number {
        return this._date;
    }
    public setDate(value: number) {
        this._date = value;
    }
    public getDni(): string {
        return this._dni;
    }
    public setDni(value: string) {
        this._dni = value;
    }
    public getBirthday(): string {
        return this._birthday;
    }
    public setBirthday(value: string) {
        this._birthday = value;
    }
    public getFavouriteColor(): string {
        return this._favouriteColor;
    }
    public setFavouriteColor(value: string) {
        this._favouriteColor = value;
    }
    public getSex(): string {
        return this._sex;
    }
    public setSex(value: string) {
        this._sex = value;
    }
    public getDirections(): Array<direction> {
        return [...this._directions];
    }
    public addDirections(street: string, streetNumber: number, postCode: number, population: string, province: string, flat:string, leter:string) {
        let value = new direction(street, streetNumber, postCode, population, province, flat, leter);
        this._directions[this._directions.length] = value;
    }
    public deleteDirections(value: direction) {
        let target = -1;
        let i = 0;
        while(i<this._directions.length && target == -1){
            if(this._directions[i] == value) target = i;
            i++;
        }
        if(target>-1){
            delete this._directions[target];
        }
    } 
    public getMails(): Array<mail> {
        return [...this._mails];
    }
    public addMails(type: string, direction: string) {
        let value = new mail (type, direction);
        this._mails[this._mails.length] = value;
    }
    public deleteMails(value: mail) {
        let target = -1;
        let i = 0;
        while(i<this._mails.length && target == -1){
            if(this._mails[i] == value) target = i;
            i++;
        }
        if(target>-1){
            delete this._mails[target];
        }
    }
    public getPhones(): Array<phone> {
        return [...this._phones];
    }
    public addPhones(type: string, phoneNumber: number) {
        let value = new phone (type, phoneNumber);
        this._phones[this._phones.length] = value;
    }
    public deletePhones(value: phone) {
        let target = -1;
        let i = 0;
        while(i<this._phones.length && target == -1){
            if(this._phones[i] == value) target = i;
            i++;
        }
        if(target>-1){
            delete this._phones[target];
        }
    }
    public getNotes(): string {
        return this._notes;
    }
    public setNotes(value: string) {
        this._notes = value;
    }

}

