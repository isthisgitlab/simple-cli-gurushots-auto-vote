/**
 * GuruShots Auto Voter - Authentication Module
 * 
 * This script handles the authentication process for the GuruShots auto voter.
 * It prompts the user for their GuruShots credentials and obtains an authentication
 * token that will be saved to the .env file for use by the main application.
 * 
 * Usage:
 * 1. Run this script first: `npm run login`
 * 2. Enter your GuruShots email and password when prompted
 * 3. After successful login, run the main application: `npm start`
 * 
 * The token will be automatically saved to the .env file and will be valid
 * until it expires (typically several days to weeks).
 */

// Import the login function from the fetch module
const { login } = require('./src/fetch');

// Run the login function immediately using an IIFE (Immediately Invoked Function Expression)
(async () => {
    try {
        // Attempt to login and get the result
        const result = await login();
        
        // Check if login was successful and a token was obtained
        if (result && result.token) {
            console.log('Login successful! Token obtained.');
            console.log('You can now run the auto-voter with your token.');
        } else {
            console.error('Login failed. Please check your credentials and try again.');
        }
    } catch (error) {
        // Handle any unexpected errors during the login process
        console.error('An error occurred during login:', error.message || error);
    }
})();