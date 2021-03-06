const games = [
  {
    name: 'Tetris',
    img: 'tetris.png',
    status: 'In Progress',
    description: 'Famous Tetris Retro Game'
  },
  {
    name: 'Snake',
    img: 'snake.png',
    status: 'Ready',
    description: 'Famous Snake Retro Game'
  },
  {
    name: 'Pacman',
    img: 'pacman.png',
    status: 'In Progress',
    description: 'Famous Pacman Retro Game'
  },
  {
    name: 'Simon',
    img: 'simon.png',
    status: 'In Progress',
    description: 'Famous Simon Retro Game'
  },
  {
    name: 'Arkanoid',
    img: 'arkanoid.png',
    status: 'In Progress',
    description: 'Famous Arkanoid Retro Game'
  }
];

const snake = {
  gameType: 'Snake',
  maxPlayers: 4,
  buttons: ['UP', 'DOWN', 'LEFT', 'RIGHT'],
  teams: 1
};

module.exports = {
  games,
  snake
};
