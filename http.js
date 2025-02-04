var express = require("express");
var app = express();


var PORT = process.env.PORT || 3000;


app.use(express.static(__dirname));

var server = app.listen(PORT, function () {
    console.log(`Server is running at http://localhost:${PORT}`);
});


server.on("error", function (err) {
    if (err.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use. Try a different port.`);
    } else {
        console.error("Server Error:", err);
    }
});
