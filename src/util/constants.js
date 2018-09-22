const DiscordRPC = require("discord-rpc")

let ytmrpc,
ytrpc

try {
  ytmrpc = new DiscordRPC.Client({ transport: "ipc" });
} catch(err) {
  console.log("Could not connect RPC")
}
try {
  ytrpc = new DiscordRPC.Client({ transport: "ipc" });
} catch(err) {
  console.log("Could not connect RPC")
}

module.exports = {
  app: "",
  win: "",
  menuBar: "",
  menuBarMenu: "",
  chromeConnected: false,
  presenceReady: false,
  setup: false,
  presence: {
    details: "Waiting for music",
    state: "to start playing...",
    largeImageKey: "ytm_lg",
    instance: true
  },
  newVersion: false,
  introRan: false,
  lastResponse: false,
  ytmrpc: ytmrpc,
  ytrpc: ytrpc,
  platform: "",
  data: ""
};