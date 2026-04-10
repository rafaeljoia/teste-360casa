# Tour Casa - 360° Virtual House Tour

## Overview
A 360-degree interactive virtual tour of a house, built with the Marzipano library. Users can navigate between panoramic scenes of the entrance, entrance-to-living-room transition, and living room, with interactive hotspots and view controls.

## Tech Stack
- **Frontend:** Vanilla HTML, CSS, JavaScript
- **360° Viewer:** Marzipano v0.4.0 (bundled locally in `app-files/vendor/`)
- **Server:** Node.js HTTP server (`server.js`) — serves static files on port 5000

## Project Structure
- `app-files/` — All frontend application files
  - `index.html` — Main entry point
  - `index.js` — Marzipano initialization and interaction logic
  - `data.js` — Scene configuration (hotspots, tile paths, view parameters)
  - `style.css` — Application styles
  - `vendor/` — Bundled libraries (marzipano.js, bowser.min.js, screenfull.min.js)
  - `img/` — UI icon assets
  - `tiles/` — Panoramic image tiles (cube map format, multiple zoom levels)
- `server.js` — Static file server
- `LICENSE.txt` / `README.txt` — Project documentation

## Scenes
1. `0-foto_entrada` — Entrance
2. `1-entrada-sala` — Entrance to living room transition
3. `2-sala` — Living room

## Running the App
The workflow `Start application` runs `node server.js`, which serves `app-files/` on port 5000.

## Deployment
Configured as a **static** deployment, serving the `app-files/` directory directly.
