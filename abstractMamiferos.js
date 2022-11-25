"use strict";
exports.__esModule = true;
exports.Mamiferos = void 0;
var Mamiferos = /** @class */ (function () {
    function Mamiferos(pGlandulasMamarias, pNombre) {
        this.glandulasMamarias = pGlandulasMamarias;
        this.pelaje = "abundante";
        this.lactancia = true;
        this.dientes = true;
        this.nombre = pNombre;
    }
    Mamiferos.prototype.avanzar = function () {
    };
    Mamiferos.prototype.descansar = function () {
    };
    Mamiferos.prototype.alimentarse = function () {
    };
    return Mamiferos;
}());
exports.Mamiferos = Mamiferos;
