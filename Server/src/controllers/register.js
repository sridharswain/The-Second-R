module.exports = function(data,db){
    console.log(data);
    const userRef = db.ref('users/');
    userRef.child(data.user).once('value',function(snapshot){
        console.log(snapshot.exists());
        console.log(snapshot.val());
    });
}