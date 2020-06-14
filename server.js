const express = require('express')
const app = express()
const cors = require('cors')

const appRoutes = require('./routes')

const port = 3000 || process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send({ message: 'Hello node for backend!' })
})

app.use(appRoutes())

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))
