
// Importing package
const generatePassword = require('generate-password');

// Function to generate password
function generateRandomPassword() {
    // Generate a random password with specified options
    const password = generatePassword.generate({
        length: 12, // Length 
        numbers: true, // Include numbers
        uppercase: true, // Include uppercase letters
        symbols: true, // Include symbols
        excludeSimilarCharacters: true // Exclude similar characters
    });
    
    return password;
}

// Generate a password and log to  console
const password = generateRandomPassword();
console.log('Generated Password:', password);
