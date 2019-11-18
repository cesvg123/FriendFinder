const express = require ('express');
const path = request('path');
let app = express();
const port = process.env.port || 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);
app.listen (port);