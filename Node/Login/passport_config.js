const { authenticate } = require('passport');
const bcrypt = require('bcrypt');

const LocalStrategy = require('passport-local').Strategy;


const initialise = (passport)=>
{

    const authenticateUser = async(email,password,done)=>
    {
        const user = getUserByEmail(email);
        if(user==null)
        {
            return done(null,false,{message:'No user with that email'})
        }
        try{
            if(await bcrypt.compare(password,user.password))
            {

            }
            else
            {
                return done(null,false,{message:'Passwords does not match'})
            }
        }
        catch(err)
        {

        }

    }

    passport.use(new LocalStrategy({usernameField: 'email'}),authenticateUser)
    passport.serializeUser((user,done)=>
    {

    })
    passport.deserializeUser((id,done)=>
    {
        
    })
}



module.exports = initialise;