// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const AUTH_TOKEN = 'my-secret-auth-token';

// Middleware to parse JSON body and check auth header
app.use(bodyParser.json());
app.use((req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader || authHeader !== `Bearer ${AUTH_TOKEN}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
});

// Endpoint to check for intersections
app.post('/intersections', (req, res) => {
  const { linestring } = req.body;

  // Check if linestring is valid
  if (!isValidLinestring(linestring)) {
    return res.status(500).json({ error: 'Invalid linestring' });
  }

  const intersectingLines = findIntersectingLines(linestring);

  res.json(intersectingLines);
});

// Helper function to check if a linestring is valid
function isValidLinestring(linestring) {
  // Add validation logic here
  return true;
}

// Helper function to find intersecting lines
function findIntersectingLines(linestring) {
  const lines = [
    { id: 'L01', start: [0, 0], end: [5, 5] },
    { id: 'L02', start: [1, 1], end: [6, 6] },
    // Add more lines here
  ];

  const intersectingLines = [];

  for (const line of lines) {
    if (doesIntersect(line, linestring)) {
      intersectingLines.push({ id: line.id, point: getIntersection(line, linestring) });
    }
  }

  return intersectingLines;
}

// Helper function to check if a line intersects with a linestring
function doesIntersect(line, linestring) {
  // Add intersection logic here
  return true;
}

// Helper function to get the intersection point between a line and a linestring
function getIntersection(line, linestring) {
  // Add intersection point calculation logic here
  return [0, 0];
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
