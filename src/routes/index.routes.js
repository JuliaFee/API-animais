import { Router } from "express";
import petRoutes from "./pets.routes";

const routes = Router();

routes.use("/pets", petRoutes);

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "OK" });
});

export default routes