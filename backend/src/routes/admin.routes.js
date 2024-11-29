const express = require("express");
const authenticate = require("../middlewares/authenticate");


const adminRouter = express.Router();

adminRouter.route("").post(authenticate);

module.exports = adminRouter;
