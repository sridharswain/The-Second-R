var admin = require("firebase-admin");

exports.init = function(){
    var serviceAccount = require("./the-second-r-firebase-adminsdk-vm0hl-7c15226291.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://the-second-r.firebaseio.com"
    });
    
    console.log("Connected to DB");
    return admin.database();
}