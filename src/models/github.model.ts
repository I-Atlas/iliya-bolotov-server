import mongoose from "mongoose";

const githubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  github: {
    type: String,
  },
  homepage: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  emoji: {
    type: String,
    required: true,
  },
});

export = mongoose.model("GithubCard", githubSchema);
