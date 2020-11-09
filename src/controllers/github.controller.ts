import GithubCard from "../models/github.model";
import dotenv from "dotenv";

dotenv.config();

class Github {
  createData = async (request: any, response: any): Promise<void> => {
    const {
      name,
      github,
      homepage,
      description,
      stack,
      emoji,
      secret,
    } = request.body;
    try {
      if (secret === process.env.SECRET) {
        const githubCard = new GithubCard({
          name,
          github,
          homepage,
          description,
          stack,
          emoji,
        });
        await githubCard.save();
        return response.status(201).json({
          message: "Card data successfully created",
        });
      }
      return response.status(500).json({
        error: "Bad secret key",
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        error,
      });
    }
  };

  getRepos = async (request: any, response: any): Promise<void> => {
    try {
      const data = await GithubCard.find();
      return response.status(200).json(data);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        error,
      });
    }
  };
}

export default new Github();
