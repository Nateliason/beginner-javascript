function createGame(name) {
  let score = 0;
  return function addScore() {
    score++;
    return `Your ${name} score is ${score}`;
  };
}

const hockeyGame = createGame('hockey');
const soccerGame = createGame('soccer');
