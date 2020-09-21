import { Request, Response } from "express";
import { getDronesInfo } from "./DronesController";

export default [
    {
        path: "/drones",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.json(getDronesInfo());
        }
    }
];