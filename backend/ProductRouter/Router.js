const express = require('express');

const Controller = require('../ProductController/Controller');
const router = express.Router();

router.get("/", Controller.getAllproduct);
router.get("/:id",Controller.getproduct);
router.post("/",Controller.createProduct);
router.put("/:id",Controller.putproduct);
router.patch("/:id",Controller.patchproduct);
router.delete("/:id",Controller.deleteproduct);

exports.router = router;
