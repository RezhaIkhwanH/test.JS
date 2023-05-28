const MyModule = require('./my modules/myModule');
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express()
const port = 3000;
const session = require('express-session');
const cookieparser = require('cookie-parser');
const flash = require('connect-flash');
// mysql
const mysql = require('mysql2');

// create the connection to database
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dataContac'
});

connect.connect((err) => {
    if (err) throw err;
    console.log('ok conek db');
})

// connect.query(
//     `SELECT * FROM contac`,
//     function (err, results, fields) {
//         if (err) {
//             throw err
//         }
//         console.log(results); // results contains rows returned by server
//         console.log('========================');
//         console.log(fields); // fields contains extra meta data about results, if available
//         console.log('========================');

//     }
// );
// cara retrun data dari sql harus pake promise /calback fuction
// bikin untuk memper mudah penggunaan
const exsql = (sql, value = null) => {
    return new Promise((berhasil, gagal) => {
        connect.query(sql, value, (err, result) => {
            if (err) gagal(err);
            berhasil(result);

        })
    })
}

// gunakan view ejs 
app.set('view engine', 'ejs')
// gunakan express layout:
app.use(expressLayout);//middleware juga 
// pagil asset
app.use(express.static('public'));
// parse data dari post
app.use(express.urlencoded({ extended: true }));

// configurasi flash
app.use(cookieparser('secret'));
app.use(session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
}));
app.use(flash());


// dengan router
// ====================================
// ubah yang biasa jadi route
const Router = express.Router();


// Router.use(expressLayout);//middleware juga 
// // pagil asset
Router.use(express.static('public'));



Router.get('/', (req, res) => {
    console.log(`kamu di ${req.url}`);
    res.render('layout/index', {
        title: 'home page',
        layout: "mainLayout",
    })
})

Router.get('/contac', async (req, res) => {
    // const contac = await MyModule.ambilFile('./data/contac.json');
    // kirim data
    const sql = `SELECT * FROM contac`;
    const contac = await exsql(sql)

    res.render('layout/contac', {
        title: "contac page",
        contac,
        layout: "mainLayout",
        pesan: req.flash('pesan'),
    })
})

Router.post('/tambahData', (req, res) => {
    // MyModule.simpandata(req.body);
    const { nama, nohp } = req.body;
    const sql = `INSERT INTO contac (nama,nohp) VALUES( ?,? )`;
    exsql(sql, [nama, nohp]);
    req.flash('pesan', "data berhasil di tambah")
    res.redirect('/app/contac')

})

Router.get('/tambahData', (req, res) => {
    res.render('layout/tambahdata', {
        title: 'tambah data contac',
        layout: 'mainLayout'
    })
})

Router.get('/contac/delete/:id', (req, res) => {
    // MyModule.hapusData(parseInt(req.params.id));
    const sql = `DELETE FROM contac WHERE id = ?`;
    exsql(sql, req.params.id)
    req.flash('pesan', "data berhail di hapus ");
    res.redirect('/app/contac')
})


//cara ambil req user
Router.get('/produc/:nama', (req, res) => {
    res.send(` <h3>
        <ul>
            <li><a href="/">home</a></li>
            <li><a href="/contac">contac</a></li>
            <li><a href="/produc/kain?jenis=topi">produc kain</a></li>
        </ul>
    </h3>
    
    <br><br><br><br>  <h3>nama: ${req.params.nama} </h3> <br> <h3>jenis: ${req.query.jenis}</h3>`)

})

Router.use((req, res) => {

    res.status(404).send(`<center> <h1>sory: ${req.url} page not found</h1></center>`)
})

app.use('/app', Router)




// ==================
// ini biasa 
app.get('/', (req, res) => {
    res.render('layout/index', {
        title: 'home page',
        layout: "mainLayout",
    })
})

app.get('/contac', async (req, res) => {
    const contac = await MyModule.ambilFile('./data/contac.json');
    // kirim 
    res.render('layout/contac', {
        title: "contac page",
        contac,
        layout: "mainLayout",
        pesan: req.flash('pesan'),
    })
})

app.post('/tambahData', (req, res) => {
    MyModule.simpandata(req.body);
    req.flash('pesan', "data berhasil di tambah")
    res.redirect('/contac')

})

app.get('/tambahData', (req, res) => {
    res.render('layout/tambahdata', {
        title: 'tambah data contac',
        layout: 'mainLayout'
    })
})

app.get('/contac/delete/:id', (req, res) => {
    MyModule.hapusData(parseInt(req.params.id));
    req.flash('pesan', "data berhail di hapus ");
    res.redirect('/contac')
})


//cara ambil req user
app.get('/produc/:nama', (req, res) => {
    res.send(` <h3>
        <ul>
            <li><a href="/">home</a></li>
            <li><a href="/contac">contac</a></li>
            <li><a href="/produc/kain?jenis=topi">produc kain</a></li>
        </ul>
    </h3>
    
    <br><br><br><br>  <h3>nama: ${req.params.nama} </h3> <br> <h3>jenis: ${req.query.jenis}</h3>`)

})



app.use('/', (req, res) => {

    res.status(404).send('<center> <h1>sory page not found</h1></center>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})