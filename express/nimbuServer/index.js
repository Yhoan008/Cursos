const express = require("express");
const path = require("path");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
