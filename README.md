# BACKEND-LEARNING
Command for to push things 
1. git branch -M main
2. git push -u origin main


# Package 
A reusable code that other developer codes it , then publish it on the website(npm) and we use it using it.

# Node 
A runtime enviroment where JS codes runs. It is chrome V8 engine which is pulled off the chrome and add some extra functionality in it.

# Routing

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // res.end("Hello World");
    if(req.url === "/about"){
        res.end("The about page");
    }
    if(req.url === "/profile"){
        res.end("The profile page");
    }
    if(req.url === "/"){
        res.end("The home page");
    }
})

# Express
Install --:  npm i express
Express is a toolbox which is used to create a server in backend it is doing same thing as http does but here we are not using if-else statement

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("The about page");
})

app.get("/profile", (req, res) => {
    res.send("The profile page");
})

app.listen(3000, () => {
  console.log("Server is listening on the port 3000");
});

# How to show HTML using express
For this we using view-engine for this we are using "ejs"
Install -- npm i ejs
Steps to use this :-
1. Make 'views' folder.
2. Then make 'index.ejs' file and write simple code in here fo the HTML.

# Middleware
It runs before every route get hits.
It is of three types --: Built-in , custom , third-party
Code --:
app.use((req,res,next) => {
  console.log("A new request received at " + Date.now());
  return next();
})

# Third-party middleware
install - npm i morgan
It shows Type of request route response-code response-time (GET /about 304 5.311 ms - -)

# How to make middleware for particular route
Middleware takes 3 inputs (res,req,next) => {}
app.get(
  "/",
  (req, res, next) => {
    console.log("A new request received at " + Date.now());
    return next();
  },
  (req, res) => {
    res.render("index");
  }
);

# Form Control
It is use to bring data from the frontend and use it in the server.
Code --: 
form.ejs
    <form action="/get-form-data" method="post">
        <input type="text" placeholder="Enter your name" name="username">
        <input type="email" placeholder="Enter your email" name="email">
        <input type="password" placeholder="Enter your password" name="password">
        <button type="submit">Submit</button>
    </form>
express.js
const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
  "/",
  (req, res, next) => {
    console.log("A new request received at " + Date.now());
    return next();
  },
  (req, res) => {
    res.render("form");
  }
);
app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});
app.listen(3000, () => {
  console.log("Server is listening on the port 3000");
});


# GET VS POST
GET - It is used to send data from server to frontend.(data is in req.query)

POST - It is used to send data from frontend to server.
(data is in req.body)
Use this two middleware to get data in console --> 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


# How to use CSS and link it to the frontend , same steps for JS
1. Make a folder named public.
2. make index.css file and write CSS here.
These are static file means these are the file which is used by the user with the help of the server on frontend without any authetication.
For use of static files we use this middleware --:  app.use(express.static("public"));


# MongoDB