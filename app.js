//Problem: We need a simple way to look at a users badge count and javascript points
//Solution: Use node.js to connect to Treehouse's API to get profile information to print out 
var profile = require ("./profile"); //path is mandatory 
var users = process.argv.slice(2); //so we can use the command line 
users.forEach(profile.get);