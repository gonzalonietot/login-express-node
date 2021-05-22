const ErrorHandler = require('../middlewares/errorHandler');

const checkLogin = async (req, res, next) => {
    try {
        const { userName, password } = req.body

        if (!userName || !password) {
            throw new ErrorHandler(404, 'Password and username are required');
        }
    } catch (e) {
        next(e);
    }
    return res.status(200).send('HOLA MUNDO');
}

module.exports = {
    checkLogin
}
