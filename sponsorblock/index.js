// SponsorBlock Plugin for Sentry Music
// Fetches and skips sponsored segments from the SponsorBlock API

const SPONSORBLOCK_API = "https://sponsor.ajay.app/api/skipSegments";

// Categories to skip — can be configured
const SKIP_CATEGORIES = [
  "sponsor",        // Paid promotions
  "selfpromo",      // Creator self-promotion  
  "interaction",    // Like/subscribe reminders
  "intro",          // Channel intros
  "outro",          // End cards
  "music_offtopic", // Non-music sections in music videos
];

let currentVideoId = null;
let segments = [];
let skipCount = 0;

async function fetchSegments(videoId) {
  try {
    const categories = encodeURIComponent(JSON.stringify(SKIP_CATEGORIES));
    const res = await fetch(
      `${SPONSORBLOCK_API}?videoID=${videoId}&categories=${categories}`
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

const plugin = {
  id: "sponsorblock",
  name: "SponsorBlock",
  version: "1.0.0",
  description: "Automatically skip sponsored segments during YouTube playback",
  official: true,
  enabled: true,

  async onLoad() {
    console.log("[SponsorBlock] Plugin loaded");
  },

  async onUnload() {
    segments = [];
    currentVideoId = null;
    console.log("[SponsorBlock] Plugin unloaded");
  },

  // Called by player when track changes
  async onTrackChange(videoId) {
    if (!videoId) { segments = []; return; }
    if (videoId === currentVideoId) return;
    currentVideoId = videoId;
    segments = await fetchSegments(videoId);
    console.log(`[SponsorBlock] ${segments.length} segments found for ${videoId}`);
  },

  // Called every second by player with current progress
  // Returns seek target in seconds if we should skip, null otherwise
  onProgress(currentTime) {
    for (const seg of segments) {
      const [start, end] = seg.segment;
      if (currentTime >= start && currentTime < end) {
        skipCount++;
        console.log(`[SponsorBlock] Skipping ${seg.category} segment (${start}s → ${end}s)`);
        return end;
      }
    }
    return null;
  },

  getSkipCount() {
    return skipCount;
  },
};

module.exports = plugin;
