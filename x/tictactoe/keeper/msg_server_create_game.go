package keeper

import (
	"context"
	"crypto/md5"
	"strconv"
	"tictactoe/x/tictactoe/rules"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"tictactoe/x/tictactoe/types"
)

func (k msgServer) CreateGame(goCtx context.Context, msg *types.MsgCreateGame) (*types.MsgCreateGameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	systemInfo, found := k.Keeper.GetSystemInfo(ctx)
	if !found {
		panic("SystemInfo not found")
	}
	newIndex := strconv.FormatUint(systemInfo.NextId, 10)

	var X, O string
	hashedKeys := md5.Sum([]byte(msg.Banker + msg.Player))
	if (hashedKeys[0] & 0x1) == 0x1 {
		X = msg.Banker
		O = msg.Player
	} else {
		X = msg.Player
		O = msg.Banker
	}

	newGame := rules.New()
	storedGame := types.StoredGame{
		Index:  newIndex,
		Board:  newGame.String(),
		Turn:   X,
		Banker: msg.Banker,
		Player: msg.Player,
		X:      X,
		O:      O,
		Winner: "",
		State:  "IN_PROGRESS",
	}

	err := storedGame.Validate()
	if err != nil {
		return nil, err
	}

	k.Keeper.SetStoredGame(ctx, storedGame)
	systemInfo.NextId++
	k.Keeper.SetSystemInfo(ctx, systemInfo)

	return &types.MsgCreateGameResponse{GameIndex: newIndex}, nil
}
