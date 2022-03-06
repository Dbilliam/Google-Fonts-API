const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.json('Welcome to Google Fonts is a library of 1,364 free licensed font families and APIs for convenient use via CSS and Android. The library also has delightful and beautifully crafted icons for common actions and items. Download them for use in your digital products for Android, iOS, and web.')
})

const trending = require("./data/trending.json")
server.get('/trending',(req,res)=>{ res.json(trending)
})
const popularity = require("./data/popularity.json")
server.get('/popularity',(req,res)=>{ res.json(popularity)
})

const style = require("./data/style.json")
server.get('/style',(req,res)=>{ res.json(style)
})

const alphabetically = require("./data/alpha.json")
server.get('/alphabetically',(req,res)=>{ res.json(alphabetically)
})

const recent = require("./data/date.json")
server.get('/recent',(req,res)=>{ res.json(recent)
})


server.use(middlewares);
server.use(router);
server.listen(port);