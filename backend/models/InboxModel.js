import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const INBOX = db.define('inbox',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    messageContent: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

export default INBOX;
// (async()=>{
//     await db.sync();
// })();