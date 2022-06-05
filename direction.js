"use strict";
exports.__esModule = true;
exports.direction = void 0;
var direction = /** @class */ (function () {
    function direction(street, streetNumber, postCode, population, province, flat, leter) {
        this._street = street;
        this._streetNumber = streetNumber;
        this._postCode = postCode;
        this._population = population;
        this._province = province;
        this._flat = flat;
        this._leter = leter;
    }
    direction.prototype.getStreet = function () {
        return this._street;
    };
    direction.prototype.setStreet = function (value) {
        this._street = value;
    };
    direction.prototype.getStreetNumber = function () {
        return this._streetNumber;
    };
    direction.prototype.setStreetNumber = function (value) {
        this._streetNumber = value;
    };
    direction.prototype.getFlat = function () {
        return this._flat;
    };
    direction.prototype.setFlat = function (value) {
        this._flat = value;
    };
    direction.prototype.getLeter = function () {
        return this._leter;
    };
    direction.prototype.setLeter = function (value) {
        this._leter = value;
    };
    direction.prototype.getPostCode = function () {
        return this._postCode;
    };
    direction.prototype.setPostCode = function (value) {
        this._postCode = value;
    };
    direction.prototype.getPopulation = function () {
        return this._population;
    };
    direction.prototype.setPopulation = function (value) {
        this._population = value;
    };
    direction.prototype.getProvince = function () {
        return this._province;
    };
    direction.prototype.setProvince = function (value) {
        this._province = value;
    };
    return direction;
}());
exports.direction = direction;
