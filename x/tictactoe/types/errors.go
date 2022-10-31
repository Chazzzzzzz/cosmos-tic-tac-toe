package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/tictactoe module sentinel errors
var (
	ErrInvalidPlayer    = sdkerrors.Register(ModuleName, 1100, "player address is invalid: %s")
	ErrGameNotParseable = sdkerrors.Register(ModuleName, 1101, "game cannot be parsed")
	ErrGameNotFound     = sdkerrors.Register(ModuleName, 1102, "game by id not found")
	ErrGameNotStarted   = sdkerrors.Register(ModuleName, 1103, "game by id not started")
	ErrGameAlreadyStart = sdkerrors.Register(ModuleName, 1104, "game by id have already started")
	ErrCreatorNotPlayer = sdkerrors.Register(ModuleName, 1105, "message creator is not a player")
	ErrNotPlayerTurn    = sdkerrors.Register(ModuleName, 1106, "player tried to play out of turn")
	ErrWrongMove        = sdkerrors.Register(ModuleName, 1107, "wrong move")
	ErrGameCompleted    = sdkerrors.Register(ModuleName, 1108, "game by id have already completed")
)
