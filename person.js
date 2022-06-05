"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.person = void 0;
var direction_1 = require("./direction");
var phone_1 = require("./phone");
var mail_1 = require("./mail");
var person = /** @class */ (function () {
    function person(name, surname, dni) {
        this._directions = new Array();
        this._mails = new Array();
        this._phones = new Array();
        this._name = name;
        this._surname = surname;
        this._dni = dni;
    }
    person.prototype.getName = function () {
        return this._name;
    };
    person.prototype.setName = function (value) {
        this._name = value;
    };
    person.prototype.getSurname = function () {
        return this._surname;
    };
    person.prototype.setSurname = function (value) {
        this._surname = value;
    };
    person.prototype.getDate = function () {
        return this._date;
    };
    person.prototype.setDate = function (value) {
        this._date = value;
    };
    person.prototype.getDni = function () {
        return this._dni;
    };
    person.prototype.setDni = function (value) {
        this._dni = value;
    };
    person.prototype.getBirthday = function () {
        return this._birthday;
    };
    person.prototype.setBirthday = function (value) {
        this._birthday = value;
    };
    person.prototype.getFavouriteColor = function () {
        return this._favouriteColor;
    };
    person.prototype.setFavouriteColor = function (value) {
        this._favouriteColor = value;
    };
    person.prototype.getSex = function () {
        return this._sex;
    };
    person.prototype.setSex = function (value) {
        this._sex = value;
    };
    person.prototype.getDirections = function () {
        return __spreadArray([], this._directions, true);
    };
    person.prototype.addDirections = function (street, streetNumber, postCode, population, province, flat, leter) {
        var value = new direction_1.direction(street, streetNumber, postCode, population, province, flat, leter);
        this._directions[this._directions.length] = value;
    };
    person.prototype.deleteDirections = function (value) {
        var target = -1;
        var i = 0;
        while (i < this._directions.length && target == -1) {
            if (this._directions[i] == value)
                target = i;
            i++;
        }
        if (target > -1) {
            delete this._directions[target];
        }
    };
    person.prototype.getMails = function () {
        return __spreadArray([], this._mails, true);
    };
    person.prototype.addMails = function (type, direction) {
        var value = new mail_1.mail(type, direction);
        this._mails[this._mails.length] = value;
    };
    person.prototype.deleteMails = function (value) {
        var target = -1;
        var i = 0;
        while (i < this._mails.length && target == -1) {
            if (this._mails[i] == value)
                target = i;
            i++;
        }
        if (target > -1) {
            delete this._mails[target];
        }
    };
    person.prototype.getPhones = function () {
        return __spreadArray([], this._phones, true);
    };
    person.prototype.addPhones = function (type, phoneNumber) {
        var value = new phone_1.phone(type, phoneNumber);
        this._phones[this._phones.length] = value;
    };
    person.prototype.deletePhones = function (value) {
        var target = -1;
        var i = 0;
        while (i < this._phones.length && target == -1) {
            if (this._phones[i] == value)
                target = i;
            i++;
        }
        if (target > -1) {
            delete this._phones[target];
        }
    };
    person.prototype.getNotes = function () {
        return this._notes;
    };
    person.prototype.setNotes = function (value) {
        this._notes = value;
    };
    return person;
}());
exports.person = person;
