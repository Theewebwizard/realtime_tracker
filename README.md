# realtime_tracker
# Real-Time Tracking

This project implements a real-time location tracking system using Node.js, Express, Socket.io, and Leaflet.js.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/real-time-tracking.git
    cd real-time-tracking
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    node app.js
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the real-time tracking map.

## Project Structure

- `app.js`: Server setup with Express and Socket.io
- `public/`: Static files (CSS, JavaScript)
  - `css/style.css`: Stylesheet for the application
  - `js/script.js`: Client-side JavaScript for real-time tracking
- `.gitignore`: List of files and directories to ignore in the repository
- `README.md`: Project documentation

## Features

- Real-time location tracking using geolocation API
- Interactive map with markers using Leaflet.js
- Real-time updates via Socket.io
