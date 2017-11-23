import io from 'socket.io-client';

export function createConnection(url) {
  const connection = io(url);

  return {
    on: onFunction,
    emit: emitFunction
  };

  function onFunction(eventName, callback) {
    return connection.on(eventName, callback);
  }

  function emitFunction(eventName, data) {
    return connection.emit(eventName, data);
  }
}
