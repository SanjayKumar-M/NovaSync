import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'

const validateToken = expressAsyncHandler(async(req,res,next)=>{

    let token;
    let autheHeader =   req.headers.authorization || req.headers.Authorization;
    if(autheHeader && autheHeader.startsWith('Bearer')){
        token = autheHeader.split(" ")[1];
        jwt.verify(token, "thetokensecret", (err, decoded) => {
            if (err) {
              res.status(401);
              throw new Error("User is not authorized");
            }
            req.user = decoded.user;
            next();
          });
      
          if (!token) {
            res.status(401);
            throw new Error("User is not authorized or token is missing");
          }
        
    }
})

export default validateToken;