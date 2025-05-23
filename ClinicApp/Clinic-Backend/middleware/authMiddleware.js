const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next)=>{
    const token = req.header('Authorization')?.replace('Bearer ','');
    if(!token) return res.status(401).json({error: 'Access denied'});

    try{
        const verified = jwt.verify(token, process.env.JWT_Secret);
        req.user = {id: verified.id, role : verified.role};
        next();

    }
    catch(err){
        res.status(400).json({error: 'Invalid token'});
    }
};


module.exports =  authMiddleware;   
;