const fs = require('fs');
const path = 'src/sections/eventsData/events.js';
let c = fs.readFileSync(path, 'utf8');
c = c.replace(/ranking:\s*".*?",\s*/g, '');
c = c.replace(/contact:\s*\[/g, 'ranking: "There will be a Winner and Runner up",\n      contact: [');
fs.writeFileSync(path, c);
console.log("Updated events.js");
