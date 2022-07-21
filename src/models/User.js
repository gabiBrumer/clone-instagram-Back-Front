module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },

          email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true
          },

          name: {
            type: DataTypes.STRING(200),
            allowNull: false
          },
  
          password: {
            type: DataTypes.STRING(256),
            allowNull: false
          },
  
          username: {
            type: DataTypes.STRING(200),
            allowNull: false,
          },
  
          avatar: {
            type: DataTypes.STRING(200),
            allowNull: true
          },
    }, {
        tableName: "users",
        timestamps: true
    }
    )
    return User;
}