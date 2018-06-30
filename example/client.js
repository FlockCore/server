var flockCoreChannel = require('@flockcore/channel')()
var net = require('net')

flockCoreChannel.on('peer', function (key, peer) {
  var socket = net.connect(peer.port, peer.host)

  socket.on('data', function (data) {
    process.stdout.write(data)
    socket.on('end', function () {
      process.exit()
    })
  })

  socket.on('error', function () {
    socket.destroy()
  })
})

flockCoreChannel.join('greetings-martian-server')
