import express from 'express';
import conncetDB from "./database/database.js"
import usersRouter from "./routes/users.js"
import recipesRouter from "./routes/recipes.js";

const app = express();
const PORT = process.env.PORT || 4000;
import cors from "cors";

// MongoDB connection
conncetDB();
app.use(cors());
app.use(express.json())

app.use("/auth", usersRouter)
app.use("/recipes", recipesRouter)
app.get('/', (req, res) => {
  res.send('Hello, MERN backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});