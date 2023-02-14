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
            notEmpty: {
                args: true,
                msg: "Email tidak boleh kosong"
            },
            isEmail: {
                args: true,
                msg: "Email tidak valid"
            }
        }
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Subject tidak boleh kosong"
            }
        }
    },
    messageContent: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Pesan tidak boleh kosong"
            }
        }
    }
},{
    freezeTableName: true
});

export default INBOX;
// (async()=>{
//     await db.sync();
// })();