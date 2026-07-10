import express from "express";
import vendorDocRouter from './vendor-document/router.js';
import vendorRouter from './vendor/router.js';
import workRouter from './work/router.js';

const router = express.Router();

router.use('/vendor', vendorRouter);
router.use('/vendor-doc', vendorDocRouter);
router.use('/work', workRouter);

export default router;