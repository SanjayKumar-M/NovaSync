import { Sequelize } from "sequelize";


const PostgresConnection = async() =>{

    const DB_USER_NAME = process.env.DB_USER_NAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DATABASE = process.env.DATABASE_NAME;

    const sequelize = new Sequelize(`postgres://${DB_USER_NAME}:${DB_PASSWORD}@localhost:5432/${DATABASE}`)
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  return sequelize;
}

export {Sequelize, PostgresConnection}