const { Model, DataTypes } = require('sequelize');

class Account extends Model {
    static init(sequelize){
        super.init({
            saldo: DataTypes.DOUBLE,
            debito: DataTypes.DOUBLE,
            credito: DataTypes.DOUBLE,  
            estorno: DataTypes.DOUBLE,
            total: DataTypes.DOUBLE,          
        }, {
            sequelize
        })
    }
}

module.exports = Account;