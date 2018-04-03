const
    express = require('express'),
    app = express(),
    PORT = 5600,
    { join } = require('path'),
    { rainbow } = require('handy-log'),
    favicon = require('serve-favicon')

//  Middlewares
app.use(favicon(
    join(__dirname, '/favicon.ico')
))
app.use(express.static(
    join(__dirname, '/dist')
))

// Route    
app.get('*', (req, res) => {
    res.sendFile(
        join(__dirname, '/index.html')
    )
})

// Listen to port 5600
app.listen(PORT, () => 
    rainbow(`App running on ${PORT}`)
)