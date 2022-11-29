"use strict";
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["SOLTEIRO"] = 0] = "SOLTEIRO";
    EstadoCivil[EstadoCivil["DIVORCIADO"] = 1] = "DIVORCIADO";
    EstadoCivil[EstadoCivil["CASADO"] = 2] = "CASADO";
})(EstadoCivil || (EstadoCivil = {}));
var pessoa;
pessoa = { nome: "Jão", estadoCivil: EstadoCivil.SOLTEIRO };
console.log(pessoa.nome);
console.log(pessoa.estadoCivil);
