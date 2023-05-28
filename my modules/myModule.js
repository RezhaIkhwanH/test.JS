const fs = require('fs');
const phat = "./data/";

// fs.exists(phat, (exists) => {
//     if (!exists) {
//         fs.mkdir(phat, (err) => {
//             if (err) throw err;
//             fs.exists(`${phat}/contac.json`, (isi) => {
//                 if (!isi) {
//                     fs.writeFile(`${phat}/contac.json`, '[]', (err) => {
//                         if (err) throw err
//                     })
//                 }
//             })
//         })
//     }
// })

if (!fs.existsSync(phat)) {
    fs.mkdirSync(phat)
    if (!fs.existsSync(`${phat}/contac.json`)) {
        fs.writeFileSync(`${phat}/contac.json`, '[]')
    }
}



const ambilFile = (lokasiFile) => {
    return new Promise((berjasil, gagal) => {
        fs.readFile(lokasiFile, 'utf-8', (err, data) => {
            berjasil(JSON.parse(data))
        })
    })
}

const simpandata = async (dataBaru) => {
    const dataLama = await ambilFile(`${phat}/contac.json`);
    dataBaru.id = dataLama[dataLama.length - 1].id + 1;
    console.log(dataBaru);
    dataLama.push(dataBaru);
    fs.writeFile(`${phat}/contac.json`, JSON.stringify(dataLama), (err) => {
        if (err) throw err
        console.log("trimakasi");

    })
}

const hapusData = async (id) => {
    const data = await ambilFile(`${phat}/contac.json`);
    const newData = data.filter((isi) => isi.id !== id)
    fs.writeFile(`${phat}/contac.json`, JSON.stringify(newData), (err) => {
        if (err) throw err
    })
}

module.exports = { simpandata, hapusData, ambilFile }