import { PostgresConnection } from "../config/postgres";
import { Datatypes} from 'sequelize'

const sequelize = await PostgresConnection();

const Tasks = sequelize.define('Tasks',{

    task:{

    },
    time:{

    },
    description:{
        
    }


})