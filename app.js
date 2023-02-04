const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact-me", (req, res) => {
    res.render("contact-me");
});


app.use((req, res, next) => {
    res.status(404).send(res.render("404"));
});

app.listen(port, function () {
    console.log(`App listening on port ${port}!`)
});
