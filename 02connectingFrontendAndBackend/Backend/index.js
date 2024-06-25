import dontenv from "dotenv";
dontenv.config();
// const express = require('express')
import express from "express";
// Put type:'module' in package.json
// This solves the moduleJS import problem

const app = express();
const port = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//   res.send("Server is up and ready");
// });

app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke1",

      content: "Why did the author get married? She found Mr. Write.",
    },
    {
      id: 2,
      title: "Joke2",
      content:
        "Why don't skeletons skydive? They don't have the guts to do it.",
    },
    {
      id: 3,
      title: "Joke3",
      content: "Where do cucumbers go on date night? The salad bar.",
    },
    {
      id: 4,
      title: "Joke4",
      content:
        "Did you hear about the pine tree that got a timeout? It was being knotty.",
    },
    {
      id: 5,
      title: "Joke5",
      content: "What do you say to a cow that gets in your way? Moooo-ve!",
    },
  ];
  res.send(jokes);
});
