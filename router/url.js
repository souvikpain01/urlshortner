import { Router } from "express";
import { handleUrlCreation,handleFindUrl } from "../controller/url.js";

const router=Router();

router.post('/url',handleUrlCreation);
router.get('/url1',handleFindUrl);
export {router}