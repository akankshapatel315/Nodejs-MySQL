const dbTable = require("../models");
const User = dbTable.users;

const messageForServerError = "Error occurred while creating the Product";

const addUser = async (req: any, res: any) => {
  const info = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    isdeleted: false,
    role: req.body.role,
  };
  try {
    const existingUser = await User.findOne({ where: { email: info.email } });

    if (existingUser) {
      return res.status(400).send({
        message: "Email already exists. Please use a different email.",
      });
    }
    const user = await User.create(info);
    res.status(200).send({ data: user, message: "Registered successfully" });
  } catch (err: any) {
    res.status(500).send({
      message: messageForServerError,
    });
  }
};

const login = async (req: any, res: any) => {
  const info = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const existingUser = await User.findOne({
      where: { email: info.email, password: info.password, isDeleted: false },
    });

    if (!existingUser) {
      res.status(404).send({ message: "user not found" });
    } else {
      if (existingUser.role != "admin") {
        res
          .status(400)
          .send({ message: "user is not register with admin role!" });
      } else {
        res.status(200).send({ message: "login successfully" });
      }
    }

    // res.status(200).send({ data: user, message: "Registered successfully" });
  } catch (err: any) {
    res.status(500).send({
      message: messageForServerError,
    });
  }
};
module.exports = { addUser, login };
