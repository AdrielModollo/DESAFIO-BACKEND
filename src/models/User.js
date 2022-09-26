const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            birthday: DataTypes.DATE,
            balance: DataTypes.DOUBLE,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Account, { foreignKey: 'user_id', as: 'accounts' });

    }
}

module.exports = User;