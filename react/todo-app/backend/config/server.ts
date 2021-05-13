import express from 'express'
import cors from './cors'

const PORT = 3003

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors)

app.listen(PORT, () => {
    console.log(`Is running on port ${PORT}`)
})

export default app
