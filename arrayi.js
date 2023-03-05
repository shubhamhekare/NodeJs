const SpatialIndex = require('spatial-index');

function findIntersectingLines(linestring) {
  const lines = [
    { id: 'L01', start: [0, 0], end: [5, 5] },
    { id: 'L02', start: [1, 1], end: [6, 6] },
    // Add more lines here
  ];

  const index = new SpatialIndex();

  for (const line of lines) {
    index.insert({ minX: Math.min(line.start[0], line.end[0]), minY: Math.min(line.start[1], line.end[1]), maxX: Math.max(line.start[0], line.end[0]), maxY: Math.max(line.start[1], line.end[1]), line });
  }

  const intersectingLines = [];

  for