import { Request, Response } from "express";
import { MarketModel } from "../model";

export const findItems = async (req: Request, res: Response) => {
    try {
        const items = await MarketModel.find();
        res.status(200).json(items);
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Failed to fetch items." });
    }
};
