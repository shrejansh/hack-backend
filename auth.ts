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

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}