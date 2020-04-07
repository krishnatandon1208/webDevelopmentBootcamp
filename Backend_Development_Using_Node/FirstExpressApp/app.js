var express =  require("express");
var app = express();

//Route to homepage
app.get("/", function(req, res) {
    console.log(req);
    console.log(res);
    res.send("Hi there. Welcome Home")
    //This is the way of responding with text.
});

//Route to Dog page
app.get("/dog", function(req, res) {
    res.send("🐶 BhawBhaw` 🐶")
});


//Route to Goodbye page
app.get("/bye", function(req, res) {
    res.send("Bye-bye, cya later");
})

//Start serve and listen to port 8080
app.listen(8080, function(){
    console.log("Receiving incoming requests on PORT 8080")
});