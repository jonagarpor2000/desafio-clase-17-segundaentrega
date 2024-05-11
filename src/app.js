import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routers/viewsRouter.js'
import { connectDB } from '../config/index.js'


const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(__dirname+'/public'))
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('views',__dirname+'/views')
app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', viewsRouter)
connectDB()

app.listen(PORT, error => {
    if(error) console.log(`Error: ${error}`)
    console.log(`Server escuchando en el puerto ${PORT}`)

})
