import mongoose from 'mongoose'

mongoose.Promise = global.Promise

export default mongoose.connect('mongodb://localhost/todo')