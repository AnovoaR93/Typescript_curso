import {person}  from './person';
import {direction} from './direction';
import {phone} from './phone';
import {mail} from './mail';
import {book} from './book';

let p1 = new person('Alfredo', 'Martin', '11111111H');
let p2 = new person('Angela', 'Novoa', '22222222M');
let p3 = new person('Alberto', 'Baena', '33333333J');

let contacts = new book();
let pAux;

contacts.addPerson(p1);
contacts.addPerson(p2);
contacts.addPerson(p3);

p1.addDirections('Calle de python', 22, 28032, 'Madrid', 'Madrid', 'cuarto', 'A');
p1.addMails('outlook','alfredo@alfredo.com');
p1.addPhones('android', 666666666);
p1.setDate(22);
p1.setBirthday('30 of july');
p1.setFavouriteColor('pink');
p1.setSex('H');
p1.setNotes('Weekend enjoyer');

console.log('Imprimiendo todas las personas');
printPerson(p1);
console.log('  ---------------------');

p2.addDirections('Calle de java', 33, 28032, 'Ourense', 'Ourense', 'primero', 'B');
p2.addMails('outlook','aangela@angela.com');
p2.addPhones('android', 777777777);
p2.setDate(30);
p2.setBirthday('3th of march');
p2.setFavouriteColor('blue');
p2.setSex('M');
p2.setNotes('Party hard');

printPerson(p2);
console.log('  ---------------------');

p3.addDirections('Calle de c', 43, 19033, 'Oviedo', 'Asturias', 'segundo', 'C');
p3.addMails('gmail','alberto@alberto.com');
p3.addPhones('ios', 888888888);
p3.setDate(21);
p3.setBirthday('1th of june');
p3.setFavouriteColor('red');
p3.setSex('H');
p3.setNotes('friend of angela');

printPerson(p3);
console.log('  ---------------------');

console.log('Buscando por Dni 22222222M');
pAux = contacts.findByDni('22222222M');
pAux.addDirections ('Calle de Javascript', 44, 28045, 'Ourense', 'Ourense', 'primero', 'B');
pAux.addMails ('outlook', 'prueba@prueba.com');
pAux.addPhones('android',999999999);

console.log('Imprimiendo personas tras los cambios');
contacts.getPersons().forEach(p => {
    printPerson(p);
    console.log('  ---------------------');
});

function printPerson(p : person){
    console.log(p.getSurname() + ', ' + p.getName());
    console.log(' - Age: ' + p.getDate());
    console.log(' - DNI: ' + p.getDni());
    console.log(' - Birthday: ' + p.getBirthday());
    console.log(' - Favourite Colour: ' + p.getFavouriteColor());
    console.log(' - Sex: ' + p.getSex());
    console.log(' - Directions:');
    let Directions = p.getDirections();
    let direction;
    for(let i = 0; i < Directions.length; i++){
        direction = Directions[i];
        console.log('   '+ (i+1));
        console.log(' -- street: ' + direction.getStreet());
        console.log(' -- number: ' + direction.getStreetNumber());
        console.log(' -- flat: ' + direction.getFlat());
        console.log(' -- letter: ' + direction.getLeter());
        console.log(' -- postcode: ' + direction.getPostCode());
        console.log(' -- population: ' + direction.getPopulation());
        console.log(' -- province: ' + direction.getProvince());
    }
    console.log(' - Mails: ');
    let mails = p.getMails();
    let mail;
    for(let i = 0; i < mails.length; i++){
        mail = mails[i];
        console.log('   '+ (i+1));
        console.log(' -- type: ' + mail.getType());
        console.log(' -- direction: ' + mail.getDirection());
    }
    console.log(' - Phones: ');
    let phones = p.getPhones();
    let phone;
    for(let i = 0; i < phones.length; i++){
        phone = phones[i];
        console.log('   '+ (i+1));
        console.log(' -- type: ' + phone.getType());
        console.log(' -- number: ' + phone.getPhoneNumber());
    }
    console.log(' - Notes: ' + p.getNotes());
}