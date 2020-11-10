import GithubCard from "../models/github.model";
import dotenv from "dotenv";

dotenv.config();

class Cards {
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

  updateData = async (request: any, response: any): Promise<void> => {
    const {
      id,
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
        await GithubCard.findByIdAndUpdate(
          { _id: id },
          { name, github, homepage, description, stack, emoji }
        );
        return response.status(200).json({
          message: "Card successfully deleted",
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

  deleteData = async (request: any, response: any): Promise<void> => {
    const { id, secret } = request.body;
    try {
      if (secret === process.env.SECRET) {
        await GithubCard.findByIdAndDelete({
          _id: id,
        });
        return response.status(200).json({
          message: "Card successfully deleted",
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

  getData = async (request: any, response: any): Promise<void> => {
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

export default new Cards();
