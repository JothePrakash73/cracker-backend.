// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Product = require('./models/Product');

// const app = express();
// const PORT = 5000;

// // 🔌 Middleware
// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/crackerShop')
//   .then(() => console.log('✅ Connected to MongoDB'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Real products list (with real image names and categories)
// const products = [
//   {
    // _id: "1",
//     name: "30cm Green Sparkler",
//     price: 130,
//     category: "30 cm Sparklers",
//     image: "/images/30cmGreen.jpg",
//   },
//   {
    // _id: "2",
//     name: "30cm Red Sparkler",
//     price: 150,
//     category: "30 cm Sparklers",
//     image: "/images/30cmRed.jpg",
//   },
//   {
    // _id: "3",
//     name: "30cm Electric Sparkler",
//     price: 110,
//     category: "30 cm Sparklers",
//     image: "/images/30cmElectric.jpg",
//   },
//   {
    // _id: "4",
//     name: "30cm Color Sparkler",
//     price: 120,
//     category: "30 cm Sparklers",
//     image: "/images/30cmColor.jpg",
//   },
//    {
    // _id: "5",
//     name: "15cm Red Sparkler",
//     price: 150,
//     category: "15 cm Sparklers",
//     image: "/images/15cmRed.jpg",
//   },
//    {
    // _id: "6",
//     name: "15cm Electric Sparkler",
//     price: 110,
//     category: "15 cm Sparklers",
//     image: "/images/15cmElectric.jpg",
//   },
//    {
    // _id: "7",
//     name: "15cm Green Sparkler",
//     price: 130,
//     category: "15 cm Sparklers",
//     image: "/images/15cmGreen.jpg",
//   },
//    {
    // _id: "8",
//     name: "15cm Color Sparkler",
//     price: 120,
//     category: "15 cm Sparklers",
//     image: "/images/15cmColor.jpg",
//   },
//     {
    // _id: "9",
//     name: "12cm Golden Sparkler",
//     price: 100,
//     category: "12 cm Sparklers",
//     image: "/images/12cmGolden.jpg",
//   },
//     {
//     _id: "10",
//     name: "12cm Red Sparkler",
//     price: 130,
//     category: "12 cm Sparklers",
//     image: "/images/12cmRed.jpg",
//   },
//     {
//     _id: "11",
//     name: "10cm Color Sparkler",
//     price: 60,
//     category: "10 cm Sparklers",
//     image: "/images/10cmColor.jpg",
//   },
//     {
//     _id: "12",
//     name: "10cm Electric Sparkler",
//     price: 55,
//     category: "10 cm Sparklers",
//     image: "/images/10cmElectric.jpg",
//   },
//     {
//     _id: "13",
//     name: "10cm Green Sparkler",
//     price: 65,
//     category: "10 cm Sparklers",
//     image: "/images/10cmGreen.jpg",
//   },
//    {
//     _id: "14",
//     name: "50cm Electric Sparkler",
//     price: 400,
//     category: "50 cm Sparklers",
//     image: "/images/50cmElectric.jpg",
//   },
//    {
//     _id: "15",
//     name: "7cm Electric Sparkler",
//     price: 25,
//     category: "7 cm Sparklers",
//     image: "/images/7cmElectric.jpg",
//   },
//    {
//     _id: "16",
//     name: "7cm Color Sparkler",
//     price: 30,
//     category: "7 cm Sparklers",
//     image: "/images/7cmColor.jpg",
//   },
  
//    {
//     _id: "17",
//     name: "Flower Pots Small",
//     price: 95,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsSmall.jpg",
//   },
//    {
//     _id: "18",
//     name: "Flower Pots Big",
//     price: 130,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsBig.jpg",
//   },
//    {
//     _id: "19",
//     name: "Flower Pots Special",
//     price: 170,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsSpecial.jpg",
//   },
//    {
//     _id: "20",
//     name: "Flower Pots Ashoka",
//     price: 250,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsAsoka.jpg",
//   },
//    {
//     _id: "21",
//     name: "Flower Pot Giant",
//     price: 510,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsGiant.jpg",
//   },
//    {
//     _id: "22",
//     name: "Flower Pots Super Deluxe(5 Pcs)",
//     price: 340,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsSuperDeluxe.jpg",
//   },
//    {
//     _id: "23",
//     name: "Colour Blooming",
  
//     price: 660,
//     category: "Flower Pots",
//     image: "/images/ColorBloomy.jpg",
//   },
//    {
//     _id: "24",
//     name: "Green Koti(5 Pcs)",
//     price: 280,
//     category: "Flower Pots",
//     image: "/images/GreenKoti.jpg",
//   },
//    {
//     _id: "25",
//     name: "Green Bouquet",
//     price: 480,
//     category: "Flower Pots",
//     image: "/images/GreenBouquet.jpg",
//   },
//   {
//     _id: "26",
//     name: "Tri Color(5 Pcs)",
//     price: 625,
//     category: "Flower Pots",
//     image: "/images/TriColor.jpg",
//   },
//    {
//     _id: "27",
//     name: "Ground Chakkar Big(10 Pcs)",
//     price: 70,
//     category: "Chakkars",
//     image: "/images/GroundChakkar.jpg",
//   },
//    {
//     _id: "28",
//     name: "Ground Chakkar Big(25 Pcs)",
//     price: 165,
//     category: "Chakkars",
//     image: "/images/GroundChakkarBig25.jpg",
//   },
//    {
//     _id: "29",
//     name: "Ground Chakkar Deluxe",
//     price: 260,
//     category: "Chakkars",
//     image: "/images/GroundChakkarDeluxe.jpg",
//   },
//    {
//     _id: "30",
//     name: "Ground Chakkar Special",
//     price: 145,
//     category: "Chakkars",
//     image: "/images/GroundChakkarSpecial.jpg",
//   },
//    {
//     _id: "31",
//     name: "Chakkar Spinner Special",
//     price: 240,
//     category: "Chakkars",
//     image: "/images/ChakkarSpinnerSpecial.jpg",
//   },
//    {
//     _id: "32",
//     name: "Flora Wheel(5 Pcs)",
//     price: 270,
//     category: "Chakkars",
//     image: "/images/FloraWheel.jpg",
//   },
//      {
//     _id: "33",
//     name: "4X4 Wheel",
//     price: 330,
//     category: "Chakkars",
//     image: "/images/4X4Wheel.jpg",
//   },
//      {
//     _id: "34",
//     name: "Dancing Wheel",
//     price: 190,
//     category: "Chakkars",
//     image: "/images/DancingWheel.jpg",
//   },
//        {
//     _id: "35",
//     name: "Baby Rockets",
//     price: 100,
//     category: "Rockets",
//     image: "/images/BabyRocket.jpg",
//   },
//        {
//     _id: "36",
//     name: "Rocket Bomb",
//     price: 130,
//     category: "Rockets",
//     image: "/images/RocketBomb.jpg",
//   },
//        {
//     _id: "37",
//     name: "Lunik Rocket",
//     price: 230,
//     category: "Rockets",
//     image: "/images/LunikRocket.jpg",
//   },
//          {
//     _id: "38",
//     name: "Zig Zag",
//     price: 60,
//     category: "Fancy Novelties",
//     image: "/images/ZigZag.jpg",
//   },
//          {
//     _id: "39",
//     name: "Stunner",
//     price: 260,
//     category: "Fancy Novelties",
//     image: "/images/Stunner.jpg",
//   },
//            {
//     _id: "40",
//     name: "Photo Flash",
//     price: 210,
//     category: "Fancy Novelties",
//     image: "/images/PhotoFlash.jpg",
//   },
//            {
//     _id: "41",
//     name: "Musical Siren",
//     price: 425,
//     category: "Fancy Novelties",
//     image: "/images/MusicalSiren.jpg",
//   },
//            {
//     _id: "42",
//     name: "Mini Siren",
//     price: 350,
//     category: "Fancy Novelties",
//     image: "/images/MiniSiren.jpg",
//   },
//            {
//     _id: "43",
//     name: "Magic Stone",
//     price: 45,
//     category: "Fancy Novelties",
//     image: "/images/MagicStone.jpg",
//   },
//            {
//     _id: "44",
//     name: "Magic Star",
//     price: 50,
//     category: "Fancy Novelties",
//     image: "/images/MagicStar.jpg",
//   },
//            {
//     _id: "45",
//     name: "Assorted Cartoons(10 Pcs)",
//     price: 70,
//     category: "Fancy Novelties",
//     image: "/images/AssortedCartoons.jpg",
//   },
//            {
//     _id: "46",
//     name: "Bambaram",
//     price: 180,
//     category: "Fancy Novelties",
//     image: "/images/Bambaram.jpg",
//   },
//            {
//     _id: "47",
//     name: "Bimboo(20 Pcs)",
//     price: 345,
//     category: "Fancy Novelties",
//     image: "/images/Bimboo.jpg",
//   },
//            {
//     _id: "48",
//     name: "ButterFly",
//     price: 230,
//     category: "Fancy Novelties",
//     image: "/images/Butterfly.jpg",
//   },
//            {
//     _id: "49",
//     name: "Doobys(20 Pcs)",
//     price: 345,
//     category: "Fancy Novelties",
//     image: "/images/Doobys.jpg",
//   },
//            {
//     _id: "50",
//     name: "Ganga Jamuna(5 Pcs)",
//     price: 150,
//     category: "Fancy Novelties",
//     image: "/images/GangaJamuna.jpg",
//   },
//            {
//     _id: "51",
//     name: "Helicopter(5 Pcs)",
//     price: 250,
//     category: "Fancy Novelties",
//     image: "/images/Helicopter.jpg",
//   },
//              {
//     _id: "52",
//     name: "Peacock Meena",
//     price: 490,
//     category: "Fountains",
//     image: "/images/PeacockMeena.jpg",
//   },
//              {
//     _id: "53",
//     name: "Bada Peacock",
//     price: 960,
//     category: "Fountains",
//     image: "/images/BadaPeacock.jpg",
//   },
//              {
//     _id: "54",
//     name: "Holi",
//     price: 300,
//     category: "Fountains",
//     image: "/images/Holi.jpg",
//   },
//              {
//     _id: "55",
//     name: "Gold Rush",
//     price: 260,
//     category: "Fountains",
//     image: "/images/GoldRush.jpg",
//   },
//              {
//     _id: "56",
//     name: "Kinder Joy",
//     price: 260,
//     category: "Fountains",
//     image: "/images/KinderJoy.jpg",
//   },
//              {
//     _id: "57",
//     name: "Popcorn",
//     price: 500,
//     category: "Fountains",
//     image: "/images/Popcorn.jpg",
//   },
//              {
//     _id: "58",
//     name: "Lollipop",
//     price: 525,
//     category: "Fountains",
//     image: "/images/Lollopop.jpg",
//   },
//              {
//     _id: "59",
//     name: "PUBG Gun",
//     price: 400,
//     category: "Fountains",
//     image: "/images/PubgGun.jpg",
//   },
//                {
//     _id: "60",
//     name: "Wonder Bees",
//     price: 630,
//     category: "Mega Fountains",
//     image: "/images/WonderBees.jpg",
//   },
//                {
//     _id: "61",
//     name: "Silver Bees",
//     price: 630,
//     category: "Mega Fountains",
//     image: "/images/SilverBees.jpg",
//   },
//                {
//     _id: "62",
//     name: "Blooming Volcano",
//     price: 730,
//     category: "Mega Fountains",
//     image: "/images/BloomingVolcano.jpg",
//   },
//                {
//     _id: "63",
//     name: "Sizzle Pots",
//     price: 400,
//     category: "Mega Fountains",
//     image: "/images/SizzlePots.jpg",
//   },
//                {
//     _id: "64",
//     name: "Golden & Silver Stars(2 Pcs)",
//     price: 425,
//     category: "Mega Fountains",
//     image: "/images/SilverStar.jpg",
//   },
//                {
//     _id: "65",
//     name: "Mojito,Jigarthanda",
//     price: 250,
//     category: "Mega Fountains",
//     image: "/images/MojitoJigarthanda.jpg",
//   },
//                {
//     _id: "66",
//     name: "7 cm Magic Pencil",
//     price: 65,
//     category: "Candles & Twinkling Star",
//     image: "/images/7cmMagicPencil.jpg",
//   },
//                  {
//     _id: "67",
//     name: "12 cm Pencil",
//     price: 165,
//     category: "Candles & Twinkling Star",
//     image: "/images/12cmPencil.jpg",
//   },
//                  {
//     _id: "68",
//     name: "15 cm Pencil(3 Pcs)",
//     price: 180,
//     category: "Candles & Twinkling Star",
//     image: "/images/15cmPencil.jpg",
//   },
//                  {
//     _id: "69",
//     name: "Fuji Candles",
//     price: 330,
//     category: "Candles & Twinkling Star",
//     image: "/images/Fujicandles.jpg",
//   },
//                  {
//     _id: "70",
//     name: "1 1/2\" Twinkling Star",
//     price: 70,
//     category: "Candles & Twinkling Star",
//     image: "/images/1.5TwinklingStar.jpg",
//   },
//                  {
//     _id: "71",
//     name: "4\"Twinkling Star",
//     price: 180,
//     category: "Candles & Twinkling Star",
//     image: "/images/4TwinklingStar.jpg",
//   },
//                  {
//     _id: "72",
//     name: "Green Twinkling Star",
//     price: 110,
//     category: "Candles & Twinkling Star",
//     image: "/images/GreenTwinklingStar.jpg",
//   },
//                    {
//     _id: "73",
//     name: "Pringles Mix & 5 Colors",
//     price: 70,
//     category: "Elite Series",
//     image: "/images/PringlesMix.jpg",
//   },
//                    {
//     _id: "74",
//     name: "Oreo",
//     price: 135,
//     category: "Elite Series",
//     image: "/images/Oreo.jpg",
//   },
//                    {
//     _id: "75",
//     name: "Wizz",
//     price: 260,
//     category: "Elite Series",
//     image: "/images/Wizz.jpg",
//   },
//                    {
//     _id: "76",
//     name: "Rainbow Color Smoke(Hand Held)",
//     price: 375,
//     category: "Elite Series",
//     image: "/images/GreenTwinklingStar.jpg",
//   },
//                    {
//     _id: "77",
//     name: "Robo(5 Pcs)(Green)",
//     price: 190,
//     category: "Elite Series",
//     image: "/images/RoboGreen.jpg",
//   },
//                    {
//     _id: "78",
//     name: "Rio,Shrek(Red,Green Shower)",
//     price: 275,
//     category: "Elite Series",
//     image: "/images/Rio.jpg",
//   },
       

//   // 🔽 Add more real products here
// ];

// // ⚠️ One-time insert route — only run once
// app.get('/api/insert-products', async (req, res) => {
//   try {
//     const existing = await Product.countDocuments();
//     if (existing >= 78) {
//       return res.send('✅ Products already inserted.');
//     }

//     await Product.insertMany(products);
//     res.send('✅ Inserted 78 products!');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('❌ Error inserting products.');
//   }
// });

// // ✅ Get all products
// app.get('/api/products', async (req, res) => {
//   try {
//     const items = await Product.find();
//     res.json(items);
//   } catch (err) {
//     console.error('❌ Error fetching products:', err);
//     res.status(500).send('Server error');
//   }
// });

// // ✅ Count products
// app.get('/api/count', async (req, res) => {
//   try {
//     const count = await Product.countDocuments();
//     res.send(`Total products in DB: ${count}`);
//   } catch (err) {
//     res.status(500).send("Error counting products");
//   }
// });

// // 🚀 Start Server
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });
// server.js
// server.js
// server.js
require('dotenv').config();

const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const bcrypt = require("bcryptjs"); // 🔑 Password hashing
const jwt = require("jsonwebtoken"); // JWT auth

// ----------------- Models -----------------
const Product = require("./models/Product");
const Order = require("./models/order");
const Counter = require("./models/counter");
const User = require("./models/User");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// ----------------- Ensure folders -----------------
const uploadsPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsPath)) fs.mkdirSync(uploadsPath, { recursive: true });
app.use("/uploads", express.static(uploadsPath));

const imagesPath = path.join(__dirname, "images");
if (!fs.existsSync(imagesPath)) fs.mkdirSync(imagesPath, { recursive: true });
app.use("/images", express.static(imagesPath));

// ----------------- MongoDB -----------------
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ----------------- Helpers -----------------
const generateBillNumber = (n) => {
  let result = "";
  while (n > 0) {
    n--;
    result = String.fromCharCode((n % 26) + 65) + result;
    n = Math.floor(n / 26);
  }
  return result;
};

const getNextSequence = async (name = "billIndex") => {
  const updated = await Counter.findOneAndUpdate(
    { name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  return updated.seq;
};

// ----------------- Multer -----------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsPath),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_")),
});
const upload = multer({ storage });

// ----------------- Order Upload -----------------
app.post(
  "/api/order-upload",
  upload.fields([
    { name: "bill", maxCount: 1 },
    { name: "screenshot", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { name, phone, place, landmark } = req.body;

      if (!req.files?.bill || !req.files?.screenshot) {
        return res.status(400).json({ success: false, message: "Bill or screenshot missing" });
      }

      const nextIndex = await getNextSequence("billIndex");
      const newBillNumber = generateBillNumber(nextIndex);

      const billFile = req.files.bill[0];
      const screenshotFile = req.files.screenshot[0];

      const billPath = `/uploads/${billFile.filename}`;
      const screenshotPath = `/uploads/${screenshotFile.filename}`;

      const order = new Order({
        name, phone, place, landmark,
        billIndex: nextIndex,
        billNumber: newBillNumber,
        billPath,
        screenshotPath,
      });

      await order.save();

      const adminNumber = process.env.ADMIN_WHATSAPP || "918148842731";
      const whatsappText = `🧨 New CrackerMart Order 🚀 Bill No: ${newBillNumber} (${nextIndex}) 👤 Name: ${name} 📞 Phone: ${phone} 📍 Place: ${place} 📌 Landmark: ${landmark} 🧾 Bill: ${req.protocol}://${req.get("host")}${billPath} 💵 Screenshot: ${req.protocol}://${req.get("host")}${screenshotPath}`.trim();
      const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(whatsappText)}`;

      res.json({ success: true, whatsappURL, billNumber: newBillNumber, orderId: order._id });
    } catch (err) {
      console.error("Order upload error:", err);
      res.status(500).json({ success: false, message: err.message });
    }
  }
);

// ----------------- Products -----------------
const products = [
  {
    name: "Flower Pots Special",
    price: 415,
    category: "Flower Pots",
    image: "/images/Flowerpotsspecial.jpg",
  },
  {
    name: "Flower Pots Asoka",
    price: 605,
    category: "Flower Pots",
    image: "/images/Flowerpotsasoka.jpg",
  },
    {
    name: "Laddu Color Changes",
    price: 2025,
    category: "New Novelties",
    image: "/images/Colorchangingladdu.jpg",
  },
      {
    name: "Rio Shrek(Red,Green Shower)",
    price: 670,
    category: "Elite Series",
    image: "/images/Rioshrek.jpg",
  },
   {
    name: " Minions, Emoji (Gold, Silver Shower)",
    price: 670,
    category: "Elite Series",
    image: "/images/Minionsemoji.jpg",
  },
   {
    name: "PUBG Gun",
    price: 800,
    category: "Fountains",
    image: "/images/Pubggun.jpg",
  },
     {
    name: "Koi(5 Pcs)",
    price: 855,
    category: "Mini Aerial Fancy",
    image: "/images/Koi.jpg",
  },
       {
    name: "Bada Peacock",
    price: 1920,
    category: "Fountains",
    image: "/images/Peacockbig.jpg",
  },
         {
    name: "Wonder Bees",
    price: 1375,
    category: "Mega Fountains",
    image: "/images/Wonderbees.jpg",
  },
           {
    name: "Silver Bees",
    price: 1375,
    category: "Mega Fountains",
    image: "/images/Silverbees.jpg",
  },
             {
    name: "Water Queen (Fav Pot)",
    price: 800,
    category: "Mega Fountains",
    image: "/images/Favapot.jpg",
  },

  {
    name: "Mega Crackling",
    price: 650,
    category: "Mega Fountains",
    image: "/images/Megacrackling.jpg",
  },
  {
    name: "Peacock Meena",
    price: 1090,
    category: "Fountains",
    image: "/images/peackockmeena.jpg",
  },
  {
    name: "Blooming Volcano",
    price: 1570,
    category: "Mega Fountains",
    image: "/images/Bloomingvolcano.jpg",
  },
 {
    name: "Holi",
    price: 675,
    category: "Fountains",
    image: "/images/Holi.jpg",
  },
   {
    name: "Popcorn",
    price: 1155,
    category: "Fountains",
    image: "/images/Popcorn.jpg",
  },
   {
    name: "7Shot(10Pcs)",
    price: 1220,
    category: "Mini Aerial Fancy",
    image: "/images/7shot.jpg",
  },
  {
    name: "Oreo",
    price: 325,
    category: "Elite Series",
    image: "/images/Oreo.jpg",
  },
  {
    name: "12Cm Pencil",
    price: 415,
    category: "Candles & Twinkling Star",
    image: "/images/Bigcastle.jpg",
  }, 
  {
    name: "Butterfly",
    price: 500,
    category: "Fancy Novelties",
    image: "/images/Butterfly.jpg",
  }, 
  {
    name: "Photo Flash",
    price: 430,
    category: "Fancy Novelties",
    image: "/images/PhotoFlash.jpg",
  }, 
  {
    name: "Red Bijili(100's)",
    price: 210,
    category: "One Sound Crackers",
    image: "/images/Bijiliyellow.jpg",
  }, 
  {
    name: "Magic Show(money in Bank) (3 Pcs) Mini",
    price: 575,
    category: "Paper Bombs",
    image: "/images/Moneybank.jpg",
  },
  {
    name: "10 Cm Green Sparklers",
    price: 130,
    category: "10 cm Sparklers",
    image: "/images/10cmgreen.jpg",
  },
 
  {
    name: "30cm Electric Sparklers",
    price: 220,
    category: "30 cm Sparklers",
    image: "/images/30cmelectric.jpg",
  },
  {
    name: "30 shot I max",
    price: 2625,
    category: "Repeating Shots",
    image: "/images/imax30shot.jpg",
  },
  {
    name: "7 cm Electric Sparklers",
    price: 50,
    category: "7 cm Sparklers",
    image: "/images/7cmelectric.jpg",
  },
  {
    name: "Vonka 12 Shot",
    price: 2150,
    category: "Repeating Shots",
    image: "/images/Vonka12shot.jpg",
  },
  {
    name: "120 Shot Imax",
    price: 10500,
    category: "Repeating Shots",
    image: "/images/imax120shot.jpg",
  },
  {
    name: "Rang Jelly",
    price: 1105,
    category: "Flower Pots",
    image: "/images/Rangjelly.jpg",
  },

  {
    name: "Green Twinkling Star",
    price: 250,
    category: "Candles & Twinkling Star",
    image: "/images/Greentwinklingstar.jpg",
  },
  {
    name: "Rocket Bomb",
    price: 310,
    category: "Rockets",
    image: "/images/Rocketbomb.jpg",
  },  
  {
    name: "Green Bouquet",
    price: 1370,
    category: "Flower Pots",
    image: "/images/Greenbouquet.jpg",
  },
  {
    name: "Hydro Bomb",
    price: 340,
    category: "Atom Bombs",
    image: "/images/Hydrobomb1.jpg",
  },  
  {
    name: "Flower Pot Giant",
    price: 1155,
    category: "Flower Pots",
    image: "/images/Flowerpotgiant.jpg",
  }, 
  
  {
    name: "Snake Cartoons(10 Pcs)",
    price: 210,
    category: "Fancy Novelties",
    image: "/images/Snakecartoons.jpg",
  },  
  {
    name: "Greeny Bomb",
    price: 440,
    category: "Atom Bombs",
    image: "/images/Greenybomb.jpg",
  },        
{
    name: "Ruby or Emerald",
    price: 180,
    category: "Fancy Novelties",
    image: "/images/Ruby.jpg",
  },    
  {
    name: "Kango King Bomb",
    price: 735,
    category: "Atom Bombs",
    image: "/images/Kangoking.jpg",
  },  
  {
    name: "Magic Star",
    price: 120,
    category: "Fancy Novelties",
    image: "/images/Magicstar.jpg",
  }, 
  {
    name: "Zig Zag",
    price: 150,
    category: "Fancy Novelties",
    image: "/images/Zigzag.jpg",
  },       
  {
    name: "Baby Rocket",
    price: 210,
    category: "Rockets",
    image: "/images/Babyrocket.jpg",
  },   
  {
    name: "Tri Colour(5 Pcs)",
    price: 1400,
    category: "Flower Pots",
    image: "/images/Tricolor.jpg",
  },                       
  {
    name: "Lazer Bomb",
    price: 1360,
    category: "Atom Bombs",
    image: "/images/Laserbomb.jpg",
  },                   
  {
    name: "Colour Blooming",
    price: 1440,
    category: "Flower Pots",
    image: "/images/Colorbloomy.jpg",
  },                           
{
    name: "4\"Gold Laxmi",
    price: 155,
    category: "One Sound Crackers",
    image: "/images/Goldlaxmi.jpg",
  },     
  {
    name: "Ground Chakkar Deluxe",
    price: 660,
    category: "Chakkars",
    image: "/images/Chakkardeluxe.jpg",
  }, 
  {
    name: "Ground Chakkar Special",
    price: 360,
    category: "Chakkars",
    image: "/images/Chakkarspecial.jpg",
  },            
  {
    name: "Two Sound Crackers",
    price: 145,
    category: "One Sound Crackers",
    image: "/images/Twosound.jpg",
  },
  {
    name: "Bijili(50's)",
    price: 110,
    category: "One Sound Crackers",
    image: "/images/Bijilismall.jpg",
  },
  
  {
    name: "4X4 Wheel",
    price: 670,
    category: "Chakkars",
    image: "/images/4Wheel.jpg",
  },
  {
    name: "Flower Pots Big",
    price: 320,
    category: "Flower Pots",
    image: "/images/Flowerpotbig.jpg",
  },
  {
    name: "Rainbow Color Smoke (Hand Held)",
    price: 760,
    category: "Elite Series",
    image: "/images/colorsmoke.jpg",
  },
   {
    name: "Tim Tim Laddu",
    price: 1125,
    category: "New Novelties",
    image: "/images/Timtim.jpg",
  },
   {
    name: "Asrafi Laddu",
    price: 1950,
    category: "New Novelties",
    image: "/images/Ashrafi.jpg",
  },
   {
    name: "Laddu 2 in 1",
    price: 2100,
    category: "New Novelties",
    image: "/images/2in1laddu.jpg",
  },
   {
    name: "Wizz",
    price: 655,
    category: "Elite Series",
    image: "/images/wizz.jpg",
  },
   {
    name: "Deluxe Laddu",
    price: 2880,
    category: "New Novelties",
    image: "/images/Laddudeluxe.jpg",
  },  
   {
    name: "Kinder Joy",
    price: 580,
    category: "Fountains",
    image: "/images/Kinderjoy.jpg",
  },
   {
    name: "Gold Rush",
    price: 580,
    category: "Fountains",
    image: "/images/Goldrush.jpg",
  },
   {
    name: "Lollipop",
    price: 1050,
    category: "Fountains",
    image: "/images/Lollipop.jpg",
  },
   {
    name: "Tango 1\" Chotta Fancy",
    price: 320,
    category: "Mini Aerial Fancy",
    image: "/images/Tango.jpg",
  },
  {
    name: "I cone",
    price: 1000,
    category: "New Arrival",
    image: "/images/Icone.jpg",
  },
  {
    name: "Bimboo(20 Pcs)",
    price: 790,
    category: "Fancy Novelties",
    image: "/images/Bimboo.jpg",
  },
    {
    name: "Drone(5 Pcs)",
    price: 960,
    category: "Fancy Novelties",
    image: "/images/Drone.jpg",
  },
  {
    name: "Helicopter(5 Pcs)",
    price: 550,
    category: "Fancy Novelties",
    image: "/images/Helicopter.jpg",
  },
{
    name: "Assorted Cartoon(10 Pcs)",
    price: 160,
    category: "Fancy Novelties",
    image: "/images/Assortedcartoon.jpg",
  },
  {
    name: "Bambaram(10 Pcs)",
    price: 475,
    category: "Fancy Novelties",
    image: "/images/Bambaram.jpg",
  },
  {
    name: "Ultra Pencil",
    price: 340,
    category: "Candles & Twinkling Star",
    image: "/images/Ultrapencil.jpg",
  },
  {
    name: "7cm Green Sparklers",
    price: 66,
    category: "7 cm Sparklers",
    image: "/images/7cmgreen.jpg",
  },
{
    name: "15cm Green Sparklers",
    price: 260,
    category: "15 cm Sparklers",
    image: "/images/15cmgreen.jpg",
  },
  {
    name: "10cm Electric Sparklers",
    price: 110,
    category: "10 cm Sparklers",
    image: "/images/10cmelectric.jpg",
  },
{
    name: "1 3/4\"Fancy(3Pcs)",
    price: 1475,
    category: "Aerial Magic Fancy",
    image: "/images/4fancy.jpg",
  },
  {
    name: "VIP Matches",
    price: 1100,
    category: "Color Matches",
    image: "/images/Robin.jpg",
  },
  {
    name: "10 cm Red Sparklers",
    price: 140,
    category: "10 cm Sparklers",
    image: "/images/10cmred.jpg",
  },
  {
    name: "7 cm color Sparklers",
    price: 60,
    category: "7 cm Sparklers",
    image: "/images/7cmcolor.jpg",
  },
  {
    name: "12 cm Golden Sparklers",
    price: 200,
    category: "12 cm Sparklers",
    image: "/images/12cmgolden.jpg",
  },
  {
    name: "50 cm Electric Sparklers",
    price: 800,
    category: "50 cm Sparklers",
    image: "/images/50cmelectric.jpg",
  },
  {
    name: "15 cm Red Sparklers",
    price: 300,
    category: "15 cm Sparklers",
    image: "/images/15cmred.jpg",
  },
  {
    name: "Sky Scrapper (12 Shot)",
    price: 1500,
    category: "Repeating Shots",
    image: "/images/Skyscrapper.jpg",
  },
{
    name: "Rang Chakkar (12 Shot)",
    price: 1600,
    category: "Repeating Shots",
    image: "/images/Rang.jpg",
  },
{
    name: "5\"Fancy(2Pcs)",
    price: 4250,
    category: "Aerial Magic Fancy",
    image: "/images/Rio.jpg",
  },
{
    name: "7 cm Red Spearklers",
    price: 70,
    category: "7 cm Sparklers",
    image: "/images/7cmred.jpg",
  },
  {
    name: "Midnight Jazz (12 Shot)",
    price: 1075,
    category: "Repeating Shots",
    image: "/images/Midnight.jpg",
  },
  {
    name: "10 cm color Sparklers",
    price: 120,
    category: "10 cm Sparklers",
    image: "/images/10cmcolor.jpg",
  },
  {
    name: "15 cm Electric Sparklers",
    price: 220,
    category: "15 cm Sparklers",
    image: "/images/15cmelectric.jpg",
  },
  {
    name: "30 cm color Sparklers",
    price: 240,
    category: "30 cm Sparklers",
    image: "/images/30cmcolor.jpg",
  },
  {
    name: "Musical Siren",
    price: 1115,
    category: "Fancy Novelties",
    image: "/images/Musicalsiren.jpg",
  },
  {
    name: "4\"Twinkling Star",
    price: 420,
    category: "Candles & Twinkling Star",
    image: "/images/4inchsatai.jpg",
  },
  {
    name: "Silver Jet",
    price: 900,
    category: "Rockets",
    image: "/images/Silverjet.jpg",
  },
  {
    name: "Paper Bomb(Big)",
    price: 810,
    category: "Paper Bombs",
    image: "/images/1kgpaperbomb.jpg",
  },
  {
    name: "Thunder Bold Bomb",
    price: 550,
    category: "Atom Bombs",
    image: "/images/Thunderbold.jpg",
  },
{
    name: "1 1/2\"Twinkling Star",
    price: 165,
    category: "Candles & Twinkling Star",
    image: "/images/halfsatai.jpg",
  },
  {
    name: "Sky Shot(10 Pcs)",
    price: 600,
    category: "Fancy Novelties",
    image: "/images/Skyshot.jpg",
  },
  {
    name: "Bullet Bomb",
    price: 135,
    category: "Atom Bombs",
    image: "/images/Bulletbomb.jpg",
  },
{
    name: "30 cm Green Sparklers",
    price: 260,
    category: "30 cm Sparklers",
    image: "/images/30cmgreen.jpg",
  },
  {
    name: "12 Shot",
    price: 900,
    category: "Repeating Shots",
    image: "/images/Rockstar.jpg",
  },
  {
    name: "15 cm color Sparklers",
    price: 240,
    category: "15 cm Sparklers",
    image: "/images/15cmyellow.jpg",
  },
  {
    name: "30 cm Red Sparklers",
    price: 300,
    category: "30 cm Sparklers",
    image: "/images/30cmred.jpg",
  },
  {
    name: "Vonka 24 Shot",
    price: 4050,
    category: "Repeating Shots",
    image: "/images/vonka24.jpg",
  },
 
  
  {
    name: "2 3/4 Kuruvi",
    price: 45,
    category: "One Sound Crackers",
    image: "/images/Kuruvi.jpg",
  },
  {
    name: "Dancing Wheel",
    price: 420,
    category: "Chakkars",
    image: "/images/Dancing.jpg",
  },
  {
    name: "Ground Chakkar Big (25 Pcs)",
    price: 360,
    category: "Chakkars",
    image: "/images/Chakkarbig25.jpg",
  },
{
    name: "4\"Ganapathy",
    price: 170,
    category: "One Sound Crackers",
    image: "/images/Ganpath.jpg",
  },
  {
    name: "Fuji Candles",
    price: 810,
    category: "Candles & Twinkling Star",
    image: "/images/Fuji.jpg",
  },
  {
    name: "Strom Super Deluxe",
    price: 230,
    category: "One Sound Crackers",
    image: "/images/Storm.jpg",
  },
  {
    name: "Flower Pots Small",
    price: 270,
    category: "Flower Pots",
    image: "/images/Flowerpotsmall.jpg",
  },
  {
    name: "Ground Chakkar Big (10 Pcs)",
    price: 175,
    category: "Chakkars",
    image: "/images/Chakkarbig.jpg",
  },
  {
    name: "4\"Deluxe Laxmi",
    price: 150,
    category: "One Sound Crackers",
    image: "/images/4deluxe.jpg",
  },
  {
    name: "4\"Laxmi",
    price: 90,
    category: "One Sound Crackers",
    image: "/images/4laxmi.jpg",
  },
  {
    name: "Colour Paper Bomb",
    price: 350,
    category: "Paper Bombs",
    image: "/images/colorpaparbomb.jpg",
  },
{
    name: "Jot Down(3Pcs)",
    price: 725,
    category: "Candles & Twinkling Star",
    image: "/images/Jotdown.jpg",
  },
  {
    name: "Chakkar Spinner Special",
    price: 525,
    category: "Chakkars",
    image: "/images/Spinnerspecial.jpg",
  },
  {
    name: "Tin Beer",
    price: 500,
    category: "Fancy Novelties",
    image: "/images/Tin.jpg",
  },
  {
    name: "2 1/2 \" Fancy(1Pcs)",
    price: 1100,
    category: "Aerial Magic Fancy",
    image: "/images/2halfinch.jpg",
  },
  {
    name: "4\" Fancy (1 Pcs)",
    price: 1715,
    category: "Aerial Magic Fancy",
    image: "/images/4inch.jpg",
  },
  {
    name: "3\" Fancy (1 Pcs)",
    price: 1500,
    category: "Aerial Magic Fancy",
    image: "/images/3inch.jpg",
  },
  
  {
    name: "Rotating Sparklers(30 cm)",
    price: 1200,
    category: "Sparklers",
    image: "/images/rotating.jpg",
  },
  {
    name: "10 Shot (Hand Held)",
    price: 2000,
    category: "Repeating Shots",
    image: "/images/10in1.jpg",
  },
  {
    name: "5 in 1 Sparklers (10 Cm)",
    price: 700,
    category: "Sparklers",
    image: "/images/5in1.jpg",
  },
  {
    name: "4\" Fancy Double Ball",
    price: 2500,
    category: "Aerial Magic Fancy",
    image: "/images/Doubleball.jpg",
  },
  {
    name: "5\"Fancy",
    price: 2125,
    category: "Aerial Magic Fancy",
    image: "/images/5inch.jpg",
  },
  {
    name: "4\" Fancy 7 Steps",
    price: 1850,
    category: "Aerial Magic Fancy",
    image: "/images/7step.jpg",
  },
  {
    name: "Paper Bomb",
    price: 310,
    category: "Paper Bombs",
    image: "/images/Paperbomb.jpg",
  },
  {
    name: "Classic 5 in 1",
    price: 575,
    category: "Color Matches",
    image: "/images/classic5in1.jpg",
  },
  {
    name: "30 Shot",
    price: 2000,
    category: "Shots",
    image: "/images/30shot.jpg",
  },
  {
    name: "60 Shot",
    price: 4000,
    category: "Shots",
    image: "/images/60shot.jpg",
  },
  {
    name: "120 Shot",
    price: 8000,
    category: "Shots",
    image: "/images/120shot.jpg",
  },
  {
    name: "240 Shot",
    price: 16000,
    category: "Shots",
    image: "/images/240shot.jpg",
  },
  {
    name: "Wire Chakkars Special",
    price: 755,
    category: "Chakkars",
    image: "/images/Wirechakkar.jpg",
  },
  {
    name: "Paper Bomb(Small)",
    price: 530,
    category: "Paper Bombs",
    image: "/images/Paperbombsmall.jpg",
  },
  {
    name: "Paper Bomb(10Pcs)(Avathar)",
    price: 1250,
    category: "Paper Bombs",
    image: "/images/Paperbomb10.jpg",
  },

  {
    name: "Hot Cookies",
    price: 1020,
    category: "Chakkars",
    image: "/images/Hotcookies.jpg",
  },
  {
    name: "3 1/2\"Laxmi",
    price: 70,
    category: "One Sound Crackers",
    image: "/images/2laxmi.jpg",
  },
  {
    name: "Musical Jet",
    price: 990,
    category: "Rockets",
    image: "/images/Musicaljet.jpg",
  },
  {
    name: "Flower Pots Super Deluxe(5 Pcs)",
    price: 850,
    category: "Flower Pots",
    image: "/images/Flowerpotsdeluxe.jpg",
  },
  {
    name: "Mega Juke Box 40 shot",
    price: 42750,
    category: "Set Out",
    image: "/images/Megajuke.jpg",
  },
  {
    name: "Mega Monster 24 shot",
    price: 40600,
    category: "Set Out",
    image: "/images/Megamonster.jpg",
  },
  {
    name: "Mat Max 25 Shot",
    price: 19375,
    category: "Set Out",
    image: "/images/Matmax.jpg",
  },

  {
    name: "Star King",
    price: 585,
    category: "New Novelties",
    image: "/images/Startking.jpg",
  },

  {
    name: "Roll Cap",
    price: 380,
    category: "Color Matches",
    image: "/images/Rollcap.jpg",
  },

  {
    name: "12 Cm Aqua Blue Sparklers",
    price: 200,
    category: "Sparklers",
    image: "/images/12cmblue.jpg",
  },



  {
    name: "7 Shot(5Pcs)",
    price: 610,
    category: "Mini Aerial Fancy",
    image: "/images/7Shot5.jpg",
  },

  {
    name: "6\"\ Fancy(1Pcs)",
    price: 5000,
    category: "Aerial Magic Fancy",
    image: "/images/6Fancy.jpg",
  },

  {
    name: "Peacock",
    price: 900,
    category: "Fountains",
    image: "/images/Peacock.jpg",
  },

  {
    name: "Magic Pots(6Pcs)",
    price: 800,
    category: "Fountains",
    image: "/images/Magicpots.jpg",
  },

  {
    name: "Anaconda",
    price: 350,
    category: "Color Matches",
    image: "/images/Anaconda.jpg",
  },

  {
    name: "25 Shot Rider",
    price: 1050,
    category: "Repeating Shots",
    image: "/images/25ShotRider.jpg",
  },

  {
    name: "Perk/Kit Kat/Dairy Milk Fountain",
    price: 975,
    category: "Elite Series",
    image: "/images/Perk.jpg",
  },

  {
    name: "Magical Fountain",
    price: 585,
    category: "New Novelties",
    image: "/images/MagicalFountain.jpg",
  },

  {
    name: "Zumo 5X10",
    price: 10250,
    category: "Set Out",
    image: "/images/Zumo.jpg",
  },

  {
    name: "Penta 5(5Pcs)",
    price: 755,
    category: "Mini Aerial Fancy",
    image: "/images/Penta.jpg",
  },

  {
    name: "Pyro Party,Crackling Honda",
    price: 5100,
    category: "Set Out",
    image: "/images/Pyro.jpg",
  },

  {
    name: "75 Cm Electric Sparklers",
    price: 1100,
    category: "Sparklers",
    image: "/images/75cm.jpg",
  },

  {
    name: "Lunik Rocket",
    price: 510,
    category: "Rockets",
    image: "/images/Lunik.jpg",
  },

  {
    name: "Ganga Jamuna(5Pcs)",
    price: 350,
    category: "Fancy Novelties",
    image: "/images/GangaJamuna.jpg",
  },

  {
    name: "Disco Shower",
    price: 500,
    category: "Elite Series",
    image: "/images/DiscoShower.jpg",
  },

  {
    name: "7 Up Rainbow",
    price: 650,
    category: "Color Matches",
    image: "/images/7Up.jpg",
  },
  
  {
    name: "Cyber Orbit",
    price: 675,
    category: "New Arrival",
    image: "/images/CyberOrbit.jpg",
  },

  {
    name: "50 Seconds Torch(5Pcs)",
    price: 640,
    category: "Candles & Twinkling Star",
    image: "/images/50SecondsTorch.jpg",
  },

  {
    name: "Bacardi Nites(100Shots Crackling)",
    price: 12500,
    category: "Repeating Shots",
    image: "/images/Bacardi.jpg",
  },

  {
    name: "Swing Pots/Rollick pop/Cha cha Pop",
    price: 510,
    category: "Fancy Novelties",
    image: "/images/ChaChaPop.jpg",
  },

  {
    name: "Selfie Stick",
    price: 380,
    category: "Elite Series",
    image: "/images/SelfieStick.jpg",
  },

  {
    name: "7 Cm Magic Pencil",
    price: 150,
    category: "Candles & Twinkling Star",
    image: "/images/7CmMagicPencil.jpg",
  },

  {
    name: "60 Shot I Max",
    price: 5250,
    category: "Repeating Shots",
    image: "/images/60ShotImax.jpg",
  },

  {
    name: "Snake Serpent Egg(Sony)(50Pcs)",
    price: 190,
    category: "Color Matches",
    image: "/images/SnakeSerpent.jpg",
  },

  {
    name: "Super Deluxe 10 in 1",
    price: 330,
    category: "Color Matches",
    image: "/images/SuperDeluxe.jpg",
  },

  {
    name: "Baby Matches",
    price: 50,
    category: "Color Matches",
    image: "/images/BabyMatches.jpg",
  },

   {
    name: "2\"\ Fancy(3 Pcs Mix)",
    price: 2000,
    category: "Aerial Magic Fancy",
    image: "/images/2fancy3.jpg",
  },

  {
    name: "2\"\ Fancy(2 Pcs Mix)",
    price: 1635,
    category: "Aerial Magic Fancy",
    image: "/images/2fancy2.jpg",
  },

  {
    name: "3\"\ Fancy(2 Pcs)",
    price: 3000,
    category: "Aerial Magic Fancy",
    image: "/images/3fancy2.jpg",
  },
  
   {
    name: "2\"\ Fancy(3 Step)",
    price: 900,
    category: "Aerial Magic Fancy",
    image: "/images/2fancy3s.jpg",
  },

  {
    name: "Magic Show(Money in Bank)(2Pcs)",
    price: 1100,
    category: "Paper Bombs",
    image: "/images/Money.jpg",
  },

  {
    name: "Pringles Mix & 5 Colors",
    price: 180,
    category: "Elite Series",
    image: "/images/Pringlemix.jpg",
  },
  // 🔽 Add more products here if needed
];

// ✅ Reset products (wipe + insert fresh)
// ----------------- Products -----------------
app.get("/api/reset-products", async (req, res) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products || []); // Ensure products array exists
    res.json({ success: true, message: "✅ Products reset (old cleared, new inserted)" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "❌ Error resetting products" });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const items = await Product.find();
    console.log("Products:", items);
    res.json(items);
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.get("/api/count", async (req, res) => {
  try {
    const count = await Product.countDocuments();
    res.json({ total: count });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error counting products" });
  }
});

// ----------------- Auth -----------------
app.post("/api/signup", async (req, res) => {
  try {
    const { name, phone, email, place, district, password, confirmPassword } = req.body;

    if (!name || !phone || !email || !place || !district || !password || !confirmPassword) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match" });
    }

    const existing = await User.findOne({ $or: [{ phone }, { email }] });
    if (existing) return res.status(400).json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, phone, email, place, district, password: hashedPassword });
    await user.save();

    res.json({ success: true, message: "Signup successful" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post("/api/signin", async (req, res) => {
  try {
    const { phoneOrEmail, password } = req.body;

    const user = await User.findOne({ $or: [{ phone: phoneOrEmail }, { email: phoneOrEmail }] });
    if (!user) return res.status(400).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.json({ success: true, user: { id: user._id, name: user.name, phone: user.phone, email: user.email }, token });
  } catch (err) {
    console.error("Signin error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ----------------- Debug -----------------
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().select("-__v -password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ----------------- Health -----------------
app.get("/api/health", (req, res) => res.json({ ok: true }));

// ----------------- Serve React -----------------
if (process.env.NODE_ENV === "production") {
  const clientBuildPath = path.join(__dirname, "client", "build");
  if (fs.existsSync(clientBuildPath)) {
    app.use(express.static(clientBuildPath));
    app.get("*", (req, res) => res.sendFile(path.join(clientBuildPath, "index.html")));
  }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));