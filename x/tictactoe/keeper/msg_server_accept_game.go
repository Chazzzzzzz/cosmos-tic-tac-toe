package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"tictactoe/x/tictactoe/types"
)

func (k msgServer) AcceptGame(goCtx context.Context, msg *types.MsgAcceptGame) (*types.MsgAcceptGameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	storedGame, found := k.Keeper.GetStoredGame(ctx, msg.GameIndex)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrGameNotFound, "%s", msg.GameIndex)
	}

	if storedGame.State != types.GamePendingAcceptance {
		return nil, sdkerrors.Wrapf(types.ErrGameAlreadyStart, "%s", msg.Creator)
	}

	if storedGame.Player != msg.Creator {
		return nil, sdkerrors.Wrapf(types.ErrCreatorNotPlayer, "%s", msg.Creator)
	}

	storedGame.State = types.GameInProgress
	k.Keeper.SetStoredGame(ctx, storedGame)

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(types.GameStartedEventType,
			sdk.NewAttribute(types.GameStartedEventCreator, msg.Creator),
			sdk.NewAttribute(types.GameStartedEventGameIndex, msg.GameIndex),
		),
	)

	return &types.MsgAcceptGameResponse{}, nil
}
