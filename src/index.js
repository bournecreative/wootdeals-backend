const express = require("express");
const cors = require("cors");

const app = express();

const allRoute = require("./routes/All");
const ComputersRoute = require("./routes/Computer");
const ElectronicsRoute = require("./routes/Electronic");
const HomeRoute = require("./routes/Home");
const ToolsRoute = require("./routes/Tool");
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:3000/",
  })
);
app.use("/", allRoute);
app.use("/computers", ComputersRoute);
app.use("/electronics", ElectronicsRoute);
app.use("/home", HomeRoute);
app.use("/tools", ToolsRoute);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
