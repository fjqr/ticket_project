import dotenv from 'dotenv'
dotenv.config()

const DATABASE = {
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    password: process.env.DB_PASSWORD
}

export default DATABASE