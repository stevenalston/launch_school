/*
PROBLEM:
  We have the following Array of information for some popular bands:
  let bands = [
    { name: 'sunset rubdown', country: 'UK', active: false },
    { name: 'women', country: 'Germany', active: false },
    { name: 'a silver mt. zion', country: 'Spain', active: true },
  ];
  There are problems with this data, though, so we first have to clean it up before we can use it:

  The band countries are wrong: all the bands should have 'Canada' as the country.
  The band name should have all words capitalized.
  Remove all dots from the band names.
EXAMPLES:
  processBands(bands);

  // should return:
  [
    { name: 'Sunset Rubdown', country: 'Canada', active: false },
    { name: 'Women', country: 'Canada', active: false },
    { name: 'A Silver Mt Zion', country: 'Canada', active: true },
  ]
DATA:
  Input(s): Array of Objects
  Output: Array of Objects
ALGORITHM:
  change the value of the country prop to be 'Canada' -> change prop function
  Each Word of the name prop should be capitalized -> Map through the string
  Remove dots from the band name -> filter
*/
function processBands(data) {
  // iterate through data array
  return data.map(band => {
    return {
      name: formatName(band.name),
      country: 'Canada',
      active: band.active
    }
  })
}

function formatName(str) {
  return str.split(' ').map(word => {
    let splitStr = word.split('');
    let firstLetter = splitStr.shift().toUpperCase();
    return (firstLetter + splitStr.join('')).replace('.', '');
  }).join(' ')
}

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));
console.log(bands);
/* should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/