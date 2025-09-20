# Simple CLI GuruShots Auto Voter

> This is simple, unconfigurable (unless you change the code) script that just works.  
> If you want configurable version, check out [GuruShots Auto Voter](https://github.com/isthisgitlab/gurushots-auto-vote)

A powerful Node.js application for automatically voting in GuruShots.com photography challenges. This tool helps photographers maintain their exposure levels and apply boosts at optimal times without manual intervention.

## What is GuruShots?

[GuruShots](https://gurushots.com) is a popular photography platform that runs continuous photo challenges. Participants submit their photos and vote on others' submissions to increase their "exposure level" in each challenge. Higher exposure levels give your photos more visibility, increasing your chances of winning.

## What This Tool Does

This application automates the voting process on GuruShots to help you:

1. **Maintain maximum exposure** in all your active challenges
2. **Apply boosts at optimal times** to maximize their effectiveness
3. **Save time** by eliminating the need for manual voting

The tool uses a realistic voting pattern with random delays to mimic human behavior and operates completely within the GuruShots platform's capabilities.

## Requirements

- Node.js 18.x or higher
- npm or yarn package manager
- A valid GuruShots account
- Internet connection

## Installation

1. Clone this repository or download the source code:
   ```bash
   git clone https://github.com/isthisgitlab/simple-cli-gurushots-auto-voter.git
   cd simple-cli-gurushots-auto-voter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Step 1: Login and Get Authentication Token

First, you need to authenticate with GuruShots to obtain a token:

```bash
npm run login
```

You'll be prompted to enter your GuruShots email and password. The script will securely authenticate with GuruShots and save your token to the `.env` file.

### Step 2: Run the Auto Voter

Once you have a valid token, start the auto voter:

```bash
npm run start
```

The application will:

- Run immediately on startup to process current challenges
- Set up a scheduled task to run every 3 minutes
- Display progress in the console

### How It Works

When running, the auto voter:

1. **Fetches all your active challenges** from GuruShots
2. **For each challenge with exposure < 100%:**
   - Fetches images available for voting
   - Votes on random images until your exposure reaches 100%
   - Adds random delays between votes to simulate human behavior
3. **Automatically applies boosts** when:
   - A boost is available for a challenge
   - The boost deadline is within timeout
4. **Logs all activities** to the console for monitoring

## Configuration

The application uses a `.env` file for configuration:

```
TOKEN=your_gurushots_authentication_token
```

The token is automatically set when you run the login script. You typically don't need to modify this file manually.

## Troubleshooting

### Token Issues

If you encounter authentication errors:
1. Run `npm run login` again to obtain a fresh token
2. Make sure your GuruShots account credentials are correct
3. Check that the `.env` file exists and contains a valid TOKEN value

### Connection Problems

If the application fails to connect to GuruShots:
1. Check your internet connection
2. Verify that the GuruShots API is accessible
3. Try restarting the application

### Voting Not Working

If voting doesn't seem to be working:
1. Check the console for error messages
2. Verify that your token is valid by running the login script again
3. Make sure you have active challenges in your GuruShots account

## Disclaimer

This tool is provided for educational purposes only. Use it at your own risk. The developers are not responsible for any consequences of using this tool, including but not limited to account suspension or termination by GuruShots.

Always respect GuruShots' terms of service and use automation tools responsibly.

## License

This project is licensed under the ISC License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- Thanks to the GuruShots community for inspiration
- Special thanks to all contributors who have helped improve this tool
