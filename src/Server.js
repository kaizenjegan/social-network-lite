var express = require('express');
var app = express();
// app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);
app.use('/', express.static(path.join(__dirname, 'public')))
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join('build', 'index.html'));
    });
  }