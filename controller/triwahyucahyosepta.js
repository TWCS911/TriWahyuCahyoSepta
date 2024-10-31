const Pariwisata = require('../model/pariwisata');

const createdPariwisata = (req,res)=>{
    const pariwisata = new Pariwisata({
        namaPariwisata : req.body.namaPariwisata,
        provinsi : req.body.provinsi,
        kota : req.body.kota,
        alamat : req.body.alamat
    });
    
    pariwisata.save()
    .then((createdPariwisata)=>{
        res.status(201).json({
            message : "Data Berhasil Disimpan",
            pariwisataId : createdPariwisata._id
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message : "Internal Server Error"
        });
    });
};

const readPariwisata = (req,res) => {
    Pariwisata.find()
    .then((documents) => {
        res.status(201).json({
            message : "Get Data Pariwisata",
            triwahyucahyoseptas : documents
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message : "Internal Server Error"
        });
    });
};

module.exports = {createdPariwisata,readPariwisata};