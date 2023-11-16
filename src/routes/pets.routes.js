import { Router } from "express";
import { getPets } from "../controllers/pets.controller";
import { getPetId } from "../controllers/pets.controller";
import { createAPet } from "../controllers/pets.controller";
import { updateAPet } from "../controllers/pets.controller";
import { deletePet } from "../controllers/pets.controller";

const petRoutes = Router();

petRoutes.get("/", getPets);

petRoutes.get("/:id", getPetId);

petRoutes.post("/", createAPet);

petRoutes.put("/:id", updateAPet);

petRoutes.delete("/:id", deletePet);

export default petRoutes;