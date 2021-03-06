const express = require('express')
const app = express()
const cors = require('cors')

const port = 3000 || process.env.PORT

app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Hello node for backend!' })
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))
