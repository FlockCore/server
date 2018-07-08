var createServer = require('../')

var createFlockServer = createServer(function (socket) {
  console.log('New connection!')
  socket.write('Greetings, Martian!\n')
  socket.end()
})

createFlockServer.listen('greetings-martian-server', 8000, function () {
  console.log('Now listening ...')
})
