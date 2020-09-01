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

/*
const myUser = ({UID:UID , ID:ID , username: username , fullName: fullName , group:group , section:section});
const myAbscences = ({id:id , duree:duree , justifie: justifi , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
const myAbscences2 = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
const myDelays = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
const mySanctions = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
const myMessages = ({id:id , duree:duree , justifie: justifie , motif: motif , conteste:conteste , date:date , time:time , matiere:matiere});
const myStudent = new User ({ UserSchema : myUser , AbscenceSchema:[myAbscences,myAbscences2] , DelaySchema:myDelays , SanctionSchema:mySanctions , MessageSchema:myMessages });
*/


/*myStudent.save((err, savedUser) => {
    if(err){
        console.error(err)
    } else {
        console.log({message : 'Bravo, l\'utlisateur est maintenant stockée en base de données' , savedUser});
    }
})*/




console.log("user schema : OK");



router.route('/newuser')

.get(function(req,res){ 
    // Utilisation de notre schéma Piscine pour interrogation de la base
        User.find(function(err, users){
            if (err){
                res.send(err); 
            }
            res.json(users); 
            
        }); 
})

.post(function(req,res){
    // Nous utilisons le schéma User
    
    
    // Nous récupérons les données reçues pour les ajouter à l'objet User
    user.mm = req.body.mm;
    user.mi = req.body.mi;
    user.username = req.body.username;
    user.fullName = req.body.fullName;
    /*user.group = req.body.group;
    user.section = req.body.section;
    user.abscences = req.body.abscences;
    user.delays = req.body.delays;
    user.sanctions = req.body.sanctions;
    user.messages = req.body.messages;*/
    //Nous stockons l'objet en base


      user.save(function(err){
        if(err){
          res.send(err);
        }
        res.send({message : 'Bravo, l\'utlisateur est maintenant stockée en base de données'});
      })
})

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


//fonction
const getDataCompletive = (cookie) => {
    // var currentTime = new Date().getTime();
    // while (currentTime + 60000 * 5 >= new Date().getTime()) {}
    // const Completive = mongoose.model('Completive');
    ////console.log(cookie);
    request.post(`${url}/medias/js/factory/widgets/cxscheduler/kernel/get_xml.php?connecter=messagin`, {
        form: {
            'data[calltype]': 'iressources',
            'sys[name]': 'csressources',
            'sys[task]': 'default',
            'sys[type]': 'widget',
            'sys[lang]': 'fr-FR'
        },
        headers: {
            Cookie: `${cookie}`,
        }
    }, async (err, res, body) => {
        if (err)
            console.log(err, 'completive.log')
        try {
            console.log("Get ressource reussi");
            console.log(body);
            return JSON.parse(body).ressources;

        } catch (e) {
            console.log(e, 'completive.log');
        }
    })
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
            function asyncGetSomemyAbscences (data) {
                return (new Promise ((resolve, reject) => {
                    console.log ("Getting some myAbscences...");
                    window.setTimeout (() => {
                        const abs = data.data[0].items;
                            for (i in abs) {
                                var x 
                                x = abs[i];
                                //console.log("mon abcences n° "+ i); 
                                //console.log(x);
                                var a = [];
                                a.push(x);
                                p == "myAbscences"+i
                                //console.log(a);
                                for (i in a){
                                    var p
                                    var tab = [];
                                    tab.push(p,a[i])
                                    //console.log (tab[1].id);
                                    var myAbscences = ({id:tab[1].id, duree:tab[1].duree , justifie: tab[1].justifie , motif: tab[1].motif , conteste:tab[1].conteste , date:tab[1].date , time:tab[1].time , matiere:tab[1].matiere});
                                    console.log("myAbscences :")
                                    console.log(myAbscences);
                                }
                            };
                            resolve (myAbscences);
                    }, 2000);
                }));
            }


            function asyncGetSomemyDelays (data) {
                return (new Promise ((resolve, reject) => {
                    console.log ("Getting some myDelays...");
                    window.setTimeout (() => {
                            const del = data.data[1].items;
                            for (i in del) {
                                var x 
                                x = del[i];
                                //console.log("mon abcences n° "+ i);
                                //console.log(x);
                                var a = [];
                                a.push(x);
                                p = "myDelays"+i
                                //console.log(a);
                                for (i in a){
                                    var p
                                    var tab = [];
                                    tab.push(p,a[i])
                                    //console.log (tab[1].id);
                                    var myDelays = ({id:tab[1].id, duree:tab[1].duree , justifie: tab[1].justifie , motif: tab[1].motif , conteste:tab[1].conteste , date:tab[1].date , time:tab[1].time , matiere:tab[1].matiere});
                                    console.log("myDelays :")
                                    console.log(myDelays);
                                }
                            };
                            resolve (myDelays);
                    }, 2000);
                }));
            }


            function asyncGetSomemySanctions(data) {
                return (new Promise ((resolve, reject) => {
                    console.log ("Getting some myAbscences...");
                    window.setTimeout (() => {
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
                const [ valueA, valueB, valueC ] = await Promise.all([ functionA(), functionB(), functionC() ]);
                asyncGetSomemyAbscences(valueA);
                asyncGetSomemySanctions(valueB);
                asyncGetSomemyDelays(valueC);
              }
            
            
            function syncVieScolaire (mySanctions,myDelays,myAbscences) {
                console.log (`And the mySanctions is: ${mySanctions}`);
                console.log (`And the myDelays is: ${myDelays}`);
                console.log (`And the myAbscences is: ${myAbscences}`);
            }

            async function all (data) {
                var myAbscences = await asyncGetSomemyAbscences (data);
                var mySanctions = await asyncGetSomemySanctions (data);
                var myDelays = await asyncGetSomemyDelays (data);
                syncVieScolaire(mySanctions,myDelays,myAbscences);
            }

            console.log ("Start");
            console.log(data);
            all (data).then ((result) => console.log ("API used"));
            console.log ("End");

            //console.log(pas[1]);
            //return JSON.parse(body).ressources , myAbscences , myDelays ,mySanctions;

        } catch (e) {
            console.log(e, 'completive.log');
        }
    })
}

const getMessages = (cookie) => {
    // var currentTime = new Date().getTime();
    // while (currentTime + 60000 * 5 >= new Date().getTime()) {}
    // const Completive = mongoose.model('Completive');
    ////console.log(cookie);
    request.post(`${url}/index.php`, {
        form: {
            'sys[task]': 'messages',
            'sys[name]': 'messages',
            'sys[type]': 'widget',
            'sys[lang]': 'fr-FR',
        },
        headers: {
            Cookie: `${cookie}`,
        }
    }, async (err, res, body) => {
        const data = JSON.parse(res.body);
        const pas = data.data;
        console.log("pas est :"+ pas);
        if (err)
            console.log(err, 'completive.log')
        try {
            console.log("Get Messages reussi");
            //console.log(body);

            for (i in pas) {
                var x 
                x = pas[i];
                //console.log("mon abcences n° "+ i);
                //console.log(x);
                var a = [];
                a.push(x);
                p = "myMessages"+i
                //console.log(a);
                for (i in a){
                    var p
                    var tab = [];
                    tab.push(p,a[i])
                    //console.log (tab[1].id);
                    myMessages = ({id:tab[1].id, date:tab[1].date , subject: tab[1].subject , content: tab[1].content , files:tab[1].files , idgroup:tab[1].idgroup , iduser:tab[1].iduser , sections:tab[1].sections, datefr:tab[1].datefr});
                     console.log(myMessages);
                }
              }
        

            return JSON.parse(body).ressources;

        } catch (e) {
            console.log(e, 'completive.log');
        }
    }) 
}


const getClasse = (cookie , section) => {
    // var currentTime = new Date().getTime();
    // while (currentTime + 60000 * 5 >= new Date().getTime()) {}
    // const Completive = mongoose.model('Completive');
    //console.log(cookie);
    request.post(`${url}/index.php`, {
        form: {
            'data[idsection]': `${section}`,
            'sys[task]': 'listeleves',
            'sys[name]': 'trombinoscope',
            'sys[type]': 'widget',
            'sys[lang]': 'fr-FR',
        },
        headers: {
            Cookie: `${cookie}`,
        }
    }, async (err, res, body) => {
        if (err)
            console.log(err, 'completive.log')
        try {
            console.log("Get Messages reussi");
            
            

            const pas = data.data[0].items;
            for (i in pas) {
                var x 
                x = pas[i];
                //console.log("mon abcences n° "+ i);
                //console.log(x);
                var a = [];
                a.push(x);
                p = "myMessages"+i
                //console.log(a);
                for (i in a){
                    var p
                    var tab = [];
                    tab.push(p,a[i])
                    //console.log (tab[1].id);
                    myMessages = ({id:tab[1].id, duree:tab[1].duree , justifie: tab[1].justifie , motif: tab[1].motif , conteste:tab[1].conteste , date:tab[1].date , time:tab[1].time , matiere:tab[1].matiere});
                    console.log(myMessages);
                }
              }



            return JSON.parse(body).ressources;

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