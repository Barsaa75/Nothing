import User from "../model/User.js";

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
    const user = await User.findOne({
      username: req.body.username,
    });

    if (req.body.password !== user.password) {
      throw new Error("Нэр эсвэл нууц үг таарсангүй");
    }
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
export const forget = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (req.body.username === user.username) {
      res.status(200).send({
        success: true,
        data: user.password,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};