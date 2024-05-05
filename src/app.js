import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import __dirname from './utils.js';
import viewsRouter from './routers/viewsRouter.js'
import { connectDB } from '../config/index.js'


const app = express()
const PORT = process.env.PORT || 8080
const httpServer = app.listen(PORT, error => {
    if(error) console.log(`Error: ${error}`)
    console.log(`Server escuchando en el puerto ${PORT}`)

})
const io = new Server(httpServer)

/*function chatSocket (io){
    return (req, res,next) => {
        req.io = io
        next()
    }
}*/

app.use(express.static(__dirname+'/public'))
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('views',__dirname+'/views')
app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use(chatSocket(io))
app.use('/', viewsRouter)
connectDB()


