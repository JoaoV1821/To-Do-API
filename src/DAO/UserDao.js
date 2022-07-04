export class UserDAO {
    constructor(bd) {
        this._bd = bd;
    };

    getUsers() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM USUARIOS`, (error, result) => {
                if (error) {
                    reject('Error ao selecionar o banco')
                } else {
                    resolve({"TABLE": result})
                }
            })
        })
    };

    

    get bd() {
        return this._bd;
    }
}