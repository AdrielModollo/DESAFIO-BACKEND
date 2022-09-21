const { Model, DataTypes } = require('sequelize');

class Account extends Model {
    static init(sequelize){
        super.init({
            balance: DataTypes.DOUBLE,
            debit: DataTypes.DOUBLE,
            credit: DataTypes.DOUBLE,  
            estorn: DataTypes.DOUBLE,
            total: DataTypes.DOUBLE,          
        }, {
            sequelize
        })
    }
}

module.exports = Account;