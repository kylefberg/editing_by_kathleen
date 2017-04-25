var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); // Add this after the bodyParser middlewares



req.checkBody('name', 'Invalid name').isAlpha();
req.checkBody('email', 'Invalid email').notEmpty().isInt();
req.checkBody('comment', 'Invalid comment').notEmpty().isInt();

req.sanitizeBody('name').escape();

var errors = req.validationErrors();
if (errors) {
    // Render the form using error information
}
else {
   // There are no errors so perform action with valid data (e.g. save record).
}

{param: 'name', msg: 'Invalid name', value: '<received input>'}
