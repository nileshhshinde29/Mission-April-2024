const express = require('express')
const app = express()
const cors = require('cors');

const userRoute = require('./routes/userRoute')
// const contactRoute = require('./routes/contactRoute')
// const productRoute = require('./routes/productRoute')
// const categoryRoute = require('./routes/categoryRoute')
// const sendMail = require('./middleware/mailSender')
// const profileRoute = require('./routes/profileRoute')
// const AggregationDBRoute = require('./routes/aggregationRoute')
// const queriesRoute = require('./routes/quriesRoute')
// const path = require('path')



//------------------------------------------
app.use(express.json()) // parse the data that we receive form client side to server side.

app.use(cors())
// app.use('/images', express.static(path.join(__dirname, "uploads")));
// app.use('/aggregate', AggregationDBRoute)
// app.use('/contact', contactRoute)
app.use('/user', userRoute)
// app.use('/product', productRoute)
// app.use('/category', categoryRoute)
// app.use('/profile', profileRoute)
// app.use('/queries', queriesRoute)
// app.get('/send-email', sendMail) // ethereal mail sender



app.use((req, res, next) => {
    res.status(404).json({
        message: 'Default running'
    })
})

module.exports = app



