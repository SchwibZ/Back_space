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
const port = 5000;
const db = "mongodb+srv://stanley:stanley@project-opaox.mongodb.net/completive?retryWrites=true&w=majority";
const url = 'http://c3t.completive.net';
const username = 'STISSOT';
const password = 'T2213633';
console.log("const global : OK");


//app.use
app.use(router);
app.use(bodyParser.json());
console.log("app.use : OK");


//User schema
const UserSchema = new Schema({
    UID: String,
    ID: String,
    username: String,
    fullName: String,
    group: Number,
    section: Number,
});

const AbscenceSchema = new Schema({
        id: Number,
        duree: String,
        justifie: Boolean,
        motif: String,
        conteste: String,
        date: String,
        time: String,
        matiere: String,
});

const DelaySchema = new Schema({
    id: Number,
    duree: String,
    justifie: Boolean,
    motif: String,
    conteste: String,
    date: String,
    time: String,
    matiere: String,
});

const SanctionSchema = new Schema({
    id: Number,
    duree: String,
    justifie: Boolean,
    motif: String,
    conteste: String,
    date: String,
    time: String,
    matiere: String,
});


const MessageSchema = new Schema({
    id: Number,
    date: String,
    subject: String,
    content: String,
    files: [String],
    idgroup: String,
    iduser: String,
    sections: String,
    datefr: String,

    
});

const StudentSchema = mongoose.Schema({
    UserSchema,
    AbscenceSchema :[AbscenceSchema],
    DelaySchema :[DelaySchema],
    SanctionSchema :[SanctionSchema],
    MessageSchema :[MessageSchema]  ,
 
});

const User = mongoose.model('User' , StudentSchema);



console.log("user schema : OK");

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



async function getNombreAsynchrone1() {/* traitement asynchrone (e.g. appel d’une API HTTP) */}
async function getNombreAsynchrone2() {/* traitement asynchrone (e.g. appel d’une API HTTP) */}


async function getAdditionAsynchrone() {
    const delays = await asyncGetSomemyDelays();
    const nombre2 = await getNombreAsynchrone2();
    return delays + nombre2;
   }
   
   

async function asyncGetSomemyDelays (data) {
    console.log ("Getting some myDelays...");
    const del = data.data[1].items;
    var all = [];
        for (i in del) {
            var x 
            var p
            var a = [];
            x = del[i];
            a.push(x);
            p = "myDelays"+i;
            for (i in a){
                var tab = [];
                tab.push(p,a[i])
                //console.log (tab[1].id);
                var myDelays = ({id:tab[1].id, duree:tab[1].duree , justifie: tab[1].justifie , motif: tab[1].motif , conteste:tab[1].conteste , date:tab[1].date , time:tab[1].time , matiere:tab[1].matiere});
                //console.log("myAbscences :")
                //console.log(myAbscences);
                all.push(myDelays)
            }
            
        };
    console.log(all);
    return all;
}


















const getVieScolaire = (cookie) => {
    // var currentTime = new Date().getTime();
    // while (currentTime + 60000 * 5 >= new Date().getTime()) {}
    // const Completive = mongoose.model('Completive');
    ////console.log(cookie);
    request.post(`${url}/index.php`, {
        form: {
            'sys[task]': 'viescolaire',
            'sys[name]': 'viescolaire',
            'sys[type]': 'widget',
            'sys[lang]': 'fr-FR',
        },
        headers: {
            Cookie: `${cookie}`,
        }
    }, async (err, res, body) => {
        const data = JSON.parse(res.body);
        if (err)
            console.log(err, 'completive.log')
        try {
            
            console.log("Get VieScolaire reussi");
            //console.log(body);
            //const myAbscences = ({id:id , duree:duree , justifie: justifi , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
            //const myAbscences2 = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
            //const myDelays = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
            //const mySanctions = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
            //console.log(data);
            


            


            function asyncGetSomemySanctions(data) {
                return (new Promise ((resolve, reject) => {
                    console.log ("Getting some mySanctions...");
                    setTimeout (() => {
                            const san = data.data[2].items;
                            for (i in san) {
                                var x 
                                x = san[i];
                                //console.log("mon abcences n° "+ i);
                                //console.log(x);
                                var a = [];
                                a.push(x);
                                p = "mySanctions"+i
                                //console.log(a);
                                for (i in a){
                                    var p
                                    var tab = [];
                                    tab.push(p,a[i])
                                    //console.log (tab[1].id);
                                    var mySanctions = ({id:tab[1].id, duree:tab[1].duree , justifie: tab[1].justifie , motif: tab[1].motif , conteste:tab[1].conteste , date:tab[1].date , time:tab[1].time , matiere:tab[1].matiere});
                                    console.log("mySanctions :")
                                    console.log(mySanctions);
                                }
                            };
                            resolve (mySanctions);
                    }, 2000);
                }));
            }



            async function executeParallelAsyncTasks (data) {
                return await Promise.all([ asyncGetSomemyAbscences(data), asyncGetSomemySanctions(data), asyncGetSomemyDelays(data)]).then((values) => {
                    //console.log(values);
                });
                
            }

            const result = await executeParallelAsyncTasks(data);
            //console.log("resultat : ",  result);

            //console.log(pas[1]);
            
            //console.log(result);
            return (result);


        } catch (e) {
            console.log(e, 'completive.log');
        }
    })
}































































router.route('/completive')
    .get(async function (req, res) {
        const tryLogin = await connectLogin();
        res.json(tryLogin);
    })

const connectLogin = (_username, _password) => {
    
    return new Promise(async (resolve, reject) => {
        //attendre le poste de la page d'acceuil de l'application web
        await request.post(`${url}/index.php`, {
            form: {
                'data[username]': username,
                'data[password]': password,
                'sys[task]': 'sendLogin',
                'sys[name]': 'Factory',
                'sys[type]': 'system',
                'sys[lang]': 'fr-FR',
            },
        }, async (err, res) => {
            if (err) resolve(false);
            console.log("connexion completive : OK");
            const cookie = res.headers['set-cookie'][0].split(';')[0];
            await request.post(url, {
                form: {
                    'sys[task]': 'JSONUser',
                    'sys[name]': 'Factory',
                    'sys[type]': 'system',
                    'sys[lang]': 'fr-FR',
                },
                headers: {
                    Cookie: `${cookie}; ISLOGGED=true`,
                },
            },
            async (error, response) => {
                if (error) resolve(false);
                const data = JSON.parse(response.body);
                if (data.success) {
                    resolve({
                        cookie: `${cookie}; ISLOGGED=true`,
                        user: data
                    });
                    //console.log(data);
                    const myUser = ({UID:data.data.user.UID , ID:data.data.user.ID , username:data.data.user.username , fullName: data.data.user.fullName , group:data.data.user.group , section:data.data.user.section});
                    //console.log(myUser);
                    setTimeout(async function () {
                        const add = cookie +"; ISLOGGED=true";
                        getDataCompletive(add).then
                        //getVieScolaire(add);
                        getMessages(add);
                        //getClasse(add,data.data.user.section);
                    },
                    
                    1500);
                    
                    /*const myStudent = new User ({ UserSchema : myUser , AbscenceSchema:[myAbscences] , DelaySchema:myDelays , SanctionSchema:mySanctions , MessageSchema:myMessages });
                        myStudent.save((err, savedUser) => {
                            if(err){
                                console.error(err)
                            } else {
                                console.log({message : 'Bravo, l\'utlisateur est maintenant stockée en base de données' , savedUser});
                            }
                        })*/

                } else
                    resolve(false)
            });

        });
    });
};