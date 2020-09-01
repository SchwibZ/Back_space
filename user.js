console.log("Petit test du Node JS");

// const require
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const request = require('request');
//const logger = require('logger');
console.log("const require : OK");

// const global
const app = express();
const Schema = mongoose.Schema;
const router = express.Router();
const hostname = 'localhost';
const port = 6000;





const db = "mongodb+srv://stanley:stanley@project-opaox.mongodb.net/completive?retryWrites=true&w=majority";
console.log("const global : OK");


//app.use
app.use(router);
app.use(bodyParser.json());
console.log("app.use : OK");



//Connexion base donné
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connexion base donné : OK"))
    .catch((err) => console.log(err));

//start server
app.listen(port, hostname, () => {
    console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port + " : OK "); 
});





//User schema



const UserSchema = new Schema({
    UID: String,
    ID: String,
    username: String,
    fullName: String,
    group: Number,
    section: Number,
})

const AbscenceSchema = new Schema({
        id: Number,
        duree: String,
        justifie: Boolean,
        motif: String,
        conteste: String,
        date: String,
        time: String,
        matiere: String,
})


const DelaySchema = new Schema({
    id: Number,
    duree: String,
    justifie: Boolean,
    motif: String,
    conteste: String,
    date: String,
    time: String,
    matiere: String,
})


const SanctionSchema = new Schema({
    id: Number,
    duree: String,
    justifie: Boolean,
    motif: String,
    conteste: String,
    date: String,
    time: String,
    matiere: String,
})


const MessageSchema = new Schema({
    id: Number,
    duree: String,
    justifie: Boolean,
    motif: String,
    conteste: String,
    date: String,
    time: String,
    matiere: String,
})



/*const StudentSchema = mongoose.Schema({
    
        UserSchema ,
        abscences: [AbscenceSchema] ,
        delays: [DelaySchema] ,
        sanctions: [SanctionSchema] ,
        messages: [MessageSchema] ,

});*/

const StudentSchema = mongoose.Schema({
    UserSchema,
    AbscenceSchema :[AbscenceSchema],
    DelaySchema :[DelaySchema],
    SanctionSchema :[SanctionSchema],
    MessageSchema :[MessageSchema]  ,
 
});





const User = mongoose.model('User' , StudentSchema);


const UID = "jai_mon_UID";
const ID = "jai_mon_ID";
const username = "jai_mon_username";
const fullName = "jai_mon_fullName";
const group = 000001;
const section = 000001;

const id = 12;
const duree = "1H";
const justifie = true;
const justifi = false;
const motif = "nia manmanw";
const conteste = "pani";
const date = "du 11 au 12";
const time = "12H30";
const matiere = "pa sav";



const myUser = ({UID:UID , ID:ID , username: username , fullName: fullName , group:group , section:section});
const myAbscences = ({id:id , duree:duree , justifie: justifi , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
const myAbscences2 = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
const myDelays = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
const mySanctions = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
const myMessages = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
const myStudent = new User ({ UserSchema : myUser , AbscenceSchema:[myAbscences,myAbscences2] , DelaySchema:myDelays , SanctionSchema:mySanctions , MessageSchema:myMessages });
//const end = new User({myStudent:myStudent});

/*console.log(myUser);
console.log(myAbscences);
console.log(myDelays);
console.log(mySanctions);
console.log(myMessages);*/

console.log(myStudent);






/*myStudent.save((err, savedUser) => {
    if(err){
        console.error(err)
    } else {
        console.log({message : 'Bravo, l\'utlisateur est maintenant stockée en base de données' , savedUser});
    }
})*/

