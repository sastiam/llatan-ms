const {DataTypes} = require('sequelize');


module.exports = (sequelize) => {

    sequelize.define('Client', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.VIRTUAL,
            get() {

                let currentTime = new Date();
                let dateBirth = new Date(this.dateBirth);

                return currentTime.getFullYear() - dateBirth.getFullYear();

            }
        },
        dateBirth: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }); 

}