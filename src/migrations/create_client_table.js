


module.exports = {
    up: (queryInteface, Sequelize) => 
        queryInteface.createTable('Clients', {
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
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }),
    down: (queryInteface) => queryInteface.dropTable('Clients')
}