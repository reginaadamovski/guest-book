const mongoose = require('mongoose'); //imports mongoose
const express = require('express'); //imports express
//connection to the db guestBookDB
mongoose.connect('mongodb://localhost/guestBookDB');

//creates model with schema; Comment - model, comment - document.
const Comment = mongoose.model('Comment', { name: String, email: String, content: String, timestamp: Date});

//create new comment
const comment = new Comment({ name: 'first', email: 'test@test.com', content: 'some text'});
comment.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    Comment.find((err, comments) => {
      if (err) {
        console.log(err);
      } else {
        console.log(comments);
      }
    });
  }
});
