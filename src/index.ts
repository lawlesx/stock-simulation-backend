import cors from 'cors'
import express from 'express'
import apiRouter from './routes/api'

const main = async () => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/', apiRouter)

  app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })
}

main()
