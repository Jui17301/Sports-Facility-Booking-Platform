import express, { Request, Response } from "express";
import notFound from "./app/middlewares/notFound";
import  globalErrorHandler  from "./app/middlewares/globalErrorHandler";

const app = express();

//parsers
app.use(express.json());

// app.use("/api/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
