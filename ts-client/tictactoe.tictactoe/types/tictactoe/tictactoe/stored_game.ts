/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tictactoe.tictactoe";

export interface StoredGame {
  index: string;
  board: string;
  turn: string;
  banker: string;
  player: string;
  x: string;
  o: string;
  winner: string;
  state: string;
}

function createBaseStoredGame(): StoredGame {
  return { index: "", board: "", turn: "", banker: "", player: "", x: "", o: "", winner: "", state: "" };
}

export const StoredGame = {
  encode(message: StoredGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.board !== "") {
      writer.uint32(18).string(message.board);
    }
    if (message.turn !== "") {
      writer.uint32(26).string(message.turn);
    }
    if (message.banker !== "") {
      writer.uint32(34).string(message.banker);
    }
    if (message.player !== "") {
      writer.uint32(42).string(message.player);
    }
    if (message.x !== "") {
      writer.uint32(50).string(message.x);
    }
    if (message.o !== "") {
      writer.uint32(58).string(message.o);
    }
    if (message.winner !== "") {
      writer.uint32(66).string(message.winner);
    }
    if (message.state !== "") {
      writer.uint32(74).string(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoredGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.board = reader.string();
          break;
        case 3:
          message.turn = reader.string();
          break;
        case 4:
          message.banker = reader.string();
          break;
        case 5:
          message.player = reader.string();
          break;
        case 6:
          message.x = reader.string();
          break;
        case 7:
          message.o = reader.string();
          break;
        case 8:
          message.winner = reader.string();
          break;
        case 9:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoredGame {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      board: isSet(object.board) ? String(object.board) : "",
      turn: isSet(object.turn) ? String(object.turn) : "",
      banker: isSet(object.banker) ? String(object.banker) : "",
      player: isSet(object.player) ? String(object.player) : "",
      x: isSet(object.x) ? String(object.x) : "",
      o: isSet(object.o) ? String(object.o) : "",
      winner: isSet(object.winner) ? String(object.winner) : "",
      state: isSet(object.state) ? String(object.state) : "",
    };
  },

  toJSON(message: StoredGame): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.board !== undefined && (obj.board = message.board);
    message.turn !== undefined && (obj.turn = message.turn);
    message.banker !== undefined && (obj.banker = message.banker);
    message.player !== undefined && (obj.player = message.player);
    message.x !== undefined && (obj.x = message.x);
    message.o !== undefined && (obj.o = message.o);
    message.winner !== undefined && (obj.winner = message.winner);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoredGame>, I>>(object: I): StoredGame {
    const message = createBaseStoredGame();
    message.index = object.index ?? "";
    message.board = object.board ?? "";
    message.turn = object.turn ?? "";
    message.banker = object.banker ?? "";
    message.player = object.player ?? "";
    message.x = object.x ?? "";
    message.o = object.o ?? "";
    message.winner = object.winner ?? "";
    message.state = object.state ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
