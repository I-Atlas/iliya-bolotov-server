import dotenv from "dotenv";

dotenv.config();

class Email {
  getData = async (request: any, response: any): Promise<void> => {
    try {
      const data = {
        serviceId: process.env.SERVICE_ID,
        templateId: process.env.TEMPLATE_ID,
        userId: process.env.USER_ID,
      };
      return response.status(200).json(data);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        error,
      });
    }
  };
}

export default new Email();
