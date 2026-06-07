const plugin = {
  id: "discord-rpc",
  name: "Discord RPC",
  version: "0.2.0",
  description: "Show currently playing track in Discord status",
  official: true,
  enabled: false,

  async onLoad() {
    console.log("[Discord RPC] Plugin loaded");
  },

  async onUnload() {
    console.log("[Discord RPC] Plugin unloaded");
  },
};

module.exports = plugin;
