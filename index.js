const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?',
];

function titleCased() {
  // makes an array of arrays, each containing each word as an item
  const arrays = tutorials.map((item) => item.split(' '));
  // takes each array(each title) and uses the words function on each array, returning a new array of each array
  const item = arrays.map((title) => words(title));

  function words(item) {
    // takes each inner array, takes each item and makes the first character upper case
    const product = item.map(
      (word) => word.slice(0, 1).toUpperCase() + word.slice(1)
    );
    // returns the array of titles, changing each title back to a string
    return product.join(' ');
  }

  return item;
}
