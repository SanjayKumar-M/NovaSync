import { PostgresConnection, Sequelize } from "../config/postgres.js";
import DataTypes from 'sequelize'

const sequelize = await PostgresConnection();

const UserModel = sequelize.define('User',{
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

})

export default UserModel;