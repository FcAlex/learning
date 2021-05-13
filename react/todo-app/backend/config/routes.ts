import {Express, Router} from 'express'

export default function(app: Express) {
    const router = Router()
    app.use('/api', router)
}