console.log("Petit test du Node JS");


//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
var express = require('express'); 
//La variable request nous permettra d'utiliser les fonctionnalités du module Request.  
var request = require('request');

// La variable mongoose nous permettra d'utiliser les fonctionnalités du module mongoose.
var mongoose = require('mongoose'); 
// Ces options sont recommandées par mLab pour une connexion à la base

var bodyParser = require("body-parser");
// Nous créons un objet de type Express. 
var app = express(); 

/*var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };*/
 
//URL de notre base
var BDD = 'mongodb://completive:completive1@ds153947.mlab.com:53947/completive';

 
// Nous connectons l'API à notre base de données
//mongoose.connect(urlmongo, options);
 
mongoose.connect(BDD)
.then(()=> console.log("connexion a la BDD"))
.catch(error => console.log(error));

app.use(bodyParser.json());




// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 
 

 
//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
var myRouter = express.Router(); 


//Sert a Parser les données reçu
/* 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/
 
// Je vous rappelle notre route (/piscines).  
myRouter.route('/user')

// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET
/*.get(function(req,res){ 
      //res.json({message : "Liste toutes les utilisateurs de Lille Métropole", methode : req.method});
      res.json({
        message : "Liste les piscines de Lille Métropole avec paramètres :",
        nom : req.query.nom,
        prenom : req.query.prenom,
        classe : req.query.classe,
        methode : req.method });
})*/


.get(function(req,res){ 
    // Utilisation de notre schéma Piscine pour interrogation de la base
        User.find(function(err, users){
            if (err){
                res.send(err); 
            }
            res.json(users); 
            
        }); 
})


/*/POST
.post(function(req,res){
      res.json({message : "Ajoute un nouvelle utilisateur à la liste", methode : req.method});
})*/


.post(function(req,res){
    // Nous utilisons le schéma User
    var user = new User();
    // Nous récupérons les données reçues pour les ajouter à l'objet User
    user.nom = req.body.nom;
    user.prenom = req.body.prenom;
    user.classe = req.body.classe;
    //Nous stockons l'objet en base
      user.save(function(err){
        if(err){
          res.send(err);
        }
        res.send({message : 'Bravo, l\'utlisateur est maintenant stockée en base de données'});
      })
})




//PUT
.put(function(req,res){ 
      res.json({message : "Mise à jour des informations d'un utilisateur dans la liste", methode : req.method});
})
//DELETE
.delete(function(req,res){ 
res.json({message : "Suppression d'un utilisateur dans la liste", methode : req.method});  
}); 
 
// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);  
 
// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port); 
});

myRouter.route('/')
// all permet de prendre en charge toutes les méthodes. 
.all(function(req,res){ 
      res.json({message : "Bienvenue", methode : req.method});
});


// J'implémente les méthodes GET, PUT, UPDATE et DELETE pour cibler selon l'id
myRouter.route('/user/:user_id')
.get(function(req,res){ 
	  res.json({message : "Vous souhaitez accéder aux informations de l'utilisateurs n°" + req.params.user_id});
})
.put(function(req,res){ 
	  res.json({message : "Vous souhaitez modifier les informations de l'utilisateurs n°" + req.params.user_id});
})
.delete(function(req,res){ 
	  res.json({message : "Vous souhaitez supprimer l'utilisateurs n°" + req.params.user_id});
});



































































const getDataCompletive = (cook) =>
{
    return new Promise(async(resolve, reject) => {
        //attendre le poste de la page d'acceuil de l'application web
        await request.post(`${url}/index.php`, {
            form: {
                'sys[task]': 'viescolaire',
                'sys[name]': 'viescolaire',
                'sys[type]': 'widget',
                'sys[lang]': 'fr-FR',
            },
            headers: {
                Cookie: cook,
            },
        },
        (error, response) => {
            if (error) resolve(false);
            const data = JSON.parse(response.body);
            if (data.success) {
                data.save(function(err){
                    if(err){
                      res.send(err);
                    }
                    res.send({message : 'la data est maintenant stockée en base de données'})
                  })
            } else
                res.send(err);
        });
    });
};







const url = 'http://c3t.completive.net';
myRouter.route('/completive')
.get(async function (req,res){ 
    const tryLogin = await connectLogin ();
    res.json(tryLogin);
})
myRouter.route('/completive/viescolaire')
.get(async function (req,res){
    const tryVieScolaire = await getVieScolaire ();
    res.json(tryVieScolaire);
})
myRouter.route('/completive/messages')
.get(async function (req,res){
    const tryMessages = await getMessages ();
    res.json(tryMessages);
})
myRouter.route('/completive/classe')
.get(async function (req,res){
    const tryClasse = await getClasse ();
    res.json(tryClasse);
})
myRouter.route('/completive/ressource')
.get(async function (req,res){
    const tryRessource = await getRessource ();
    res.json(tryRessource);
})






//assigné les logins a de variable
const connectLogin = (username = 'STISSOT', password = 'T2213633') => {
    return new Promise(async(resolve, reject) => {
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
        }, async(err, res) => {
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
            }, async(error, response) => {
                if (error) resolve(false);
                const data = JSON.parse(response.body);
                if (data.success) {
                    resolve({ cookie: `${cookie}; ISLOGGED=true`, user: data });
                    let self = this;
                    setTimeout(function() {
                        //self.getDataCompletive(`${cookie}; ISLOGGED=true`)
                    }, 1500);
                } else
                    resolve(false)
            });
        });
    });
};


//assigné les logins a de variable
const getVieScolaire = (username = 'STISSOT', password = 'T2213633') => {
    return new Promise(async(resolve, reject) => {
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
        }, async(err, res) => {
            if (err) resolve(false);
            const cookie = res.headers['set-cookie'][0].split(';')[0];
            await request.post(url, {
                form: {
                    'sys[task]': 'viescolaire',
                    'sys[name]': 'viescolaire',
                    'sys[type]': 'widget',
                    'sys[lang]': 'fr-FR',
                },
                headers: {
                    Cookie: `${cookie}; ISLOGGED=true`,
                },
            }, async(error, response) => {
                if (error) resolve(false);
                const data = JSON.parse(response.body);
                if (data.success) {
                    resolve({ cookie: `${cookie}; ISLOGGED=true`, user: data });
                    let self = this;
                    setTimeout(function() {
                       // self.getDataCompletive(`${cookie}; ISLOGGED=true`)
                    }, 1500);
                } else
                    resolve(false)
            });
        });
    });
};




//assigné les logins a de variable
const getMessages = (username = 'STISSOT', password = 'T2213633') => {
    return new Promise(async(resolve, reject) => {
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
        }, async(err, res) => {
            if (err) resolve(false);
            const cookie = res.headers['set-cookie'][0].split(';')[0];
            await request.post(url, {
                form: {
                    'sys[task]': 'messages',
                    'sys[name]': 'messages',
                    'sys[type]': 'widget',
                    'sys[lang]': 'fr-FR',
                },
                headers: {
                    Cookie: `${cookie}; ISLOGGED=true`,
                },
            }, async(error, response) => {
                if (error) resolve(false);
                const data = JSON.parse(response.body);
                if (data.success) {
                    resolve({ cookie: `${cookie}; ISLOGGED=true`, user: data });
                    let self = this;
                    setTimeout(function() {
                       // self.getDataCompletive(`${cookie}; ISLOGGED=true`)
                    }, 1500);
                } else
                    resolve(false)
            });
        });
    });
};




//assigné les logins a de variable
const getClasse = (username = 'STISSOT', password = 'T2213633') => {
    return new Promise(async(resolve, reject) => {
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
        }, async(err, res) => {
            if (err) resolve(false);
            const cookie = res.headers['set-cookie'][0].split(';')[0];
            const section = '2200893';
            await request.post(url, {
                form: {
                    'data[idsection]': `${section}`,
                    'sys[task]': 'listeleves',
                    'sys[name]': 'trombinoscope',
                    'sys[type]': 'widget',
                    'sys[lang]': 'fr-FR',
                },
                headers: {
                    Cookie: `${cookie}; ISLOGGED=true`,
                },
            }, async(error, response) => {
                if (error) resolve(false);
                const data = JSON.parse(response.body);
                if (data.success) {
                    resolve({ cookie: `${cookie}; ISLOGGED=true`, user: data });
                    let self = this;
                    setTimeout(function() {
                       self.getDataCompletive(`${cookie}; ISLOGGED=true`)
                    }, 1500);
                } else
                    resolve(false)
            });
        });
    });
};




//assigné les logins a de variable
const getRessource = (username = 'STISSOT', password = 'T2213633') => {
    return new Promise(async(resolve, reject) => {
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
        }, async(err, res) => {
            if (err) resolve(false);
            const cookie = res.headers['set-cookie'][0].split(';')[0];
            console.log(`${cookie}`);
            await request.post(`http://c3t.completive.net/medias/js/factory/widgets/cxscheduler/kernel/get_xml.php?connecter=messagin`, {
                form: {
                    'data[calltype]': `iressources`,
                    'sys[name]': 'csressources',
                    'sys[type]': 'widget',
                    'sys[task]': 'default',
                    'sys[lang]': 'fr-FR',
                },
                
                headers: {
                    Cookie: `${cookie}; ISLOGGED=true`,
                },
            }, async(error, response) => {
                console.log(error);
                if (error) resolve(false);
                const data = JSON.parse(response.body);
                if (data.success) {
                    resolve({ cookie: `${cookie}; ISLOGGED=true`, user: data });
                    let self = this;
                    setTimeout(function() {
                       self.getDataCompletive(`${cookie}; ISLOGGED=true`)
                    }, 1500);
                } else
                    resolve(false)
            });
        });
    });
};


const getDataCompletive2 = (cookie = 'PHPSESSID=cc5a1517b1f46b23ec74c4db7ea235a3; ISLOGGED=true') => {
    // var currentTime = new Date().getTime();
    // while (currentTime + 60000 * 5 >= new Date().getTime()) {}
    // const Completive = mongoose.model('Completive');
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
    }, async(err, res, body) => {
    if (err)
    logger(err, 'completive.log')
    try {
        console.log(body);
    return JSON.parse(body).ressources;

    } catch (e) {
    logger(e, 'completive.log');
    }
    })
   }


console.log(getDataCompletive2());