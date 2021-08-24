// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");

app.get("/", (request, response) => {
  response.send(`
  <head>
    <title>Home</title></head>
    <body>
        <h1>My portfolio</h1>
    </body>
  `);
});



app.get("/contact", (request, response) => {
  response.send(`
  <html>
  <head>
    <title>Contact</title></head>
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
        <p><a href="https://www.facebook.com">face book page</a></p>
        <label for="email">Enter your email:</label>
        <input type="email" id="email" name="email">
    </body>
  </html>
  `);
});

app.get('/test-report', function(requset, response) {
  response.sendFile(path.join(__dirname + '/test-report.html'));
});

app.get("/education", (request, response) => {
  response.send(`
  <html>
  <head>
    <title>Education</title></head>
    <body>
        <h1>education</h1>
        <ul>
          <li>B.tech</li>
          <li>diploma <li>
        </ul>
        <p>This is a education page</p>
    </body>
  `);
});
app.get("/skills", (request, response) => {
  response.send(`
  <html>
  <head>
    <title>Skills</title></head>
    <body>
        <h1>skills</h1>
        <ul>
          <li>HTML</li>
          <li> CSS <li>
          <li>JAVASCRIPT<li>
        </ul>
    </body>
  `);
});
app.get("/projects", (request, response) => {
  response.send(`
  <html>
  <head>
    <title>Projects</title></head>
    <body>
        <h1>projects</h1>
        <p>title, codeUrl, previewUrl and img</p>
    </body>
  </html>
  `);
});




const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
