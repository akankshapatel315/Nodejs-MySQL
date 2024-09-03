const expresss = require("express");
const userController = require("../Controllers/userController");

const userRouter = expresss.Router();

userRouter.post("/register", userController.addUser);
userRouter.post("/login", userController.login);

module.exports = userRouter;
