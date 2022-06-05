import { person } from "./person";

export class book{
    private _persons: Array <person>; 
    
    public constructor (){
        this._persons = new Array<person>();
    }

    public addPerson(person:person) {
        this._persons[this._persons.length] = person;
    }

    public findByDni(dni:string) {
        let target = -1;
        let i = 0;
        while(i<this._persons.length && target == -1){
            if(this._persons[i].getDni() == dni) target = i;
            i++;
        }
        if(target>-1){
            return this._persons[target];
        }
        else return null;
    } 

    public getPersons(){
        return [...this._persons];
    }
}