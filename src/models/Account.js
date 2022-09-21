const { Model, DataTypes } = require('sequelize');

class Account extends Model {
    static init(sequelize){
        super.init({
            debit: DataTypes.DOUBLE,
            credit: DataTypes.DOUBLE,  
            estorn: DataTypes.DOUBLE,
            total: DataTypes.DOUBLE,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'account_user' })
    }
}

module.exports = Account;