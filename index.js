const express = require("express");
const app = express();
app.use(express.json());

const jadwal = {
  senin: [
    "08.10-10.10 agama",
    "10.40-15.00 dasar dasar akuntansi",
  ],
  selasa: [
    "07.30-09.30 pjok",
    "09.30-11.20 matematika"
    "11.20-15.40 ipas"
  ],
  rabu: [
    "07.30-08.50 sejarah"
    "08.50-13.20 dasar dasar akuntansi"
    "13.40-15.00 kka"
  ],
  kamis: [
    "07.30-08.50 bahasa indonesia"
     "08.50-12.00 informatika"
     "12.00-15.00 bahasa inggris"
     "15.00-15.40 bk"
  ],
  jumat: [
    "08.10-09.30 seni budaya"
    "09.30-11.20 pkn"
    "11.20-12.40 bahasa indonesia" 
    "12.40-14.20 bahasa bali" 
    "14.20-15.40 matematika" 
    
  ]
};

app.post("/webhook", (req, res) => {
  const hari = req.body.queryResult.parameters.hari;

  if (jadwal[hari]) {
    res.json({
      fulfillmentText: `Jadwal hari ${hari}:\n` + jadwal[hari].join("\n")
    });
  } else {
    res.json({
      fulfillmentText: "Hari tidak ditemukan."
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
