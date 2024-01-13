const jwt = require('jsonwebtoken');
// import 'dotenv/config'
require('dotenv').config()

export function generateAccessToken(username) {
    // return J
    try{
      const token = jwt.sign(username, process.env.TOKEN_SECRET);
      console.log(token, process.env.TOKEN_SECRET);
      return token;
    }catch(e){
      console.log('Error occurred while generating token', e.message);
    }
    // return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }