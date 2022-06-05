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
exports.book = void 0;
var book = /** @class */ (function () {
    function book() {
        this._persons = new Array();
    }
    book.prototype.addPerson = function (person) {
        this._persons[this._persons.length] = person;
    };
    book.prototype.findByDni = function (dni) {
        var target = -1;
        var i = 0;
        while (i < this._persons.length && target == -1) {
            if (this._persons[i].getDni() == dni)
                target = i;
            i++;
        }
        if (target > -1) {
            return this._persons[target];
        }
        else
            return null;
    };
    book.prototype.getPersons = function () {
        return __spreadArray([], this._persons, true);
    };
    return book;
}());
exports.book = book;
