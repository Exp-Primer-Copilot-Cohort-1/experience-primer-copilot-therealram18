// Create web server 
// Create a route to handle comments
// Create a route to handle comments form submission
// Create a route to handle comments form submission with AJAX

// Load modules
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set up public directory
app.use(express.static('public'));

// Set up view engine
app.set('view engine', 'ejs');

// Set up route to handle comments
app.get('/comments', function(req, res) {
  res.render('comments');
});

// Set up route to handle comments form submission
app.post('/comments', function(req, res) {
  res.send('Comment submitted: ' + req.body.comment);
});

// Set up route to handle comments form submission with AJAX
app.post('/comments-json', function(req, res) {
  res.send({ comment: req.body.comment });
});

app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});