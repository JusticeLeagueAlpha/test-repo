'use strict'

const getFormFields = require(`../../../lib/get-form-fields`);
const app = require('./app');
const ui = require('./ui');

const getBooks = function (){
  return $.ajax({
    url: app.api + '/games/books',
    method: 'GET',
  });
};

const onGetBooks = function onGetBooks(event) {
  let data = getFormFields(this);
  event.preventDefault();
  getBooks(data)
    .done(ui.getGameSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
};

module.exports = {
  addHandlers,
};
