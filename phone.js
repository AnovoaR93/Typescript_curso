"use strict";
exports.__esModule = true;
exports.phone = void 0;
var phone = /** @class */ (function () {
    function phone(type, phoneNumber) {
        this._type = type;
        this._phoneNumber = phoneNumber;
    }
    phone.prototype.getType = function () {
        return this._type;
    };
    phone.prototype.setType = function (value) {
        this._type = value;
    };
    phone.prototype.getPhoneNumber = function () {
        return this._phoneNumber;
    };
    phone.prototype.setPhoneNumber = function (value) {
        this._phoneNumber = value;
    };
    return phone;
}());
exports.phone = phone;
