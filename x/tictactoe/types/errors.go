package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/tictactoe module sentinel errors
var (
	ErrInvalidPlayer    = sdkerrors.Register(ModuleName, 1100, "player address is invalid: %s")
	ErrGameNotParseable = sdkerrors.Register(ModuleName, 1102, "game cannot be parsed")
)
