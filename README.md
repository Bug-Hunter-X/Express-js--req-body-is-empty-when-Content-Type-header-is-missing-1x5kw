# Express.js - req.body is empty when Content-Type header is missing
This repository demonstrates a common error in Express.js applications where the request body (req.body) is empty when the client doesn't send the correct Content-Type header.  The issue arises because the express.json() middleware relies on the header to correctly parse the JSON data.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a solution that handles this case gracefully.