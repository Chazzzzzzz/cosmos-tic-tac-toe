package rules

import (
	"errors"
	"fmt"
	"strings"
)

type Player struct {
	Player string
}

var X = Player{Player: "X"}
var O = Player{Player: "O"}
var NoPlayer = Player{Player: "NO_PLAYER"}

type Game struct {
	board [9]string
	Turn  Player
}

func New() *Game {
	game := &Game{board: [9]string{}, Turn: X}
	return game
}

func (game *Game) CheckWinner() (player string, gameOver bool) {
	// horizontal
	for i := 0; i < 9; {
		if game.board[i] != "" &&
			game.board[i] == game.board[i+1] &&
			game.board[i] == game.board[i+2] {
			return game.board[i], true
		} else {
			i += 3
		}
	}
	// vertical
	for i := 0; i < 3; {
		if game.board[i] != "" &&
			game.board[i] == game.board[i+3] &&
			game.board[i] == game.board[i+6] {
			return game.board[i], true
		} else {
			i += 1
		}
	}
	// diagonal
	if game.board[0] != "" &&
		game.board[0] == game.board[4] &&
		game.board[0] == game.board[8] {
		return game.board[0], true
	}

	if game.board[2] != "" &&
		game.board[2] == game.board[4] &&
		game.board[2] == game.board[6] {
		return game.board[2], true
	}

	// check game over
	// if any spot is not taken, then game is not over
	for i := 0; i < 9; i++ {
		if game.board[i] == "" {
			return "NO_PLAYER", false
		}
	}

	return "NO_PLAYER", true
}

func (game *Game) Move(pos int, player Player) (err error) {
	winner, gameOver := game.CheckWinner()
	if gameOver {
		return errors.New(fmt.Sprintf("game is over. winner is %s", winner))
	}

	if player != game.Turn {
		return errors.New("not expected player")
	}

	if game.board[pos] != "" {
		return errors.New("spot is taken")
	}

	if player == X {
		game.board[pos] = "X"
		game.Turn = O
	} else {
		game.board[pos] = "O"
		game.Turn = X
	}
	return nil
}

func (game *Game) PrintGame() {
	for i := 0; i < 9; i += 3 {
		fmt.Sprint(game.board[i], " ", game.board[i+1], " ", game.board[i+2], "\n")
	}
}

func (game *Game) String() string {
	res := ""
	for i := 0; i < 8; i++ {
		res += game.board[i] + ","
	}
	res += game.board[8]
	return res
}

func Parse(str string) (*Game, error) {
	sl := strings.Split(str, ",")
	if len(sl) != 9 {
		return nil, errors.New("invalid game")
	}
	game := &Game{board: [9]string{}, Turn: NoPlayer}
	for index, val := range sl {
		game.board[index] = val
	}
	return game, nil
}
