import express from "express";
import {
    getExternalEmployees,
    getExternalEmployeeById,
    createExternalEmployee,
    updateExternalEmployee,
    deleteExternalEmployee
} from "../controllers/ExternalEmployees.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/externalEmployees', verifyUser, adminOnly, getExternalEmployees);
router.get('/externalEmployees/:id', verifyUser, adminOnly, getExternalEmployeeById);
router.post('/externalEmployees', verifyUser, adminOnly, createExternalEmployee);
router.patch('/externalEmployees/:id', verifyUser, adminOnly, updateExternalEmployee);
router.delete('/externalEmployees/:id', verifyUser, adminOnly, deleteExternalEmployee);

export default router;