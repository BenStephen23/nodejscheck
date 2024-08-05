// readWelcomeFile.js

const fs = require('fs');

// Read content from the file 'welcome.txt'
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Content of "welcome.txt":', data);
    }
});
