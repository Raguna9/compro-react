import express from "express";
import {
    getGallerys,
    getGalleryById,
    createGallery,
    updateGallery,
    deleteGallery
} from "../controllers/Gallerys.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";


const router = express.Router();

router.get('/gallerys', verifyUser, adminOnly, getGallerys);
router.get('/gallerys/:id', verifyUser, adminOnly, getGalleryById);
router.post('/gallerys', verifyUser, adminOnly, createGallery);
router.patch('/gallerys/:id', verifyUser, adminOnly, updateGallery);
router.delete('/gallerys/:id', verifyUser, adminOnly, deleteGallery);

// router.get('/listgallerys', getListGallerys);
// router.get('/listgallerys/:id', getListGalleryById);

export default router;