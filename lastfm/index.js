const plugin = {
  id: "lastfm",
  name: "Last.fm Scrobbler",
  version: "0.1.0",
  description: "Scrobble tracks to Last.fm",
  official: true,
  enabled: false,

  async onLoad() {
    console.log("[Last.fm] Plugin loaded");
  },

  async onUnload() {
    console.log("[Last.fm] Plugin unloaded");
  },
};

module.exports = plugin;
