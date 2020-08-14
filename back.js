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
/*const UserSchema = mongoose.Schema({
    username : String,
    fullName : String,
    
});

const User = mongoose.model('User' , UserSchema);

const name = "stan";
const fname = "schwibz";

const myUser = new User({username: name , fullName: fname});

myUser.save((err, savedUser) => {
    if(err){
        console.error(err);
    } else {
        console.log({message : 'Bravo, l\'utlisateur est maintenant stockée en base de données' , savedUser});
    }
})

*/

var abscenceSchema = new Schema({
            id: Number,
            duree: String,
            justifie : Boolean,
            motif : String ,
            conteste : String,
            date : String,
            time : String ,
            matiere : String ,
    
})
var delaySchema = new Schema({
    id: Number,
    duree: String,
    justifie : Boolean,
    motif : String ,
    conteste : String,
    date : String,
    time : String ,
    matiere : String ,

})
var sanctionSchema = new Schema({
    id: Number,
    duree: String,
    justifie : Boolean,
    motif : String ,
    conteste : String,
    date : String,
    time : String ,
    matiere : String ,

})

var messageSchema = new Schema({
    id : Number,
    date : String,
    subject : String,
    content : String,
    files : [
        {path : String}
    ],
    idgroup : String,
    iduser: String,
    sections : [
        {id : String}
    ],

})

/*var userSchema = new Schema({
    
    cookie:  String, // String is shorthand for {type: String}
    user: {
        data: {
            user: {
                UID: String,
                ID: String,
                username: String,
                fullName: String,
                group: Number,
                section: Number,
                },
             abscences: [abscenceSchema] ,
             delays: [delaySchema] ,
             sanctions: [sanctionSchema] ,
             messages: [messageSchema] ,
            },
        buffer : String,
        success: Boolean
        }

});
*/

var classeSchema = new Schema({
    
});

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
        if (err)
            console.log(err, 'completive.log')
        try {
            console.log("Get VieScolaire reussi");
            console.log(body);
            return JSON.parse(body).ressources;

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
        if (err)
            console.log(err, 'completive.log')
        try {
            console.log("Get Messages reussi");
            console.log(body);
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
            console.log(body);
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
                    
                    setTimeout(function () {
                        const add = cookie +"; ISLOGGED=true";
                        //getDataCompletive(add);
                        getVieScolaire(add);
                        //getMessages(add);
                        //getClasse(add,section);
                    }, 1500);
                } else
                    resolve(false)
            });

        });
    });
};