import { Router } from "express";
import {
    getPets,
    getPetId,
    createAPet,
    updateAPet,
    deletePet
} from "../controllers/pets.controller.js";

const petRoutes = Router();

petRoutes.get("/", getPets);

petRoutes.get("/:id", getPetId);

petRoutes.post("/", createAPet);

petRoutes.put("/:id", updateAPet);

petRoutes.delete("/:id", deletePet);

export default petRoutes;