const express = require('express')
const app = express()
const cors = require('cors');
const cookieParser = require("cookie-parser");
const path = require('path')


const userRoute = require('./routes/userRoute')
const staticRouter = require('./routes/staticRouter')
const momentRouter = require('./routes/momentRoute')
const uploadRouter = require('./routes/uploadRoute')

// const contactRoute = require('./routes/contactRoute')
// const productRoute = require('./routes/productRoute')
// const categoryRoute = require('./routes/categoryRoute')
// const sendMail = require('./middleware/mailSender')
// const profileRoute = require('./routes/profileRoute')
// const AggregationDBRoute = require('./routes/aggregationRoute')
const queriesRoute = require('./routes/quriesRoute')
const aggregationRoute = require('./routes/AggregationQuestionPracticeRoute')
// const path = require('path')



//------------------------------------------
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json()) // parse the data that we receive form client side to server side.
app.use(express.urlencoded({ extended: false }));
app.set('view engine', "ejs") // ejs is used for server side rendering.
app.set('views', path.resolve('./views'))
app.use("/", staticRouter)
// app.use('/images', express.static(path.join(__dirname, "uploads")));
// app.use('/aggregate', AggregationDBRoute)
// app.use('/contact', contactRoute)
app.use('/user', userRoute)
// app.use('/product', productRoute)
// app.use('/category', categoryRoute)
// app.use('/profile', profileRoute)
app.use('/queries', queriesRoute)
// app.get('/send-email', sendMail) // ethereal mail sender

app.use('/moment', momentRouter)
app.use('/aggregation', aggregationRoute)
app.use('/upload', uploadRouter)
app.use('/PDFfiles', express.static('PDFfiles')) //we can access pdf file from anywhere by this http://localhost:8080/PDFfiles/1708066994298.pdf




app.use((req, res, next) => {
    res.status(404).json({
        message: 'Default running' 
    })
})

module.exports = app



