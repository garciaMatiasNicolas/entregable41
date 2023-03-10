import express from 'express'
import userRouter from './routes/routes.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Serve up on ${PORT}`))

const options = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
}

app.use(express.json())
app.use(cors(options))
app.use('/users', userRouter)