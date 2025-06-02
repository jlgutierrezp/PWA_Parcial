import app from "./apps";
import connectDB from "../config/db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Iniciando Servidor ${PORT}`);
    });
  } catch (error) {
    console.error("Error iniciando Servidor:", error);
    process.exit(1);
  }
};

startServer();

