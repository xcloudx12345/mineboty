const {mineboty} = require("mineboty")
mineboty();

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World! bot is in game and working if it is not working pls join discord and ask for help team-IC discord link : https://discord.gg/5AuwhVycjv'));

console.log(`this is made by team ic`);
console.log(`star us in github`);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


//remove this if you are not using replit 
//const express = require('express');
//const app = express();
//const port = 3000;

//app.get('/', (req, res) => res.send('Hello World! bot is in game and working if it is not working pls join discord and ask for help team-IC discord link : https://discord.gg/5AuwhVycjv'));

//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


