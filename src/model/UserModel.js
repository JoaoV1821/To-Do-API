export class UserModel {
    constructor(nome, email, senha) {
        this._nome = nome;
        this._email = email;
        this._senha = senha;
    };

    get nome() {
        return this._nome;
    };

    get email() {
        return this._email;
    };

    get senha() {
        return this._senha;
    }
};