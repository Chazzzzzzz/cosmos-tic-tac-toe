package types

import (
	"errors"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"tictactoe/x/tictactoe/rules"
)

func (storedGame StoredGame) GetBankerAddress() (banker sdk.AccAddress, err error) {
	banker, errBlack := sdk.AccAddressFromBech32(storedGame.Banker)
	return banker, sdkerrors.Wrapf(errBlack, ErrInvalidPlayer.Error(), storedGame.Banker)
}

func (storedGame StoredGame) GetPlayerAddress() (player sdk.AccAddress, err error) {
	player, errRed := sdk.AccAddressFromBech32(storedGame.Player)
	return player, sdkerrors.Wrapf(errRed, ErrInvalidPlayer.Error(), storedGame.Player)
}

func (storedGame StoredGame) ParseGame() (game *rules.Game, err error) {
	game, errParse := rules.Parse(storedGame.Board)
	if errParse != nil {
		return nil, sdkerrors.Wrapf(errParse, ErrGameNotParseable.Error())
	}
	if storedGame.Turn == "" {
		return nil, sdkerrors.Wrapf(errors.New(fmt.Sprintf("Turn: %s", storedGame.Turn)), ErrGameNotParseable.Error())
	}
	game.Turn = rules.Player{Player: storedGame.Turn}
	return game, nil
}

func (storedGame StoredGame) Validate() (err error) {
	_, err = storedGame.GetBankerAddress()
	if err != nil {
		return err
	}
	_, err = storedGame.GetPlayerAddress()
	if err != nil {
		return err
	}
	_, err = storedGame.ParseGame()
	return err
}
