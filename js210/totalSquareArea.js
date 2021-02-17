let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(array) {
  let sum = 0;

  array.forEach(dimensions => {
    sum += dimensions.reduce((acc, dimension) => {
      return acc * dimension
    })
  });

  return sum
}

console.log(totalArea(rectangles));    // 141

/* lSchool solution - more elegant solution than mine above
function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}
*/

// remove areas which are not squares

function totalSquareArea(array) {
  const squareAreas = array.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squareAreas)
}

console.log(totalSquareArea(rectangles));    // 141