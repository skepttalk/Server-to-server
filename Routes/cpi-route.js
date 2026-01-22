import express from "express";
import controlcpi from "../controllers/cpi-controller.js";
const cpiRouter = express.Router();

cpiRouter.get('/cpi',controlcpi);


export default cpiRouter


