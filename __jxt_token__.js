/* 
1. install jsonwebtoken
2. jwt.sign(payload, secret, {expiresIn})
3. token client
 */


/* 
How to store token in the client side
1. Memory--> ok type
2. local storage --> ok type (XSS)
3. cookies: http only 
*/

/* 
1. Set cookies with http only. for development secure: false,

2. cors
    . app.use(cors({
        origin: ['http://127.0.0.1:5173'],
        credentials : true
    }));

3. client side axios setting
    . in axios set withCredentials:true
 */