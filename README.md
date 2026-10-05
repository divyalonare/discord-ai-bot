# Discord AI Bot 

A Discord bot built with **Node.js** and **Discord.js v14** that handles message events and slash commands, backed by a **MongoDB** database for user management.

## Features

- Responds to message events in Discord servers
- Registers and handles slash commands via Discord REST API
- MongoDB integration for storing and managing user data
- Role-based access control (Admin / Normal User)

## Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js&logoColor=white)
![Discord.js v14](https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)

## Project Structure

```
discord-ai-bot/
├── index.js          # Bot entry point, event listeners
├── command.js        # Slash command registration
├── models/
│   ├── connectdb.js  # MongoDB connection
│   └── user.js       # User schema (username, email, password, role)
└── .env              # Environment variables
```

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB URI
- Discord Bot Token ([Discord Developer Portal](https://discord.com/developers/applications))

### Installation

```bash
git clone https://github.com/divyalonare/discord-ai-bot.git
cd discord-ai-bot
npm install
```

### Configuration

Create a `.env` file in the root directory:

```env
DISCORD_TOKEN=your_discord_bot_token
MONGO_URI=your_mongodb_connection_string
```

### Run

```bash
# Register slash commands
node command.js

# Start the bot
npm start
```

## User Schema

| Field       | Type   | Description                        |
|-------------|--------|------------------------------------|
| user_name   | String | Unique username                    |
| email       | String | Unique email address               |
| password    | String | Hashed password                    |
| role        | String | `Admin` or `Normal_User` (default) |
| created_at  | Date   | Auto-generated timestamp           |
| updated_at  | Date   | Auto-generated timestamp           |

