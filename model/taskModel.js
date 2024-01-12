import { PostgresConnection } from "../config/postgres.js";
import { DataTypes } from 'sequelize'

const sequelize = await PostgresConnection();

const commonAttributes = {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,

    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}

const Agenda = sequelize.define('Agenda', {

   agenda: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
    },
    mode:{
        type:DataTypes.ENUM('default','online','offline'),
        defaultValue:'default',
        allowNull:false
        
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false,
        

    },
    ...commonAttributes



})

const Reminder = sequelize.define('Reminder',{
    reminder: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        },
        ...commonAttributes

})

export {Agenda, Reminder}