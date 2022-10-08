const User = require('../models/users');

async function signUp(req, res) {
    const body = req.body;
    try {
        const user = await User.create(body);
        const {salt, hash} = User.createPassword(body['password']);
        user.password_salt = salt;
        user.password_hash = hash;
        await user.save();
        return res.render('form');
        // res.status(201).json(user);
    } catch (err) {
        if (['SequelizeValidationError', 'SequelizeUniqueConstraintError'].includes(err.name)) {
            return res.status(400).json({
                error: err
            })
        } else {
            throw err;
        }
    }
};

async function logIn(req, res) {
    const body = req.body;
    const user = await User.findOne( { where: { username: body['username'] } } );
    if (!user) {
        return res.status(400).json({ error: 'Usuario no encontrado' })
    }
    if (User.validatePassword(body['password'], user.password_salt, user.password_hash)) {
        return res.render('form')
        // res.status(200).json({
        //     user: user.username,
        //     email: user.email,
        //     role: user.role,
        //     token: User.generateJWT(user)
        // });
    } else 
    return res.render('invalid')
    // res.status(400).json({ mensaje: 'Contraseña incorrecta' })
}

module.exports = { signUp, logIn }