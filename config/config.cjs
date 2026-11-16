const path = require("node:path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(".env") });

const databaseConfig = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    dialect: "postgres",
};

module.exports = {
    development: databaseConfig,
    test: databaseConfig,
    production: databaseConfig,
};
