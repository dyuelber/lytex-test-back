
function handle(req, res, next) {
    const token = req.headers['x-access-token'];
    if (! token) {
        return res.status(500).json({message: 'Unauthorized'});
    }
 
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    if (decoded !== process.env.TOKEN_FRONT) {
        return res.status(500).json({message: 'Unauthorized'});
    }

    next();
}

module.exports = { handle }
