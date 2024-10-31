const mongoose = require("mongoose");

const pariwisataSchema = new mongoose.Schema({
    namaPariwisata : {type : String, required: true},
    provinsi : {type : String, required: true},
    kota : {type : String, required: true},
    alamat : {type : String, required: true}
});

module.exports = mongoose.model("Pariwisata", pariwisataSchema);