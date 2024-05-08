import {Router} from 'express'
import {chatMgDB} from '../../dao/chatMg_db.js';
const router = Router()


const chat = new chatMgDB()

router.get('/', async (req, res) => {
    const messages = await chat.getmessages()
    console.log(messages)
    res.render('chat',{messages})
})
//Logica Websocket
/*router.get('/', (req, res) => {
        const { socketServer } = req
    
        socketServer.on('connection', socket => {
            console.log('nuevo cliente conectado')
        
            socket.on('message', data => {
                console.log(data)
            })

            const messages = []
        
        
            socket.on('mensaje_cliente', data => {
                console.log(data)
        
                messages.push({user: socket.id, message: data})
                
                socketServer.emit('srv:messagesended', messages)
            })
        })
    
        res.render('chat')
})*/

export default router