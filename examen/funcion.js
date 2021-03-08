module.exports = app => {
    const connection = dbConnection
    app.post('/registro', (req, res) => {
        const {
            Cédula,Apellidos,Nombres,Dirección,Teléfono
        } = req.body
        connection.query('INSERT INTO usuario SET ?', {
            Cédula,Apellidos,Nombres,Dirección,Teléfono
        }, (err, result) => {
            res.redirect('/login')
        })
    })
}