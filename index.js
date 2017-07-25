const mongoose = require('mongoose'); //imports mongoose
const express = require('express'); //imports express
const bodyParser = require('body-parser'); //imports body-parser
//connection to the db guestBookDB
mongoose.connect('mongodb://localhost/guestBookDB');

//create express application
const app = express();
//creates model with schema; Comment - model, comment - document.
const Comment = mongoose.model('Comment', { name: String, email: String, content: String, timestamp: Date});

app.use(bodyParser.json());

//get all comments route
app.get('/comments', (req, res) => {
  console.log('all comments');
  Comment.find((err, comments) => {
    if (err) {
      res.writeHead(500);
      res.end();
//      console.log(err);
    } else {
//      res.write(JSON.stringify(comments));
//      res.writeHead(500);
//      res.end(JSON.stringify(comments));
      res.json(comments);
    }
  });
//  res.write('response');
//  res.end();
});

//add new comments
app.post('/comments', (req, res) => {
  //create new comment
  const comment = new Comment(req.body);
  comment.save((err) => { //save comment
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(204);
      res.end();
    }
  });
});

//get all comments with name
app.get('/comments/:name', (req, res) => {

});

//listen to port 3000
app.listen(3000);

//create new comment
// const comment = new Comment({ name: 'first', email: 'test@test.com', content: 'some text'});
// comment.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     Comment.find((err, comments) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(comments);
//       }
//     });
//   }
// });
