import prisma from "@ws/utils/prisma";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", async (_req, res) => {
	const users = await prisma.user.findMany();
	res.json(users);
});

app.listen(5000, () => console.log("🚀 API running on http://localhost:5000"));
