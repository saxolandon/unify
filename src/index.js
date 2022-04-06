const express = require('express')
const app = express()
const path = require('path')

const auth = require('./api/routes/auth.route')
const events = require('./api/routes/events.route')
const rsos = require('./api/routes/rsos.route')

require('dotenv').config()

app.use(express.json())

const port = process.env.PORT || 3000

app.use(
    express.static(path.join(__dirname, 'views'), {
        index: false,
        extensions: ['html']
    })
)

app.get('/', (req, res) => {
    res.redirect('login')
})

app.use('/api/auth', auth)
app.use('/api/events', events)
app.use('/api/rsos', rsos)

const start = async () => {
    try {
        app.listen(port, () => console.log(`Listening on port ${port}`))
    } catch (err) {
        console.error(err)
    }
}

start()
