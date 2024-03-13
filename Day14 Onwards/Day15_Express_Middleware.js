// There are five midddlewares :
// Application-level middleware
// Router-level middleware
// error-handling middleware
// built-in middleware
// third-party middleware

const express = require("express");
const blog = require('./routes/blog')
app = express();
port = 3001;

// Middleware 1
const myLogger = function (req, res, next) {
    // res.send("This is middleware1")
    console.log(req.headers);
    req.sameer = "hi! I am Sameer"
    console.log(req.sameer);
    console.log(`LOGGED1 ${Date.call()} is a ${req.method}` )
    next()
}

//output 
/* hi! I am Sameer
LOGGED1 1710342812424 is a GET
LOGGED2 */

// Middleware 2
const myLogger2 = function (req, res, next) {
    console.log('LOGGED2')
    next()
}

app.use(myLogger)
app.use(myLogger2)
app.use('/blog', blog)

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(port, () => {
    console.log(`listening to port  ${port}`);

})