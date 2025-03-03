const express = require("express");
const path = require("path");
const app = express();


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "public")));
// GETTERS
// zoe
app.get("/dashboard", function (req, res) {
  res.sendFile(path.join(__dirname, "public/views/zoe.index.html"));
});
app.get("/teachers", function (req, res) {
  res.sendFile(path.join(__dirname, "public/views/marilo.teachers.html"));
});
app.get("/students", function (req, res) {
  res.sendFile(path.join(__dirname, "public/views/marilo.students.html"));
});
//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});