import { Sequelize } from "sequelize";

const PostgresConnection = async() =>{
    
    const sequelize = new Sequelize('postgres://postgres:Sanjay@007@localhost:5432/novasync')
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}

export default PostgresConnection