import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'

const app = express()
const port = 3000

app.use(express.json())

app.use(categoriesRoutes)


app.listen(port, () => console.log(`The server is running on port ${port}`))