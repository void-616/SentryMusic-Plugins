# SentryMusic-Plugins

Official plugin registry for [Sentry Music](https://github.com/void-616/SentryMusic).

## Installing Plugins
Open Sentry Music → Plugins → Browse — plugins install with one click.

## Available Plugins
| Plugin | Version | Description |
|--------|---------|-------------|
| SponsorBlock | 1.0.0 | Skip sponsored segments automatically |
| Discord RPC | 0.2.0 | Show currently playing in Discord status |
| Last.fm Scrobbler | 0.1.0 | Scrobble tracks to Last.fm |

## Creating a Plugin
Each plugin is a `.sentry-plugin` file (a renamed zip) containing:
- `plugin.json` — manifest file
- `index.js` — plugin logic

See the [plugin development guide](docs/creating-plugins.md) for details.

## License
MIT
