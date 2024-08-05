
const fs = require('fs');

// setting content 
const content = 'Hello Node';

// Write content to the file 'welcome.txt'
fs.writeFile('welcome.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File "welcome.txt" created and content written.');
    }
});
