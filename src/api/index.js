import { manager, socket } from "@/api/socket.io";
import { ConnectionError, CompanionDisconnectionError } from "@/utils/errors";

class Api {
  _manager = null;
  _socket = null;
  _isConnected = false;

  constructor(manager, socket) {
    this._manager = manager;
    this._socket = socket;
  }

  onConnectError(callback) {
    this._manager.on("error", callback);
  }

  onReconnect(callback) {
    this._manager.on("reconnect", callback);
  }

  connect() {
    if (this._isConnected) {
      return;
    }

    this._socket.connect();

    const onConnectCb = () => {
      this._isConnected = true;
    };

    this.onConnect(onConnectCb);
    this.onReconnect(onConnectCb);

    return new Promise((resolve, reject) => {
      this.onConnectError(() => {
        this._isConnected = false;
        reject(new ConnectionError());
      });
    });
  }

  search() {
    this._socket.emit("chat_search_start");
  }

  searchStop() {
    this._socket.emit("chat_search_stop");
  }

  sendMessage(message) {
    this._socket.emit("chat_message", { message });
  }

  chatStop() {
    this._socket.emit("chat_stop");
  }

  onConnect(callback) {
    this._socket.once("connect", callback);
  }

  onChatStart(callback) {
    this._socket.once("chat_start", callback);

    return new Promise((resolve, reject) => {
      this.onChatStop(() => {
        reject(new CompanionDisconnectionError());
      });
    });
  }

  onChatStop(callback) {
    this._socket.off("chat_message");
    this._socket.once("chat_stop", callback);
  }

  onMessageCame(callback) {
    this._socket.on("chat_message", callback);
  }
}

const api = new Api(manager, socket);

export default api;
