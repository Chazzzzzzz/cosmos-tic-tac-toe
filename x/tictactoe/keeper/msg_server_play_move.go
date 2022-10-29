package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"tictactoe/x/tictactoe/rules"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"tictactoe/x/tictactoe/types"
)

func (k msgServer) PlayMove(goCtx context.Context, msg *types.MsgPlayMove) (*types.MsgPlayMoveResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	storedGame, found := k.Keeper.GetStoredGame(ctx, msg.GameIndex)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrGameNotFound, "%s", msg.GameIndex)
	}

	isX := storedGame.X == msg.Creator
	isO := storedGame.O == msg.Creator
	var player rules.Player
	if !isX && !isO {
		return nil, sdkerrors.Wrapf(types.ErrCreatorNotPlayer, "%s", msg.Creator)
	} else if isX && isO {
		player = rules.Player{Player: storedGame.Turn}
	} else if isX {
		player = rules.X
	} else {
		player = rules.O
	}

	game, err := storedGame.ParseGame()
	if err != nil {
		panic(err.Error())
	}

	if game.Turn != player {
		return nil, sdkerrors.Wrapf(types.ErrNotPlayerTurn, "%s", player)
	}

	moveErr := game.Move(int(msg.To), player)
	if moveErr != nil {
		return nil, sdkerrors.Wrapf(types.ErrWrongMove, moveErr.Error())
	}

	winner, gameOver := game.CheckWinner()
	if gameOver {
		storedGame.Winner = winner
		storedGame.State = "COMPLETED"
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(types.GameCompletedEventType,
				sdk.NewAttribute(types.GameCompletedEventGameIndex, storedGame.Index),
				sdk.NewAttribute(types.GameCompletedEventBanker, storedGame.Banker),
				sdk.NewAttribute(types.GameCompletedEventPlayer, storedGame.Player),
				sdk.NewAttribute(types.GameCompletedEventWinner, winner),
			),
		)
	}

	storedGame.Board = game.String()
	storedGame.Turn = game.Turn.Player
	k.Keeper.SetStoredGame(ctx, storedGame)

	return &types.MsgPlayMoveResponse{Captured: int32(msg.To), Winner: winner}, nil
}
