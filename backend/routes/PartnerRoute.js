import express from "express";
import {
    getPartners,
    getPartnerById,
    createPartner,
    updatePartner,
    deletePartner,
    getPartnerCount
} from "../controllers/Partners.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/partners', getPartners);
router.get('/partners/count', getPartnerCount);
router.get('/partners/:id', getPartnerById);
router.post('/partners', verifyUser, adminOnly, createPartner);
router.patch('/partners/:id', verifyUser, adminOnly, updatePartner);
router.delete('/partners/:id', verifyUser, adminOnly, deletePartner);


export default router;