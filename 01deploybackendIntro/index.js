require("dotenv").config();
const express = require("express"); //CommonJS Syntax
import express from "express"//Module JS Syntax
const app = express();

const githubData = {
  login: "Aa-sheesh",
  id: 136082879,
  node_id: "U_kgDOCBx1vw",
  avatar_url: "https://avatars.githubusercontent.com/u/136082879?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Aa-sheesh",
  html_url: "https://github.com/Aa-sheesh",
  followers_url: "https://api.github.com/users/Aa-sheesh/followers",
  following_url:
    "https://api.github.com/users/Aa-sheesh/following{/other_user}",
  gists_url: "https://api.github.com/users/Aa-sheesh/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Aa-sheesh/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Aa-sheesh/subscriptions",
  organizations_url: "https://api.github.com/users/Aa-sheesh/orgs",
  repos_url: "https://api.github.com/users/Aa-sheesh/repos",
  events_url: "https://api.github.com/users/Aa-sheesh/events{/privacy}",
  received_events_url: "https://api.github.com/users/Aa-sheesh/received_events",
  type: "User",
  site_admin: false,
  name: "Aashish Singh",
  company: null,
  blog: "https://linktr.ee/aa_sheesh",
  location: null,
  email: null,
  hireable: true,
  bio: "I am a full stack web developer who is open to connect and learn along the way. Feel free to drop a dm and connect.",
  twitter_username: null,
  public_repos: 21,
  public_gists: 0,
  followers: 2,
  following: 13,
  created_at: "2023-06-09T11:29:36Z",
  updated_at: "2024-06-21T14:09:43Z",
};

app.get("/github", (req, res) => [res.json(githubData)]);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("aashishdotcom");
});
app.get("/login", (req, res) => {
  res.send(`<h1>Login to the app</h1>`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
