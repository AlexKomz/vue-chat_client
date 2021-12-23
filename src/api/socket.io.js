import { Manager } from "socket.io-client";

const URL = "http://localhost:3000";

export const manager = new Manager(URL, { autoConnect: false });
export const socket = manager.socket("/");
