const server = require("express");
const userRoute = require("../routes/userRoutes");

const mainRouter = server.Router();

mainRouter.use(userRoute);

module.exports = mainRouter;
