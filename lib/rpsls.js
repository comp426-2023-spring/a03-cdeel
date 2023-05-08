export function rps(input) {
    var player = 0;
    if (input == null) {
        return ('{\"player\":\"' + getShot(Math.floor(Math.random() * 3)) + '\"}');
    }else {
        player = getInput(input);
        if (player == -1) {
            console.log('Enter "rock", "paper", "scissors"');
            return;
        }
    }

    let opponent = Math.floor(Math.random() * 3);
    let result;
    if (player === opponent) {
        result = "tie";
      } else if (
        (player === 0 && opponent === 2) ||
        (player === 1 && opponent === 0) ||
        (player === 2 && opponent === 1)
      ) {
        result = "win";
      } else {
        result = "lose";
      }
      return ('{\"player\":\"' + getShot(player) + '\",\"opponent\":\"' + getShot(opponent) + '\",\"result\":\"' + result + '\"}');
}

function getShot(input) {
    switch (input) {
        case 0:
          return "rock";
        case 1:
          return "paper";
        case 2:
          return "scissors";
      }
}

function getInput(input) {
  switch (String(input).toLowerCase()) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
    default:
        return -1;
}
}