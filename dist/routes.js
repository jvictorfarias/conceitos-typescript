"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: 'Joao',
        email: 'victorfarias.new@gmail.com',
        password: '123',
        techs: [
            'nodejs',
            'reactjs',
            'react-native',
            { title: 'Javascript', experience: 100 },
        ],
    });
    return response.json({ response: user });
}
exports.helloWorld = helloWorld;
