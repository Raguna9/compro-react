import express from "express";
import {
    getExternalEmployees,
    getExternalEmployeeById,
    createExternalEmployee,
    updateExternalEmployee,
    deleteExternalEmployee
} from "../controllers/ExternalEmployees.js";

const router = express.Router();

router.get('/externalEmployees', getExternalEmployees);
router.get('/externalEmployees/:id', getExternalEmployeeById);
router.post('/externalEmployees', createExternalEmployee);
router.patch('/externalEmployees/:id', updateExternalEmployee);
router.delete('/externalEmployees/:id', deleteExternalEmployee);

export default router;