'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
require('./books');

const booksEvents = require('./books.js');

$(document).on('click', '#get-book-button', function(){
  booksEvents.onGetBooks();
});

$(() => {
  // booksEvents.addHandlers();
});
