import express from "express";
import {
    getGallerys,
    getGalleryById,
    createGallery,
    updateGallery,
    deleteGallery
} from "../controllers/Gallerys.js";
import { verifyUser } from "../middleware/AuthUser.js";


const router = express.Router();

router.get('/gallerys', getGallerys);
router.get('/gallerys/:id', getGalleryById);
router.post('/gallerys', createGallery);
router.patch('/gallerys/:id', updateGallery);
router.delete('/gallerys/:id', deleteGallery);

// router.get('/listgallerys', getListGallerys);
// router.get('/listgallerys/:id', getListGalleryById);

export default router;