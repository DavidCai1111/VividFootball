module.exports = function(socketio){
    socketio.on('connection',function(socket){
        socket.emit('connection');
    });
};