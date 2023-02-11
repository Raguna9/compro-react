import express from "express";
import {
    getFAQs,
    getFAQById,
    createFAQ,
    updateFAQ,
    deleteFAQ
} from "../controllers/FAQs.js";


const router = express.Router();

router.get('/faqs', getFAQs);
router.get('/faqs/:id', getFAQById);
router.post('/faqs', createFAQ);
router.patch('/faqs/:id', updateFAQ);
router.delete('/faqs/:id', deleteFAQ);

export default router;