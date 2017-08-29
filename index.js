const express = require('express');
const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const connectionString = 'postgres://jlowell@locahost/branch_tracker';
massive(connectionString).then(dbInstance => app.set('db', dbInstance));

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('/public'));


//Branch list endpoint api calls



//Single branch endpoint api calls



app.listen(app.get('port'), function() {
  console.log(`Node app is running on port ${port}...`);
});
