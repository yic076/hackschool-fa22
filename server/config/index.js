const dotenv = require('dotenv');

dotenv.config();

const config = {
    Port: process.env.PORT,
    databaseUrl: process.env.DATABASE_URL
}

module.exports = config;