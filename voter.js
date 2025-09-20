/**
 * GuruShots Auto Voter - Main Application
 * 
 * This is the main entry point for the GuruShots auto voter application.
 * It sets up a scheduled task that periodically fetches active challenges
 * and votes on them automatically.
 * 
 * The application:
 * 1. Runs immediately on startup to process current challenges
 * 2. Sets up a cron job to run every 3 minutes to continue voting
 * 3. Keeps track of voting attempts with a counter
 * 
 * Requirements:
 * - Valid GuruShots authentication token in .env file
 * - Node.js with required dependencies
 */

// Load environment variables from .env file
require('dotenv').config({ quiet: true });

// Import node-cron for scheduling
const cron = require('node-cron');

// Import the main voting function from fetch.js
const {
    fetchChallengesAndVote,
} = require('./src/fetch');

// Cron interval: Run every 3 minutes
// Format: second(optional) minute hour day-of-month month day-of-week
const interval = '  */3 * * * *';

// Counter to track number of voting attempts
let voteCounter = 0;

// Create the scheduled task
const task = cron.schedule(interval, () => {
    voteCounter += 1;
    console.log(`--- Voting (${voteCounter}) ---`);
    fetchChallengesAndVote();
});

// Run immediately on startup
console.log('--- Initial voting run ---');
fetchChallengesAndVote();

// Start the scheduled task
task.start();
