const express = require("express");
const cors = require("cors");
const complianceRoutes = require("./routes/complianceRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/api", complianceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
