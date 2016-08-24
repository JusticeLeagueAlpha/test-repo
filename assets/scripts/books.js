'use strict';

const app = require('./app');

const failure = (error) => {
  console.error(error);
};

const getBooksSuccess = (data) => {
  console.log(data);
  const displayAllBooks =
    require('./templates/display-all-books.handlebars');
  $('.inject-books').html(displayAllBooks({
    books: data.books
  }));
};

const getBooks = function (){
  return $.ajax({
    url: app.api + '/books',
    method: 'GET',
  });
};

const onGetBooks = function() {
  // event.preventDefault();
  getBooks()
    .done(getBooksSuccess)
    .fail(failure);
};



// const addHandlers = () => {
//   $('#get-book-button').on('click', onGetBooks());
// };

module.exports = {
  // addHandlers,
  onGetBooks,

};
