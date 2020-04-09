"use strict";
/**
 * Para a criação do usuário: name, email, password
 *
 * Devemos criar interfaces sempre que for necessário definir o formato de um objeto
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, email = _a.email, password = _a.password, techs = _a.techs;
    var user = {
        name: name,
        email: email,
        password: password,
        techs: techs,
    };
    return user;
}
exports.default = createUser;
