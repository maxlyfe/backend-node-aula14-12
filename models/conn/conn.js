const mongoose = require('mongoose');
// mongodb://${url}:${port}/${banco}
function Conn(url, user, pass, banco){
    mongoose.connect(`${url}/${banco}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("MongoDB Connected");
    }).catch((err) =>{
        console.error(err);
    });
}

module.exports = Conn;