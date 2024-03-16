import cors from 'cors'
import express from 'express'
import { Server } from 'socket.io'
import apiRouter from './routes/api'

const main = async () => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/', apiRouter)

  const server = app.listen(8080, () => {
    console.log('Server is running on port 8080')
  })

  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  })

  io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg)
      io.emit('chat message', msg)
    })

    socket.emit('read-changes', { someProperty: 'some value', otherProperty: 'other value' })
  })
}

main()
