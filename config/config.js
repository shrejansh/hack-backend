// import 'dotenv/config'
require('dotenv').config()
// console.log(process.env.DB_PASSWORD)
module.exports  = {
  "development": {
    "dialect": "postgres",
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOSTNAME,
    "dialectOptions": {
      "ssl": {
        "require": false
      }
    },
   
  },

}
