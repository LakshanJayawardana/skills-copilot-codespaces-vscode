// Create web server 
// 1. Import express
// 2. Create an instance of express
// 3. Create a route to get all comments
// 4. Create a route to get a single comment
// 5. Create a route to create a comment
// 6. Create a route to update a comment
// 7. Create a route to delete a comment
// 8. Listen on a port

const express = require('express');
const app = express();
app.use(express.json());

let comments = [
    { id: 1, username: 'Alice', comment: 'Hi there!' },
    { id: 2, username: 'Bob', comment: 'Hello!' },
    { id: 3, username: 'Charlie', comment: 'How are you?' }
];

// 3. Create a route to get all comments
app.get('/api/comments', (req, res) => {
    res.send(comments);
});
