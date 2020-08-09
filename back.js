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
const db = "mongodb://root12:root12@ds153947.mlab.com:53947/completive";
const url = 'http://c3t.completive.net';
const username = 'STISSOT';
const password = 'T2213633';
console.log("const global : OK");


//app.use
app.use(router);
app.use(bodyParser.json());
console.log("app.use : OK");

//User schema
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











router.route('/user')















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
            const section = res.headers['user'][0].split(';')[0];
            console.log(section);
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
                user.section = req.body.section;
                const section = user.section;
                console.log(section);
                if (data.success) {
                    resolve({
                        cookie: `${cookie}; ISLOGGED=true`,
                        user: data
                    });
                    
                    setTimeout(function () {
                        const add = cookie +"; ISLOGGED=true";
                        //getDataCompletive(add);
                        //getVieScolaire(add);
                        //getMessages(add);
                        //getClasse(add,section);
                    }, 1500);
                } else
                    resolve(false)
            });

        });
    });
};