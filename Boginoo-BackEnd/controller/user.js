import User from "../model/User.js";
import jwt from "jsonwebtoken";
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ ...user }, "T0PS3CR3T", { expiresIn: "1d" });
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });
    const token = jwt.sign({ user }, "T0PS3CR3T", { expiresIn: "1d" });
    const isMatch = await user.comparePassword(password);
    console.log(isMatch);
    if (!isMatch) {
      res.send("fuck");
    }

    res.status(200).send({
      success: true,
      data: user,
      token: token,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
// export const forget = async (req, res) => {
//   try {
//     const user = await User.findOne({
//       username: req.body.username,
//     });

//     if (req.body.username === user.username) {
//       res.status(200).send({
//         success: true,
//         data: user.password,
//       });
//     }
//   } catch (error) {
//     res.status(400).send({
//       success: false,
//       data: error.message,
//     });
//   }
// };