"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Omnivoro = void 0;
var abstractMamiferos_1 = require("./abstractMamiferos");
var Omnivoro = /** @class */ (function (_super) {
    __extends(Omnivoro, _super);
    function Omnivoro(pGlandulasMamarias, pNombre, pAlimento) {
        var _this = _super.call(this, pGlandulasMamarias, pNombre) || this;
        _this.alimento = pAlimento;
        return _this;
    }
    Omnivoro.prototype.avanzar = function () {
    };
    Omnivoro.prototype.descansar = function () {
    };
    Omnivoro.prototype.alimentarse = function () {
        console.log("El ", this.nombre, " esta comiendo ", this.alimento);
    };
    return Omnivoro;
}(abstractMamiferos_1.Mamiferos));
exports.Omnivoro = Omnivoro;
