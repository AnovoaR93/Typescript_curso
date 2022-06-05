"use strict";
exports.__esModule = true;
exports.mail = void 0;
var mail = /** @class */ (function () {
    function mail(type, direction) {
        this._type = type;
        this._direction = direction;
    }
    mail.prototype.getType = function () {
        return this._type;
    };
    mail.prototype.setType = function (value) {
        this._type = value;
    };
    mail.prototype.getDirection = function () {
        return this._direction;
    };
    mail.prototype.setDirection = function (value) {
        this._direction = value;
    };
    return mail;
}());
exports.mail = mail;
