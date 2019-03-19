const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

/* SETTING UP CONTROLLERS */
const register = require("./controllers/register");
const signin = require("./controllers/siginIn");
const profile = require("./controllers/register");
const image = require("./controllers/image");

const app = express();

/* CONNETING THE DATABASE */
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'mindy',
        password: '',
        database: 'smart-brain'
    }
});


/* MIDDLEWARE */
app.use(bodyParser.json());
app.use(cors());


/* Temp Database Variable */
const database = {
    users: [
        {
            id: '123',
            name: 'jon',
            email: 'snow.jon@gmail.com',
            password: 'ghost',
            entries: 0,
            joinded: new Date()
        },
        {
            id: '124',
            name: 'arya',
            email: 'stark.arya@gmail.com',
            password: 'noone',
            entries: 0,
            joinded: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'snow.jon@gmail.com'   
        },
        {
            id: '988',
            hash: '',
            email: 'stark.arya@gmail.com'
        }
    ]
}

/* GET --> Checking to make sure all is working */
app.get('/', (req, res) => {
    res.send(database.users);
});

/* SIGNIN --> POST */
app.post('/signin', signin.handleSignIn(db, bcrypt));

/* REGISTER ROUTE --> POST */
app.post('/register', register.handleRegister(db, bcrypt));

/* PROFILE ROUTE --> GET: USER BY ID */
app.get('/profile/:id', (req, res) => profile.handleProfileGET(req, res, db));

/* IMAGE ROUTE --> PUT: Updating the number of entries */
app.put('/image', image.handleImage(db));

/* IMAGE ROUTE --> POST */
app.post('/imageurl', (req, res) => image.handleApiCall(req, res));

app.listen(3000, () => {
    console.log("App is running on port 3000");
});
