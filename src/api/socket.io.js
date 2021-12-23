import { Manager } from "socket.io-client";

const URL = "https://vue-chat-service.herokuapp.com";

export const manager = new Manager(URL, { autoConnect: false });
export const socket = manager.socket("/");
