const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/farmer", require("./routes/farmer"));
app.use("/api/admin", require("./routes/admin"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
