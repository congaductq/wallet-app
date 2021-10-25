const express = require('express')

const port = process.env.PORT || 3000;

(async () => {
  const server = express()
  server.use(express.static(`${__dirname}/build`))
  server.get('*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`)
  })

  await server.listen(port, () => console.log('Serving on port: '.concat(port)))
})()
