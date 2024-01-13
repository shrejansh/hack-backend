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
  "test": {
    "username": "YYwB3Ou4BE3gqXq4Y4CGxNuACrhRxEvn@dpg-cmguvmnqd2ns73fmtffg-a/hack_db_instance",
    "password": null,
    "database": "database_test",
    "host": "postgres://hack_db_instance_user:YYwB3Ou4BE3gqXq4Y4CGxNuACrhRxEvn@dpg-cmguvmnqd2ns73fmtffg-a/hack_db_instance",
    "dialect": "postgres"
  },
  "production": {
    "username": "YYwB3Ou4BE3gqXq4Y4CGxNuACrhRxEvn@dpg-cmguvmnqd2ns73fmtffg-a/hack_db_instance",
    "password": null,
    "database": "database_production",
    "host": "postgres://hack_db_instance_user:YYwB3Ou4BE3gqXq4Y4CGxNuACrhRxEvn@dpg-cmguvmnqd2ns73fmtffg-a/hack_db_instance",
    "dialect": "postgres"
  }
}
