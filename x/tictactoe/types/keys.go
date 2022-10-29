package types

const (
	// ModuleName defines the module name
	ModuleName = "tictactoe"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_tictactoe"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	SystemInfoKey = "SystemInfo/value/"
)

const (
	GameCompletedEventType      = "game-completed"
	GameCompletedEventGameIndex = "game-index"
	GameCompletedEventWinner    = "winner"
	GameCompletedEventBanker    = "banker"
	GameCompletedEventPlayer    = "player"
)
