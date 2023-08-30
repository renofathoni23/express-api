const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/api/data", (req, res) => {
  const userId = req.header("User-id");
  const scope = req.header("Scope");

  if (userId === "ifabula" && scope === "user") {
    const data = { message: "Ini adalah data dari GET API" };
    res.status(200).json(data);
  } else {
    res
      .status(401)
      .json({ responseCode: 401, responseMessage: "UNAUTHORIZED" });
  }
});

app.post("/api/data", (req, res) => {
  const userId = req.header("User-id");
  const scope = req.header("Scope");

  if (userId === "ifabula" && scope === "user") {
    const requestData = req.body;
    const responseData = {
      message: "Data berhasil diterima melalui POST API",
      requestData,
    };
    res.status(200).json(responseData);
  } else {
    res
      .status(401)
      .json({ responseCode: 401, responseMessage: "UNAUTHORIZED" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
