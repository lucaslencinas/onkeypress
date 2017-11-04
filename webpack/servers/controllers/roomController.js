const roomService = require('../services/roomService');

/*
req.body: { name, password, slug, availableButtons }
*/
function create(req, res) {
  const room = req.body;
  console.log('inside controller');
  console.log(req.body);

  return roomService.create(room)
    .then((createdRoom) => res.status(201).json(createdRoom));
}

function join(req, res) {
  const room = req.body.room;
  const player = req.body.player;

  return roomService.join(room, player)
    .then((joinedRoom) => res.status(201).json(joinedRoom));
}

module.exports = {
  create,
  join
};