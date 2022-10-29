/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tictactoe.tictactoe";

export interface MsgCreateGame {
  creator: string;
  banker: string;
  player: string;
}

export interface MsgCreateGameResponse {
  gameIndex: string;
}

export interface MsgPlayMove {
  creator: string;
  gameIndex: string;
  to: number;
}

export interface MsgPlayMoveResponse {
  captured: number;
  winner: string;
}

function createBaseMsgCreateGame(): MsgCreateGame {
  return { creator: "", banker: "", player: "" };
}

export const MsgCreateGame = {
  encode(message: MsgCreateGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.banker !== "") {
      writer.uint32(18).string(message.banker);
    }
    if (message.player !== "") {
      writer.uint32(26).string(message.player);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.banker = reader.string();
          break;
        case 3:
          message.player = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGame {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      banker: isSet(object.banker) ? String(object.banker) : "",
      player: isSet(object.player) ? String(object.player) : "",
    };
  },

  toJSON(message: MsgCreateGame): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.banker !== undefined && (obj.banker = message.banker);
    message.player !== undefined && (obj.player = message.player);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGame>, I>>(object: I): MsgCreateGame {
    const message = createBaseMsgCreateGame();
    message.creator = object.creator ?? "";
    message.banker = object.banker ?? "";
    message.player = object.player ?? "";
    return message;
  },
};

function createBaseMsgCreateGameResponse(): MsgCreateGameResponse {
  return { gameIndex: "" };
}

export const MsgCreateGameResponse = {
  encode(message: MsgCreateGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameIndex !== "") {
      writer.uint32(10).string(message.gameIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGameResponse {
    return { gameIndex: isSet(object.gameIndex) ? String(object.gameIndex) : "" };
  },

  toJSON(message: MsgCreateGameResponse): unknown {
    const obj: any = {};
    message.gameIndex !== undefined && (obj.gameIndex = message.gameIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGameResponse>, I>>(object: I): MsgCreateGameResponse {
    const message = createBaseMsgCreateGameResponse();
    message.gameIndex = object.gameIndex ?? "";
    return message;
  },
};

function createBaseMsgPlayMove(): MsgPlayMove {
  return { creator: "", gameIndex: "", to: 0 };
}

export const MsgPlayMove = {
  encode(message: MsgPlayMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.gameIndex !== "") {
      writer.uint32(18).string(message.gameIndex);
    }
    if (message.to !== 0) {
      writer.uint32(24).uint64(message.to);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlayMove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlayMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.gameIndex = reader.string();
          break;
        case 3:
          message.to = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlayMove {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      gameIndex: isSet(object.gameIndex) ? String(object.gameIndex) : "",
      to: isSet(object.to) ? Number(object.to) : 0,
    };
  },

  toJSON(message: MsgPlayMove): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.gameIndex !== undefined && (obj.gameIndex = message.gameIndex);
    message.to !== undefined && (obj.to = Math.round(message.to));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlayMove>, I>>(object: I): MsgPlayMove {
    const message = createBaseMsgPlayMove();
    message.creator = object.creator ?? "";
    message.gameIndex = object.gameIndex ?? "";
    message.to = object.to ?? 0;
    return message;
  },
};

function createBaseMsgPlayMoveResponse(): MsgPlayMoveResponse {
  return { captured: 0, winner: "" };
}

export const MsgPlayMoveResponse = {
  encode(message: MsgPlayMoveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.captured !== 0) {
      writer.uint32(8).int32(message.captured);
    }
    if (message.winner !== "") {
      writer.uint32(18).string(message.winner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlayMoveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlayMoveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.captured = reader.int32();
          break;
        case 2:
          message.winner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlayMoveResponse {
    return {
      captured: isSet(object.captured) ? Number(object.captured) : 0,
      winner: isSet(object.winner) ? String(object.winner) : "",
    };
  },

  toJSON(message: MsgPlayMoveResponse): unknown {
    const obj: any = {};
    message.captured !== undefined && (obj.captured = Math.round(message.captured));
    message.winner !== undefined && (obj.winner = message.winner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlayMoveResponse>, I>>(object: I): MsgPlayMoveResponse {
    const message = createBaseMsgPlayMoveResponse();
    message.captured = object.captured ?? 0;
    message.winner = object.winner ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  PlayMove(request: MsgPlayMove): Promise<MsgPlayMoveResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGame = this.CreateGame.bind(this);
    this.PlayMove = this.PlayMove.bind(this);
  }
  CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse> {
    const data = MsgCreateGame.encode(request).finish();
    const promise = this.rpc.request("tictactoe.tictactoe.Msg", "CreateGame", data);
    return promise.then((data) => MsgCreateGameResponse.decode(new _m0.Reader(data)));
  }

  PlayMove(request: MsgPlayMove): Promise<MsgPlayMoveResponse> {
    const data = MsgPlayMove.encode(request).finish();
    const promise = this.rpc.request("tictactoe.tictactoe.Msg", "PlayMove", data);
    return promise.then((data) => MsgPlayMoveResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
