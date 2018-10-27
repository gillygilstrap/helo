const express =  require('express');
const bodyParser =  require('body-parser');
const massive = require('massive');
const controller = require('./controller')
require('dotenv').config();



const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('database connect is bueno')
}).catch(error => {
    console.error("A problem occured in connecting to the database", error);
    res.status(500).send("An unexpected error happened on the server");
})

app.post('/user', controller.newUser)
app.post('/user/login', controller.userLogin)
app.get('/post', controller.getPosts)




const port = 4000;
app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})



