import User from './model/UserSchema.js';

export const POST = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).json(newUser);
    } catch(err){
        console.log(err);
        return res.status(500).json({error : err});
    }
}